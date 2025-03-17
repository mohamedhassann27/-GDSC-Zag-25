import { useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from 'sweetalert2'

function ProductsList() {
  let [products, setProducts] = useState([]);

  let getAllProduct = async () => {
    let res = await fetch("http://localhost:3000/products");
    let data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  let deleteProduct=async (product)=>{
    Swal.fire({
      title:`Are you sure to delete ${product.title}?`,
      showCancelButton:true
    })
    .then((data)=>{
      if(data.isConfirmed){
        fetch(`http://localhost:3000/products/${product.id}`,{
          method:"DELETE"
        })
        .then(()=>getAllProduct())
    }
    } )

  }

  return (
    <>
      <h1 className="mb-5">Product Page</h1>
      <Link to="add" className="bg-green-500 btn text-white ">Add New Product</Link>

      <div className="relative h-screen mt-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id} className="bg-white border-b border-gray-200 w-full">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {product.id}
                  </th>
                  <td className="px-6 py-4 max-w-50">{product.title}</td>
                  <td className="px-6 py-4 max-w-130">{product.description}</td>
                  <td className="px-6 py-4">{product.price}$</td>
                  <td className="px-6 py-4">
                    <button className="btn bg-red-600 text-white" onClick={()=>deleteProduct(product)}>Delete</button>
                    <Link to={`${product.id}`} className="btn bg-blue-400 text-white m-1">
                      view
                    </Link>
                    <button className="bg-blue-800 text-white">Edit</button>
                  </td>
                </tr>
              );
            })}
            {/* <tr className="bg-white border-b border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ProductsList;
