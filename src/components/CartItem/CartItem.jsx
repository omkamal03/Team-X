import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';


function CartItem() {
    const {getTotalCartAmount,all_product,subCart,cartItems}=useContext(ShopContext)
  return (
    <div className='mt-44   mx-10 md:mx-24  md:mr-44'>
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
            if(cartItems[e.id]>0){
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
                            <button className='font-sans text-slate-500 dark:text-white font-bold border border-slate-500 px-5 py-3  hover:bg-slate-200 hover:dark:text-cyan-500'>{cartItems[e.id]}</button>
                            </div>
                           </div>   </Link> 
                            <p className='font-sans dark:text-cyan-500 text-slate-500 font-bold pl-4 w-44'>${e.new_price*cartItems[e.id]}</p>
                            <RxCross2 className='dark:text-cyan-500 text-5xl pl-5 cursor-pointer'  onClick={()=>subCart(e.id)} />
                        </div>
                        
                        <hr className=' md:h-1 h-0 md:bg-slate-200'/>
                    </div>

                )
            }
            return null;
        })
       }
       </div>
       <div className='mt-28 flex md:flex-row gap-44 md:justify-between  flex-col-reverse'>
            <div className= 'w-full md:w-1/2'>
                <h3 className='text-3xl font-semibold mb-10 dark:text-red-500'>Cart Totals</h3>
                <div className='flex justify-between py-3'>
                    <p className='font-medium dark:text-cyan-500'> SubTotal</p>
                    <p className='font-semibold dark:text-white '>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='flex justify-between py-3'>
                    <p className='font-medium dark:text-cyan-500'> Shipping Fee</p>
                    <p className='font-medium dark:text-white '>Free</p>
                </div>
                <hr />
                <div className='flex justify-between py-3'>
                    <p className='font-medium text-xl dark:text-cyan-500'>Total</p>
                    <p className='font-medium text-xl dark:text-white'>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <button className=' mt-16 bg-red-500 w-1/2 h-14 rounded-lg text-white font-semibold hover:font-bold mb-10' >Proceed To CheckOut</button>
            </div>
            <div className='w-full  md:w-1/2 relative'>
                <p className='text-slate-500 font-medium dark:text-cyan-500 '>If you have a promo code ,Enter it here</p>
                <input className='absolute inset-0 top-5  border border-slate-300 w-72 h-10 z-10 px-5  my-6' type="text" placeholder='Promo Code'/>
                <button className='absolute top-5 right-28 z-20 bg-black dark:bg-cyan-500 text-white w-36 h-10 my-6'>Submit</button>
            </div>
       </div>

    </div>
  )
}

export default CartItem