import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Items from "./Items";

function Home({ items }) {
  const [searchItems, setSearchItems] = useState(items);

  useEffect(()=>{
    setSearchItems(items);
  }, [items])

  return (
    <>
      <Navbar />
      <div className="categories">
        <button className="category">All</button>
        <button className="category">Women </button>
        <button className="category">Men </button>
        <button className="category">Jewelery</button>
        {/* search functionality */}
        <input
          id="search-input"
          type="text"
          placeholder="search..."
          onChange={(e) => {
            let query = items.filter((item) =>
              item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            console.log("search", query);
            setSearchItems(query);
          }}
        />
      </div>

      <div className="card-container">
        {searchItems.map((item) => {
          return <Items item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
export default Home;
