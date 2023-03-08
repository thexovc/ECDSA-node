import { useState } from "react";
import server from "./server";

function Transfer({ address, setBalance, verified, setVerified, setShow}) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    if(verified){
      try {
        const {
          data: { balance },
        } = await server.post(`send`, {
          sender: address,
          amount: parseInt(sendAmount),
          recipient,
        });
        setBalance(balance);
        setVerified(false)
      } catch (ex) {
        setVerified(false)
        alert(ex.response.data.message);
      }
    } else{
      console.log("please verify")
    }
  }

  const showPop = () => {
    setShow(true)
  }


  return (
    <form className="container transfer">
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

    {verified ?  
     <input onClick={transfer} className="button" value="Transfer" /> 
    : 
      <input onClick={showPop} className="button-null" value="Verify" />}
    </form>
  );
}

export default Transfer;
