import React from "react";
import Navbar from "./Navbar";
import Items from "./Items";

function Home({ items }) {
  return (
    <>
    <Navbar />
      <div className="categories">
        <button className="category">All</button>
        <button className="category">Women </button>
        <button className="category">Men </button>
        <button className="category">Jewelery</button>
        <input id="search-input" type="text" placeholder="search..."></input>
      </div>

      <div className="card-container">
        {items.map((item)=>{
            return (
                <Items item={item} key={item.id}/>
            )
        })}
      </div>
    </>
  );
}
export default Home;
