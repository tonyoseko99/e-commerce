import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

function Items({item}) {
  return (
    <>
      <div className="card" key={item.id}>
        <img src={item.image} alt="title"></img>
        <h2>{item.title}</h2>
        <h3>{item.price}</h3>
        <Link to={`/items/${item.id}`}>Click to buy </Link>
      </div>
    </>
  );
}
export default Items;