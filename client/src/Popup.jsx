import server from "./server";

import { useState } from "react"

const Popup = ({publicKey, setVerified}) => {

    const [pass, setPass] = useState("")

   
  async function verify() {
   
    if (pass != "") {
      const {
        data,
      } = await server.get(`verify?pass=${pass}&user=${publicKey}`);
    
     if(data){
      setVerified(true)
     } else {
      alert("Not verified")
      setVerified(false)
     }
    } 
  }


  return (
    <div className="popup__con">
        <div className="popup">
                <label>
                  Verfiy you own this account
                <input type="text" onChange={(e) => setPass(e.target.value)}/>
                <button onClick={verify}>Verify</button>
                </label>
        </div>
    </div>
  )
}

export default Popup