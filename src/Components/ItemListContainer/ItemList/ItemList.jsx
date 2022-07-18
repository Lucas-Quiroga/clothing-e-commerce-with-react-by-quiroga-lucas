import React from "react";
import Item from "./Item/Item";
import "./ItemList.css";
// import Loading from "../SpinnerLoading/SpinnerLoading";
// import { ClipLoader } from "react-spinners";
// import { useState, useEffect } from "react";

const ItemList = ({ clothing }) => {
  //states
  // const [loading, setLoading] = useState(false)

  // useEffect(() =>{
  //     setLoading(true)
  //     setTimeout(() =>{
  //         setLoading(false)
  //     },2000)
  // },[])

  return (
    <div className="divItemList">
      {/* {
            loading ?
            <div className="spinerItemList">
            <h2>Loading...</h2>
            <ClipLoader color={"#000000"} loading={loading} size={150} />
            </div>
        : */}
      <div className="mapStyle">
        {clothing.map((resp) => (
          <Item key={resp.id} item={resp} />
        ))}
      </div>
      {/* } */}
    </div>
  );
};

export default ItemList;
