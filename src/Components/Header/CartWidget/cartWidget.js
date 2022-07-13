import React from "react";
import "./cardWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../../Context/CartContext";

const CartWidget = () => {
  const { totalProduct } = CartContext();
  return (
    <div className="divCart">
      <i className="cart-btn" alt="cart-icon">
        <FontAwesomeIcon id="i_cart" icon={faCartShopping} />
      </i>
      <div className="buttonNumber">
        <span className="spanWidget">{totalProduct() || ""}</span>
      </div>
    </div>
  );
};

export default CartWidget;
