import React, { useState } from "react";
import Items from "./Items";

function Search({items}){
    const [filteredItems, setFilteredItems] = useState(items)

    return (
        <form >
            <input onChange={(e)=>{
                let searchData = items.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()));
                console.log("searchData", searchData)
                setFilteredItems(searchData)
            }} id="search-input" placeholder="search item.." />
            <button type="submit" id="btn-search">Search</button>
        </form>
    )

}
export default Search;