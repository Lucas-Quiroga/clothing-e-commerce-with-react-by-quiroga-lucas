import React from "react";
import { useEffect, useState } from "react";
import ItemCount from "../../ItemCount/index";
import "./ItemDetailStyle.css";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import Aos from "aos";
import "aos/dist/aos.css";

const ItemDetail = ({ clothesObject }) => {
  const [cart, setCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addItem } = CartContext();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const onadd = (quantityToAdd) => {
    setCart(true);
    addItem({ quantity: quantityToAdd, ...clothesObject });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="appDetail">
      {loading ? (
        <div className="spinnerItemListeee">
          <h2>Loading...</h2>
          <ClipLoader color={"#000000"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="detail_container">
          <div
            data-aos="fade-left"
            className="detailObjContainer"
            key={clothesObject.id}
          >
            <img src={clothesObject.pictureUrl} alt="" />
            <div className="detailObjChildren">
              <h3>{clothesObject.title}</h3>
              <h4>Price: {clothesObject.price}</h4>
              <h4>Description: {clothesObject.features}</h4>
              {cart ? (
                <div className="detail_containerChildren">
                  <Link to="/">
                    <button className="btn-detail">Return to catalog</button>
                  </Link>
                  <Link to="/cart">
                    <button className="btn-detail">go to cart</button>
                  </Link>
                </div>
              ) : (
                <div className="detail_container">
                  <ItemCount
                    intial={1}
                    stock={clothesObject.stock}
                    onadd={onadd}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ItemDetail;
