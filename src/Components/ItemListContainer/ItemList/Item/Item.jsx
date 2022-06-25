import React from "react";
import "./Item.css"
import count from "../../../ItemCount/index"


const Item=({ item })=>{

    return(
        <div className="card">
            <h3>{item.title}</h3>
            <img src={item.pictureUrl} alt=""/>
            <h4>Price: {item.price}</h4>
            <h4 key={item.id}>ID: {item.id}</h4>
            <button>More details</button>
            <h3>Stock: {item.stock}</h3>
            <count />
        </div>
    )
}


export default Item

