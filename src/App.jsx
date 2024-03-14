import Navbar from "./components/NavBar/Navbar"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ShopContextProvider from "./Context/ShopContext"
import { useContext, useEffect } from "react"
import Shop from "./Pages/Shop/Shop.jsx"
import ShopCategory from "./Pages/ShopCategory/ShopCategory.jsx"
import Product from "./Pages/Product/Product.jsx"
import Cart from "./Pages/Cart/Cart.jsx"
import Login from "./Pages/Login/Login.jsx"
import Signup from "./Pages/Signup/Signup.jsx"
import Footer from "./components/Footer/Footer.jsx"
import mens_banner from  "./assets/banner_mens.png"
import women_banner from  "./assets/banner_women.png"
import kids_banner from  "./assets/banner_kids.png"
import Wishlist from "./components/WishList/Wishlist.jsx"



function App() {


  return (
    <div className="overflow-x-hidden dark:bg-primary">
      <ShopContextProvider>
         <BrowserRouter>
             <Navbar/>
             <Routes>
                 <Route path="/"  element={<Shop/>}/>
                 <Route path="/men"  element={<ShopCategory banner={mens_banner}  category="men"/>}/>
                 <Route path="/women"  element={<ShopCategory banner={women_banner} category="women"/>}/>
                 <Route path="/kids"  element={<ShopCategory banner={kids_banner} category="kid"/>}/>
                 <Route path="/product" element={<Product/>}>
                    <Route path=":productId" element={<Product/>}/>
                 </Route>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/wishlist" element={<Wishlist/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signin"  element={<Signup/>}/>
             </Routes>
            <Footer/>
         </BrowserRouter>
    </ShopContextProvider>
    </div>
  )
}

export default App
