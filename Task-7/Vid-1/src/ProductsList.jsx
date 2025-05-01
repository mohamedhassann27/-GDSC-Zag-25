import { useContext } from "react"
import { ProductsContext } from "./ProductsContext"

function ProductsList(){
    const products= useContext(ProductsContext)
    return (
        <div className="productsList">
            {products.map((product)=>(
                <h1 key={product.id}>{product.title}</h1>
            ))}
        </div>
    )
}
export default ProductsList