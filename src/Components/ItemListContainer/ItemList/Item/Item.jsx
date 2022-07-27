import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Item = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-in" className="card">
      <h2 className="card-title">{item.title}</h2>
      <img className="card-img" src={item.pictureUrl} alt="" />
      <h4>Price: {item.price}</h4>
      <h4 key={item.id}>ID: {item.id}</h4>
      <Link to={`/detail/${item.id}`}>
        <button id="btn-moreDetails" className="action-button">
          More details
        </button>
      </Link>
      <h3>Stock: {item.stock}</h3>
    </div>
  );
};

export default Item;
