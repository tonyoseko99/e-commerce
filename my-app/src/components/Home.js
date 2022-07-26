import React from "react";
import Items from "./Items";

function Home({items}){

    return(
        <div className="card-container">
            {items.map((item)=>(
                <Items item={item} key={item.id} />
            ))}
        </div>
    )

}
export default Home;