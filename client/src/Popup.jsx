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
                <h1>Verfiy You own this account</h1>
                <input type="text" onChange={(e) => setPass(e.target.value)}/>
                <button onClick={verify}>Verify</button>
        </div>
    </div>
  )
}

export default Popup