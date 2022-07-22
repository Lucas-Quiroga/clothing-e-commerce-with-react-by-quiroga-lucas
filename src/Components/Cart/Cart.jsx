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

  // const order = {
  //   buyer: {
  //     name: "luke",
  //     email: "luke@gmail.com",
  //     phone: 1164034124,
  //   },
  //   items: cart.map((prod) => ({
  //     id: prod.id,
  //     title: prod.title,
  //     price: prod.price,
  //     quantity: prod.quantity,
  //   })),
  //   total: totalPrice(),
  // };

  // const btnBuy = () => {
  //   const db = getFirestore();
  //   const orderCollection = collection(db, "orders");
  //   addDoc(orderCollection, order).then(({ id }) => console.log(id));
  // };

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
      <Link to={"/check-out"}>Go to CheckOut</Link>
    </>
  );
};
export default Cart;
