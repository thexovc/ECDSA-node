import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";
import Address from "./Address";
import Popup from "./Popup";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [publicKey, setPublicKey] = useState("")
  const [verified, setVerified] = useState(false)
  const [show, setShow] = useState(false)

  return (
    <div className="app">
      <div className="addr">
      <Address publicKey={publicKey} />
      </div>

      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        setPublicKey={setPublicKey}
      />
      <Transfer setShow={setShow} setBalance={setBalance} address={address}  verified={verified} setVerified={setVerified}/>
      <Popup show={show} setShow={setShow} publicKey={publicKey} setVerified={setVerified} />
    </div>
  );
}

export default App;
