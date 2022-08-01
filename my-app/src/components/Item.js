import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Item(){
    
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(response => setItem(response))
    }, [])
    return(
        <>
            <div className="item-info">
                
            </div>
        </>
    )
}
export default Item;