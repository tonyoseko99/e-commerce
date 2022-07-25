import React from "react";

function Navbar(){
    return(
        <nav className="navbar">
            <h1>Jenga Shop</h1>
            <ul className="navbar-list">
                <li>
                    <form >
                        <input type="text" id="search-input" placeholder="search item.."></input>
                        <button type="submit" id="btn-search">Search</button>
                    </form>
                </li>
                <li>Account</li>
                <li>Cart</li>
                <li>Categories</li>
            </ul>
        </nav>
    )

}
export default Navbar;