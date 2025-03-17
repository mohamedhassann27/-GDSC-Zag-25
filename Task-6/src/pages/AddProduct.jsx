import { useState } from "react";
import { useNavigate } from "react-router";

function AddProduct() {

    let [title,setTitle]=useState()
    let [price,setPrice]=useState()
    let [desc,setDesc]=useState()

    let navigate=useNavigate()
    let submitProduct= async (e)=>{
        e.preventDefault();
        let response=await fetch("http://localhost:3000/products",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                title:title,
                price:price,
                description:desc
            })
        })
        let data=await response.json();
        navigate("/products")
    }


  return (
    <>
    <h1 className="text-center">Add Product</h1>

      <form className="max-w-xl mx-auto my-5" onSubmit={(e)=>submitProduct(e)}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Product Title"
            required
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Product Price"
            required
            onChange={(e)=>setPrice(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Product Description"
            required
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add Product
        </button>
      </form>
    </>
  );
}
export default AddProduct;
