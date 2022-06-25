import React from "react";
import Item from "./Item/Item";
import "./ItemList.css"
import Loading from "../SpinnerLoading/SpinnerLoading";
import { useState } from "react";

//function the spinner with settimeout

const ItemList=({ clothing })=>{

      //states
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)

    const changeState=()=>{
        setShow(!show)
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },3000);
    }
   
    
    //condicion spinner
    if(loading){
        return(
        <Loading />
        )
    }else{
    return(
        <div className="divItemList">
        <button className="btn-act" onClick={()=>changeState()}>Show / Hide</button>
        {show 
        ? <div className="mapStyle">
        {clothing.map((resp) => <Item key={resp.id} item={resp}/>)}
        </div>
        : console.log("error")}
        </div>
    )
}
}
export default ItemList