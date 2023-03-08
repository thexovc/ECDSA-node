import server from "./server";

import { useState } from "react"

const Popup = () => {

    const [pass, setPass] = useState("")

   
  async function verify() {
   
    if (pass != "") {
      const {
        data: {sign},
      } = await server.get(`verify/${pass}`);
    
      console.log(sign)
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