const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const secp = require("ethereum-cryptography/secp256k1")
const {toHex} = require("ethereum-cryptography/utils")
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

app.use(cors());
app.use(express.json());


const balances = {
  "04ba4b23f9c7f03be401b9f1d82c5d044c28547d64467ac5bbe4f2afb5c74c884b6b30b9059ea9bad928c8e9afa6548c8a917b6f31ed6f75b541347adcd01c94f9": 100,
  "04e58e6b38c2c09f1364cea66471465e734609ae8fdea6e842bcf16187ed58e8bb859e156d6adc59ed37baf44031ec5d463de82872e54c76b33c658731ec36d0d3": 50,
  "041829e229494abe23c86a1e9fd875c3d2717c566640308aa496cc38ee34afe9b1b8dd83f1a320b96a65ff3bbf4f1e67193360ae39be7cc62468dc5e6eebc2c1d6": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;

  // let getKey = secp.getPublicKey(address);
  // let publicKey = toHex(getKey)

  const balance = balances[address] || 0;
  res.send({ balance });
});


app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});


app.get("/verify/:pass", async (req, res) => {
  const {pass} = req.params;

  let message = "Verify that you own this account";
  let byte = utf8ToBytes(message);
  let hash = keccak256(byte);

  let sign = await secp.sign(hash, pass, {recovered:true});
  console.log("SIGNATURE:", sign);

  let pub = secp.recoverPublicKey(hash, sign.signature, sign.recovered)

  // let addr = secp.verify(sign, hash,)
  console.log(pub)

  res.send({sign});

});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}


// private key: 25f03e116df0a8179d953489b1d083fbbe0b7e815522d86667d5a484c13b266e
// publickey: 04ba4b23f9c7f03be401b9f1d82c5d044c28547d64467ac5bbe4f2afb5c74c884b6b30b9059ea9bad928c8e9afa6548c8a917b6f31ed6f75b541347adcd01c94f9

// private key: f9c22de3cd149107c3017cbbe5ab446ff75642bb5287c46e67d8549548b8b7e9
// publickey: 04e58e6b38c2c09f1364cea66471465e734609ae8fdea6e842bcf16187ed58e8bb859e156d6adc59ed37baf44031ec5d463de82872e54c76b33c658731ec36d0d3

// private key: 0d2b19c4f3153511ff9bb7957f0b6367bcf02b92f85fafec44669773827c9303
// publickey: 041829e229494abe23c86a1e9fd875c3d2717c566640308aa496cc38ee34afe9b1b8dd83f1a320b96a65ff3bbf4f1e67193360ae39be7cc62468dc5e6eebc2c1d6
