import productsData from "./products-data";
import Product from "./product";
import { useState } from "react";

function ProductsList(){
    // console.log({productsData});
    const [selectedCategory,setSelectedCategory]=useState("all")
    let filterdProductsData= selectedCategory==="all" ? productsData :  productsData.filter((el)=>el.category==selectedCategory)
    let products=filterdProductsData.map((product)=>{
        return(
            <Product product={product} key={product.id}></Product>
        )
    })
    
    return(
        <>
            {products}
        </>
    ) 
}
export default ProductsList;
