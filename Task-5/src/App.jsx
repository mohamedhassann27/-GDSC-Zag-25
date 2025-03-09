import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/slider'
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
import { BrowserRouter,Routes,Route } from 'react-router'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar></Navbar>
            <Slider></Slider>
            <ProductsList></ProductsList>
          </>
        }></Route>
        <Route path='about' element={<Slider> </Slider>}></Route>
        <Route path='products' element={<ProductsList> </ProductsList>}></Route>
        <Route path='product/:productId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='products/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
    </>
  )
}

export default App
