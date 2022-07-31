import React from "react";

function Items({item}) {
  return (
    <>
      <div className="card" key={item.id}>
        <img src={item.image} alt="title"></img>
        <h2>{item.title}</h2>
        <h3>{item.price}</h3>
        <button>click to buy</button>
      </div>
    </>
  );
}
export default Items;