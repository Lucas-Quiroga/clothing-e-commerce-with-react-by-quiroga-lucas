import React from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

const firstObj = { 
    "id": 1,
    "title": "Nike Windbreaker Jacket Blk 90s Retro",
    "price": "120 €",
    "pictureUrl": "https://i.pinimg.com/564x/01/e6/45/01e6457c32c7356af72f18849ae03051.jpg",
    "stock": 2,
    "features": "Vintage excellent condition still looks good in vintage, see all photos, the jacket itself is in very good condition." 
}

const ItemDetailContainer=()=>{

const [clothesObject, setClothesObject] = useState({})

    useEffect(()=>{
        const getClothes = new Promise(resolve =>{
            setTimeout(()=> {
                resolve(firstObj);
            },2000);
        });
        getClothes.then(resolve=> setClothesObject(resolve));
    },[])

    return(
            <ItemDetail clothesObject={clothesObject} />
    )
}

export default ItemDetailContainer