import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "./Search";
import AccountContainer from "./AccountContainer";
import Cart from "./Cart";
import Categories from "./Categories";

function Navbar({items}){
    return(
        <nav className="navbar">
            <h1>Jenga Shop</h1>
            <ul className="navbar-list">
                    <Search items={items}/>
                    <AccountContainer />
                    <Cart />
                    <Categories />

            </ul>
        </nav>
    )

}
export default Navbar;