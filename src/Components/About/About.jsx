import React from "react";
import SvgLogo from "../../assets/svgicon2.svg"
import { useEffect } from "react";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const About=()=>{

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
                    <div className="aboutContainer">
        <h1 style={{color:"black"}}>In this section I will tell you about my experience in react, but I am still learning.</h1>
        <br /><br />
        <img src={SvgLogo} alt="" srcset="" />
        </div>
        }
        </>

    )
}

export default About