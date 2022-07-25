import React from "react";

function Item({item}){
    return(
        <div className="card">
            <img src={item.image} alt="image"></img>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <h2>{item.price}</h2>
        </div>
    )

}
export default Item;