// import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import ProductsList from './components/ProductsList'
import Categories from './components/Categories'
import AddProduct from './pages/AddProduct'
import ProductDetails from './pages/ProductDetails'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App ">
        <Navbar></Navbar>

        <div className="row flex">
          <div className="bg-gray-800 h-dvh w-2/12">
            <Sidebar></Sidebar>
          </div>

          <div className="  w-10/12 p-5">

            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='products' element={<ProductsList></ProductsList>}></Route>
              <Route path='products/add' element={<AddProduct></AddProduct>}></Route>
              <Route path='products/:productId' element={<ProductDetails></ProductDetails>}></Route>
              <Route path='categories' element={<Categories></Categories>}></Route>
            </Routes>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default App
