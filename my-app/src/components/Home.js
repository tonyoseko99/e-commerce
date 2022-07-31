import React, { useState } from "react";
import Navbar from "./Navbar";
import Items from "./Items";

function Home({ items }) {
  const [searchItems, setSearchItems] = useState(items);
  return (
    <>
      <Navbar />
      <div className="categories">
        <button className="category">All</button>
        <button className="category">Women </button>
        <button className="category">Men </button>
        <button className="category">Jewelery</button>
        <input
          id="search-input"
          type="text"
          placeholder="search..."
          onChange={(e) => {
            let search = items.filter((item) =>
              item.title.toLowerCase().includes(e.target.value)
            );
            console.log("search", search);
            setSearchItems(search);
          }}
        ></input>
      </div>

      <div className="card-container">
        {items.map((item) => {
          return <Items item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
export default Home;
