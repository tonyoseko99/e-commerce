import React, { useEffect, useState } from "react";
import Items from "./Items";
import { Link } from "react-router-dom";

function Home() {
  const [items, setItems] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const url = "https://fakestoreapi.com/products/";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setItems(response);
      });
  }, []);

  useEffect(() => {
    setSearchItems(items);
  }, [items]);

  return (
    <div className="container">
      <div className="input">
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
          return (
            
              <Items item={item} />
            
          );
        })}
      </div>
    </div>
  );
}
export default Home;
