import React, { useState } from "react";
import "./Check-out.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CheckOut = () => {
  const [active, setActive] = useState(true);
  const { cart, totalPrice, clearCart } = CartContext();
  const [user, setUser] = useState("");

  const order = {
    buyer: {
      name: "luke",
      email: "luke@gmail.com",
      phone: 1164034124,
    },
    items: cart.map((prod) => ({
      id: prod.id,
      title: prod.title,
      price: prod.price,
      quantity: prod.quantity,
    })),
    total: totalPrice(),
  };

  const btnBuy = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((result) => {
      setUser(result.id);
    });
    setActive(!active);
    clearCart();
  };

  // const openModal = () => {
  //   setActive(!active);
  // };

  // console.log("el codigo guardado es: " + user);
  return (
    <div className="checkout-container">
      {active ? (
        <>
          <div className="asda">
            <h2>Complete data</h2>
            <h5>To confirm your purchase, please enter your data:</h5>
            <div className="form-container">
              <form>
                <div className="items-start">
                  <div className="form-field">
                    <label className="form-label">Enter your name:</label>
                    <input
                      required
                      className="form-input"
                      type="text"
                      placeholder="name completed"
                    />
                  </div>

                  {/* <input type="submit" /> */}
                  <div className="form-field">
                    <label className="form-label">Enter your email:</label>
                    <input
                      required
                      className="form-input"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Repeat your email:</label>
                    <input
                      required
                      className="form-input"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-field" form="email">
                    <label className="form-label">Enter your email:</label>
                    <input
                      required
                      className="form-input"
                      type="tel"
                      placeholder="Number phono"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="form-btn-container">
            <Link to={"/cart"}>Go to cart</Link>
            <br />
            <br />
            <button onClick={btnBuy} type="submit">
              confirm buy
            </button>
          </div>
        </>
      ) : (
        <div className="box-model">
          <div className="modalOpen">
            <h3 className="h3Modal"> thank you for your purchase:</h3>
            <p id="pLorem">
              we will send you an email when your order leaves our warehouse,
              your reference code is:
              <br />
              <br />[{user}]
            </p>
            {/* <button onClick={openModal}>close</button> */}
            <Link to={"/"}>Back</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
