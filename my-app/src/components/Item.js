import React from "react";

function Item({item}){
    return (
        <div className="card-item">
            <img src={item.image} alt="image"></img>
            <p>{item.title}</p>
            <p id="description">{item.description}</p>
            <h2>{item.price}</h2>
            <button>Add to Cart</button>
        </div>
    )
    
}

export default Item;