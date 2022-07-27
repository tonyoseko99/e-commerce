import React from "react";
import Items from "./Items";

function Search({items}){

    return (
        <form >
            <input type="text" id="search-input" placeholder="search item.." />
            <button type="submit" id="btn-search">Search</button>
        </form>
    )

}
export default Search;