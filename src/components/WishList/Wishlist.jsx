import React, { useContext,useEffect } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';


function WishList() {
    const {all_product,wishItems,subWishCart,setWishItems}=useContext(ShopContext)
  
    
  return (
    <div className='mt-44 mb-14   mx-10 md:mx-24 md:mb-44 md:mr-44'>
    <div className='flex overflow-x-scroll  md:overflow-x-hidden md:flex-wrap flex-row items-center gap-16'>
       <div className='flex md:flex-row flex-col mt-16 mb-5 md:items-center gap-8 md:gap-5'>
        <p className='font-sans text-slate-500 dark:text-cyan-500 font-bold  md:w-28'>Products</p>
        <p className='font-sans text-slate-500 dark:text-cyan-500 font-bold  md:w-80'>Title</p>
        <p className='font-sans text-slate-500 dark:text-cyan-500 font-bold  md:w-44'>Price</p>
        <p className='font-sans text-slate-500 dark:text-cyan-500 font-bold  md:w-44'>Qunatity</p>
        <p className='font-sans text-slate-500 dark:text-cyan-500 font-bold  md:w-44'>Total</p>
        <p className='font-sans text-slate-500 dark:text-cyan-500 font-bold  md:w-44'>Remove</p>
       </div>
       <hr className='md:h-1 h-0 md:bg-slate-200 ' />
       {
        all_product.map((e)=>{
            if(wishItems[e.id]>0){
                return (
                    <div key={e.id}>
                       <div className='flex md:flex-row flex-col  md:items-center md:px-8   gap-5'>
                       <Link to={`/product/${e.id}`}>
                        <div className='flex md:flex-row md:items-center flex-col gap-5'>
                            <div className='w-28'>
                            <img className=' w-14' src={e.image} alt="" />
                            </div>
                            
                            <p className='font-sans text-slate-500 dark:text-white font-semibold   md:w-72'>{e.name}</p>
                            <p className='font-sans text-slate-500 dark:text-white font-bold pl-5 w-44'>${e.new_price}</p>
                            <div className='w-44 pl-5'>
                            <button className='font-sans text-slate-500 dark:text-white font-bold border border-slate-500 px-5 py-3  hover:bg-slate-200 hover:dark:text-cyan-500'>{wishItems[e.id]}</button>
                            </div>
                           </div>   </Link> 
                            <p className='font-sans dark:text-white text-slate-500 font-bold pl-4 w-44'>${e.new_price*wishItems[e.id]}</p>
                            <RxCross2 className='dark:text-white text-5xl pl-5 cursor-pointer'  onClick={()=>subWishCart(e.id)} />
                        </div>
                        
                        <hr className=' md:h-1 h-0 md:bg-slate-200'/>
                    </div>

                )
            }
            return null;
        })
       }
       </div>


    </div>
  )
}

export default WishList
