import React from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
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

  return <ItemDetail clothesObject={clothesObject} />;
};

export default ItemDetailContainer;
