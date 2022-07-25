import React, {useState} from "react";
import Item from "./Item";

function Home({items}){

    return(
        <div className="card-container">
            {items.map((item)=>(
                <Item item={item} key={item.id} />
            ))}
        </div>
    )

}
export default Home;