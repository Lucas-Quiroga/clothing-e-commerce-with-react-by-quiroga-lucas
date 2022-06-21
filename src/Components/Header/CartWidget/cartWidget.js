import React from "react";
import "./cardWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () =>{
    return (
        <div className="divCart">
       <button className="cart-btn" alt="cart-icon"><FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    )
}

export default CartWidget 