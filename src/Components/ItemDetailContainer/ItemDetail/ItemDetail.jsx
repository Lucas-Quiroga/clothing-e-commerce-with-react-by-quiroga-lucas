import React from "react";
import { useEffect, useState } from "react";
import ItemCount from "../../ItemCount/index";
import "./ItemDetailStyle.css";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";

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

  return (
    <div className="app">
      {loading ? (
        <div className="spinerC">
          <h2>Loading...</h2>
          <ClipLoader color={"#000000"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="detailObjContainer" key={clothesObject.id}>
          <img src={clothesObject.pictureUrl} alt="" />
          <div className="detailObjChildren">
            <h3>{clothesObject.title}</h3>
            <h4>Price: {clothesObject.price}</h4>
            <h4>Description: {clothesObject.features}</h4>
            {cart ? (
              <>
                <Link className="aStyle" to={"/cart"}>
                  Go to cart
                </Link>
                <Link id="aStyle" to={"/"}>
                  Return to catalog
                </Link>
              </>
            ) : (
              <ItemCount intial={1} stock={clothesObject.stock} onadd={onadd} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default ItemDetail;
