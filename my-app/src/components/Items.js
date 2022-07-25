import React from "react";
import Item from "./Item";

function Items({item}){
    return(
        <div className="card">
            <img src={item.image} alt="image"></img>
            <p>{item.title}</p>
            <p id="description">{item.description}</p>
            <h2>{item.price}</h2>
        </div>
    )

}
export default Items;