import { createContext, useState } from "react";

export const ProductsContext= createContext();
function ProductsProvider(Props){
    let [products,setProducts]=useState([
        {id:1, title:"product1"},
        {id:2, title:"product2"}
    ])
    return(
        <ProductsContext.Provider value={products}>
            {Props.children}
        </ProductsContext.Provider>
    )
}
export default ProductsProvider;