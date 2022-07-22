import React, { useState } from "react";
import "./Check-out.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CheckOut = () => {
  const [active, setActive] = useState(true);
  const { cart, totalPrice, clearCart } = CartContext();
  const [idUser, setIduser] = useState("");
  const [user, setUser] = useState({});

  const order = {
    buyer: {
      name: user.username,
      email: user.email,
      phone: user.phone,
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
      setIduser(result.id);
    });
    setActive(!active);
    clearCart();
  };

  const openModal = () => {
    setActive(!active);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  // console.log("el codigo guardado es: " + idUser);
  return (
    <div className="checkout-container">
      {active ? (
        <>
          <div className="asda">
            <h2>Complete data</h2>
            <h5>To confirm your purchase, please enter your data:</h5>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="items-start">
                  <div className="form-field">
                    <label className="form-label">Enter your name:</label>
                    <input
                      required
                      type="text"
                      name="username"
                      className="form-input"
                      placeholder="Username"
                      value={user.username || ""}
                      onChange={handleChange}
                    />
                  </div>

                  {/* <input type="submit" /> */}
                  <div className="form-field">
                    <label className="form-label">Enter your email:</label>
                    <input
                      required
                      className="form-input"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={user.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Repeat your email:</label>
                    <input
                      required
                      className="form-input"
                      type="email"
                      placeholder="Repeat your email"
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Enter your phone:</label>
                    <input
                      required
                      className="form-input"
                      type="tel"
                      name="phone"
                      placeholder="Number phone"
                      value={user.phone || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button onClick={btnBuy} type="submit">
                  confirm buy
                </button>
              </form>
            </div>
          </div>
          <div className="form-btn-container">
            <Link to={"/cart"}>Go to cart</Link>
            <br />
            <br />
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
              <br />[{idUser}]
            </p>
            <button onClick={openModal}>close</button>
            <Link to={"/"}>Back</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
