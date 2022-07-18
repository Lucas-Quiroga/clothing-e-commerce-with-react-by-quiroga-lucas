import React from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
// import ClothesJson from "./clothes.json";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [clothesObject, setClothesObject] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, "products", detailId);
    getDoc(queryDoc).then((res) =>
      setClothesObject({ id: res.id, ...res.data() })
    );
  }, [detailId]);

  // useEffect(() => {
  //   const getClothes = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(ClothesJson);
  //     }, 2000);
  //   });

  //   getClothes.then((resolve) =>
  //     setClothesObject(
  //       resolve.find((clothesDetail) => clothesDetail.id === parseInt(detailId))
  //     )
  //   );
  // }, []);

  return <ItemDetail clothesObject={clothesObject} />;
};

export default ItemDetailContainer;
