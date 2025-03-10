import { useEffect , useState } from "react"
import Product from "./Product";
import { useActionData } from "react-router";

function ProductsList(){
    let [productsData,setProductsData]=useState([])
    let [categories,setCataegories]=useState([])

    let api_url="https://fakestoreapi.com/products"

    let fetchData=async (url,set)=>{
        let response=await fetch(url)
        let data=await response.json()
        set(data)
        console.log(data);
    }

    useEffect(()=>{
        fetchData(api_url,setProductsData)
        fetchData(`${api_url}/categories`,setCataegories)

        // const fetchData=async ()=>{
        //     let response=await fetch()
        //     let data= await response.json()
        //     setProductsData(data)
        // };
        // fetchData()
    },[])

    let products=productsData.map((el)=>{
        return(
            <Product key={el.id} product={el}></Product>
        )
        
    })
    
    return(
        <>
            <h1 className="text-5xl py-10 bg-gradient-to-r from-red-600  to-blue-400 bg-clip-text text-transparent w-contect inline-block">Products</h1>

            <div className="categories mb-10 flex justify-center items-center gap-5">
                <button className="bg-red-400" onClick={()=>{
                    fetchData(api_url,setProductsData)
                }}>All</button>
                {categories.map((cat)=>{
                    return <button className="bg-red-400" key={cat} onClick={()=>{
                        fetchData(`${api_url}/category/${cat}`,setProductsData)
                    }} > {cat} </button>
                })}

            </div>
            
            <div className="productsList grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] max-w-7xl m-auto gap-x-5 gap-y-20  px-2">
                {products}
            </div>
        </>
    )
}
export default ProductsList
