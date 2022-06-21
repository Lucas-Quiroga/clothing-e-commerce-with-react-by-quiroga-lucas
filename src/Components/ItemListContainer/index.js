import React from "react";
import "./style.css"

const ItemListContainer = ({greeting}) =>{
    return(
        <div className="landing">
            <span id="spanLanding">{greeting}</span>
        </div>
    )
}

export default ItemListContainer