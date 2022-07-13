import React from "react";
import { CartContext } from "../../Context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeItem } = CartContext();
  return (
    <div className="item_cart">
      <img src={product.pictureUrl} alt={product.title} />
      <div>
        <p>Title: {product.title}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Price x u: {product.price}</p>
        <p>Total: {product.quantity * product.price}</p>
        <button onClick={() => removeItem(product.id)}>Delete u</button>
      </div>
    </div>
  );
};

export default ItemCart;
