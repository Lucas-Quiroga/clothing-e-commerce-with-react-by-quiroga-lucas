import React from "react";
import {RotateLoader} from "react-spinners"
import "./style.css"

const Loading=()=>{
    return(
        <div className="spinner">
        <h3 style={{color: "black"}}>Loading the product...</h3>
        <br /><br />
        <RotateLoader />
        </div>
    )
}

export default Loading