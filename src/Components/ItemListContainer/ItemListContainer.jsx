import React, { useEffect , useState } from "react";
import "./style.css"
import ItemList from "./ItemList/ItemList"
import clothesJson from "./clothes.json"


const ItemListContainer = ({ greeting }) =>{


    const promiseClothes = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve(clothesJson);
        },2000)
    });

    const [clothing, setClothing] = useState([])

    useEffect(()=>{
       promiseClothes.then(resolve=>{
        setClothing(resolve)
       })
    },[])
    

    return(
        <div className="landing">
            <span id="spanLanding">{greeting}</span>
            <ItemList clothing={clothing} />
        </div>
    )
}
export default ItemListContainer