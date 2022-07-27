import React from "react";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
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
      <div className="cart_noProducts">
        <p>There are no products</p>
        <Link to="/">
          <button className="btn-detail">Go to catalog</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="appDetail">
      {loading ? (
        <div className="spinnerItem">
          <h2>Loading...</h2>
          <ClipLoader color={"#000000"} loading={loading} size={150} />
        </div>
      ) : (
        cart.map((product) => <ItemCart key={product.id} product={product} />)
      )}
      <p className="p">The total of your purchase is: ${totalPrice()}</p>

      <Link to="/check-out">
        <button className="btn-detail">Go to CheckOut</button>
      </Link>
    </div>
  );
};
export default Cart;
