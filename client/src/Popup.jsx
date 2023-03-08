import server from "./server";

import { useState } from "react"
import { useSpring, animated } from "react-spring";

const Popup = ({publicKey, setVerified, show, setShow}) => {

  const [pass, setPass] = useState("")
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

   
  async function verify() {
   
    if (pass != "") {
      const {
        data,
      } = await server.get(`verify?pass=${pass}&user=${publicKey}`);
    
     if(data){
      setVerified(true)
      setSuccess(true)
      setError(false)
      setShow(false)
     } else {
      setVerified(false)
      setError(true)
      setSuccess(false)
      setShow(false)
     }
    } 
  }


  return (
    <div className="popup__con" >
       {show && (
         <div
         className="popup">
          <div className="cancel" onClick={() => setShow(false)}>
            <p>X</p>
          </div>
                 <label>
                   <p className="popup__text">Verfiy you own this account</p>
                 <input placeholder="private key" type="text" onChange={(e) => setPass(e.target.value)}/>
                 <button onClick={verify}>Verify</button>
                 </label>
         </div>
       )}

        {error && (
           <div class="alert">
           <span onClick={() => setError(false)} class="closebtn">&times;</span> 
           <strong>Error!</strong> Please try again.
         </div>
        )}

        {success && (
           <div class="alert-suc">
           <span onClick={() => setSuccess(false)} class="closebtn">&times;</span> 
           <strong>Success!</strong> You can now transfer.
         </div>
        )}
   
    </div>
  )
}

export default Popup