import React from "react";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cart, totalPrice } = CartContext();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (cart.length === 0) {
    return (
      <>
        <p>There are no products</p>
        <Link to="/">Go to catalog</Link>
      </>
    );
  }
  return (
    <>
      {loading ? (
        <div className="spinerC">
          <h2>Loading...</h2>
          <ClipLoader color={"#000000"} loading={loading} size={150} />
        </div>
      ) : (
        cart.map((product) => <ItemCart key={product.id} product={product} />)
      )}
      <p className="p">The total of your purchase is: ${totalPrice()}</p>
    </>
  );
};
export default Cart;
