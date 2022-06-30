import { useState } from "react"
import "./style.css"

const ItemCount = ({stock,intial,onadd}) =>{

    const [value,setValue]=useState(intial)

    const handdleValue=(assignment)=>{
        const result=value+assignment
        if(result<=stock && result >=1){
        setValue(value+assignment)
    } else {
        alert("you can't add/remove more products")
    }
    }

    return(
        <div className="componentCount">
            <h3>Available stock: {stock}</h3>
            <div className="_divChildren">
            <button onClick={()=>handdleValue(-1)}>-</button>
            <span>{value}</span>
            <button onClick={()=>handdleValue(+1)}>+</button>
            </div>
            <button className="btn-add" onClick={()=>onadd(value)}>Add to cart</button>
        </div>
    )
}

export default ItemCount