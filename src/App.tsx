
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Orders from './components/pages/Orders'
import Cart from './components/pages/Cart'
import ProductDetails from './components/pages/ProductDetails'
import Checkout from './components/pages/Checkout'

function App() {


  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Products/>}/>
        <Route path="/products" element={<Products/>}/>
         <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/orders" element={<Orders/>}/>
          <Route path="/cart" element={<Cart/>}/>
             <Route path="/checkout" element={<Checkout/>}/>
     </Routes>
    </>
  )
}

export default App
