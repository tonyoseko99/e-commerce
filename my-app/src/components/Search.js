import React, { useEffect, useState } from "react";
import Items from "./Items";

function Search({items}){
    const [filterItems, setFilteredItems] = useState(items)
    useEffect(()=>{
        setFilteredItems(items);
    }, [items])

    function handleSubmit(e){
        e.preventDefault();
        
    }

    return (
        <form >
            <input onChange={(e)=>{
                let f = items.filter((item)=>
                    item.title.toLowerCase().includes(e.target.value.toLowerCase())
                );
                setFilteredItems(f);
            }} type="text" id="search-input" placeholder="search item.." />
            <button type="submit" id="btn-search">Search</button>
        </form>
    )

}
export default Search;