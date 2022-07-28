import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "./Search";

function Navbar({items}){
    return(
        <nav className="navbar">
            <h1>Jenga Shop</h1>
            <ul className="navbar-list">
                <Search items={items}/>

            </ul>
        </nav>
    )

}
export default Navbar;