import server from "./server";

import { useState } from "react"
import { useSpring, animated } from "react-spring";

const Popup = ({publicKey, setVerified, show, setShow}) => {

  const [pass, setPass] = useState("")

  // const animation = useSpring({
  //   transform:  "translateY(0)"
  // });
   
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
    </div>
  )
}

export default Popup