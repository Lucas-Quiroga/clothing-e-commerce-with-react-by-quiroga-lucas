import React from "react";
import SvgLogo from "../../assets/svgicon.svg"
import { useEffect } from "react";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const Cart=()=>{

    const [loading, setLoading] = useState(false)
    useEffect(() =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        },3000)
    },[])

    return(
        <>
        {
                    loading ?
                    <div className="spinerC">
                        <h2>Loading...</h2>
                        <ClipLoader color={"#000000"} loading={loading} size={150} />
                        </div>
                    :
                    <div className="cartContainer">
        <h1 style={{color:"black"}}>I'm still working on this section, sorry for the inconvenience!</h1>
        <h2>Hope to see you soon!</h2>
        <br /><br />
        <img src={SvgLogo} alt="" srcset="" />
        </div>
}
        </>
    )
}

export default Cart