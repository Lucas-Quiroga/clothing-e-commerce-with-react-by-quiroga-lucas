import React from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import ClothesJson from "./clothes.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [clothesObject, setClothesObject] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    const getClothes = new Promise((resolve) => {
      setTimeout(() => {
        resolve(ClothesJson);
      }, 2000);
    });
    getClothes.then((resolve) =>
      setClothesObject(
        resolve.find((clothesDetail) => clothesDetail.id === parseInt(detailId))
      )
    );
  }, []);

  return <ItemDetail clothesObject={clothesObject} />;
};

export default ItemDetailContainer;
