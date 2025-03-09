import { useState } from "react";
import { Link } from "react-router";
function product(Props){
    let {product}=Props
    return(
        <div className="card px-2">
            <img className="w-full h-70 rounded-xl" src={product.image} alt="product img" />
            <h1 className="h-8 overflow-hidden mt-3 text-2xl">{product.title}</h1>
            <p className="my-4 h-30 overflow-hidden mb-8">{product.description}</p>
            <Link to={`product/${product.id}`} className="bg-white text-black btn">Details</Link>
        </div>
    )
}
export default product 