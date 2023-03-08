import { useEffect, useState } from "react";

const Address = ({publicKey}) => {         

  useEffect(() => {
    console.log(publicKey)
  }, [publicKey])
  

  return (
    <div className="address__con">
        <h3>0x{publicKey?.slice(0, 10)} . . .</h3>
    </div>
  )
}

export default Address