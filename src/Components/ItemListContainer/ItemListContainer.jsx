import React, { useEffect , useState } from "react";
import { useParams } from "react-router-dom"
import "./style.css"
import ItemList from "./ItemList/ItemList"
import clothesJson from "./clothes.json"
import { ClipLoader } from "react-spinners";


const ItemListContainer = ({ greeting }) =>{


    const promiseClothes = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve(clothesJson);
        },2000)
    });

    const [clothing, setClothing] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams();

    useEffect(()=>{
        if(categoryId){
            promiseClothes.then(resolve=>setClothing(resolve.filter(clothesCategory=>clothesCategory.category===categoryId)))
        } else{
            promiseClothes.then(resolve=>{setClothing(resolve)})
        }
    },[categoryId])

    useEffect(() =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        },2000)
    },[categoryId])
    

    return(
        <div className="landing">
            {
            loading ?
            <div className="spinerItemList">
            <h2>Loading...</h2>
            <ClipLoader color={"#000000"} loading={loading} size={150} />
            </div>
        :
        <div className="spandiv">
            <span id="spanLanding">{greeting}</span>
            <ItemList clothing={clothing} />
            </div>
}
        </div>
    )
}
export default ItemListContainer