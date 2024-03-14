import {useState,useEffect, useContext,createContext } from "react";
import all_product from "../assets/all_product";

export const ShopContext=createContext(null)
const getDefaultCart=()=>{
    let cart={};
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0;
    }
    return cart;
}
const getDefaultWish=()=>{
    let cart={};
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider=(props)=>{
   
    const [count,setCount]=useState(0)
    const [cartItems,setCartItems]=useState(getDefaultCart());
    const [wishItems,setWishItems]=useState(getDefaultWish());
    const addWishCart=(itemId)=>{
        setWishItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        
        
    }
    const subWishCart=(itemId)=>{
        setWishItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
       
    }
    
    const addCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        
        setCount(count+1)
    }
    const subCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        setCount(count-1)
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for (const item in cartItems) {
            if (cartItems[item]>0) {
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price*cartItems[item]
                
            }
            
        }
        return totalAmount;
        

    }




    const [themeMode,setThemeMode]=useState("light")
    const lightMode=()=>{
      setThemeMode("light")
    }
    const darkMode=()=>{
      setThemeMode("dark")
      
    }
    useEffect(() => {
      document.querySelector('html').classList.remove("light", "dark")
      document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

    useEffect(()=>{
        console.log("inside useeffect")
        if(window.matchMedia('(prefers-color-scheme:dark)').matches){
            setThemeMode('dark')
            console.log("Setting theme to dark")
        }
        else{
            setThemeMode('light')
            console.log("Setting theme to light")
        }
    },[setThemeMode])

     const contextValue={themeMode,all_product,darkMode,lightMode,addCart,subCart,getTotalCartAmount,cartItems,wishItems,subWishCart,addWishCart}
     return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
     )
}
export default ShopContextProvider