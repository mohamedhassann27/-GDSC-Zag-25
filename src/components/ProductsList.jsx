import { useEffect , useState } from "react"
import Product from "./Product";

function ProductsList(){
    let [productsData,setProductsData]=useState([])
    useEffect(()=>{
        const fetchData=async ()=>{
            let response=await fetch("https://fakestoreapi.com/products")
            let data= await response.json()
            setProductsData(data)
            console.log(data);
            
        };
        fetchData()
    },[])

    let products=productsData.map((el)=>{
        return(
            <Product key={el.id} product={el}></Product>
        )
        
    })
    
    return(
        <>
            <h1 className="text-5xl py-10 bg-gradient-to-r from-red-600  to-blue-400 bg-clip-text text-transparent w-contect inline-block">Products</h1>
            <div className="productsList grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] max-w-7xl m-auto gap-x-5 gap-y-20  px-2">
                {products}
            </div>
        </>
    )
}
export default ProductsList