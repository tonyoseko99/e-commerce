import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function Item(){
    
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(response => setProduct(response))
    }, [id])
    return(
        <>
            <div className="item-info">
                <img src={product.image} alt="image"></img>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h2>Add to cart</h2>
                
            </div>
        </>
    )
}
export default Item;