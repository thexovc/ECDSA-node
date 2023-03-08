import server from "./server";

function Wallet({ address, setAddress, balance, setBalance, setPublicKey }) {

  async function onChange(evt) {
    const address = evt.target.value;
    setAddress(address);
    if (address) {
      const {
        data: { balance},
      } = await server.get(`balance/${address}`);
      setBalance(balance);
      setPublicKey(evt.target.value)
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Public Key
        <br />
        <input placeholder="Type an address, for example: 0x1" value={address} onChange={onChange}></input>
      </label>

      <div className="balance">Balance: <span style={{color: "hsl(27,90%,55%)", fontWeight:"bold"}}> {balance} </span> </div>
    </div>
  );
}

export default Wallet;
