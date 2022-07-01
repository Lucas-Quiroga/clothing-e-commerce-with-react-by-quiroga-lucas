import React from "react";
import "./Item.css"
import { Link } from "react-router-dom" 


const Item=({ item })=>{

    return(
        <div className="card">
            <h2 className="card-title">{item.title}</h2>
            <img className="card-img" src={item.pictureUrl} alt=""/>
            <h4>Price: {item.price}</h4>
            <h4 key={item.id}>ID: {item.id}</h4>
            <Link to={`/detail/${item.id}`}>
            <button>More details</button>
            </Link>
            <h3>Stock: {item.stock}</h3>
        </div>
    )
}


export default Item

