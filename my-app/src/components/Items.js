import React, { useState, useEffect } from "react";
import Item from "./Item";

function Items({ item }) {
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState(items);
  const [loading, setLoadng] = useState(false);
  const url = "https://tonyoseko99.github.io/json-api/db.json";

  // fetch data from the API to populate on the homepage
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setItems(response.products));
  }, []);

  return (
    <div className="card-container">
      {items.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt="image"></img>
          <p>{item.title}</p>
          <h2>{item.price}</h2>
          <button>Buy</button>
        </div>
      ))}
    </div>
  );
}
export default Items;
