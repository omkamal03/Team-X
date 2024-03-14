import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

function ProductDisplay(props) {
    const {product}=props
    const {addCart,addWishCart}=useContext(ShopContext)
  return (
 <div>
    <div className='py-10 flex md:flex-row flex-col gap-12'>
      <div className='flex w-full gap-4 md:w-3/4 '>
        <div className='flex w-1/4 flex-col gap-2'>
            <img className='w-28 ' src={product.image} alt="" />
            <img className='w-28 ' src={product.image} alt="" />
            <img className='w-28 ' src={product.image} alt="" />
            <img className='w-28 ' src={product.image} alt="" />
        </div>
        <div className='w-full md:w-3/4 '>
            <img className='h-full w-full ' src={product.image} alt="" />
        </div>
      </div>
      <div>
        <h1 className='text-3xl font-serif font-semibold text-slate-500 dark:text-cyan-500'>{product.name}</h1>
        <div className='flex py-5 gap-2'>
            <img src="\src\assets\star_icon.png" alt="" />
            <img src="\src\assets\star_icon.png" alt="" />
            <img src="\src\assets\star_icon.png" alt="" />
            <img src="\src\assets\star_icon.png" alt="" />
            <img src="\src\assets\star_dull_icon.png" alt="" />
            <p>(122)</p>
        </div>
        <div className='flex text-center gap-5 py-5'>
            <div className='text-slate-500 dark:text-white'> <s>${product.old_price}</s> </div>
            <div className='text-red-500 font-bold text-xl'>${product.new_price}</div>
        </div>
        <div className='pb-5 font-sans text-slate-500 font-medium dark:text-white'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate earum sed quidem ullam quae blanditiis distinctio libero praesentium natus eveniet?
        </div>
        <div className='flex flex-col py-5'>
            <h1 className='font-sans text-slate-500 font-bold text-xl dark:text-cyan-500'>Select Size</h1>
            <div className='flex flex-wrap text-center gap-10 pt-10 pb-4'>
                <div className='border border-slate-500 font-medium hover:bg-slate-200 bg-slate-100 cursor-pointer py-3 px-5 hover:font-bold'>S</div>
                <div className='border border-slate-500 font-medium hover:bg-slate-200 bg-slate-100 cursor-pointer py-3 px-5 hover:font-bold'>M</div>
                <div className='border border-slate-500 font-medium hover:bg-slate-200 bg-slate-100 cursor-pointer py-3 px-6 hover:font-bold'>L</div>
                <div className='border border-slate-500 font-medium hover:bg-slate-200 bg-slate-100 cursor-pointer py-3 px-5 hover:font-bold'>XL</div>
                <div className='border border-slate-500 font-medium hover:bg-slate-200 bg-slate-100 cursor-pointer py-3 px-4 hover:font-bold'>XXL</div>
            </div>
        </div >
      <Link to="/cart" ><button onClick={()=>addCart(product.id)} className='bg-red-500 text-white  w-56 py-4 rounded-md hover:font-bold md:mx-4'>ADD TO CART</button></Link>  
      <Link to="/wishlist" > <button onClick={()=>addWishCart(product.id)} className='bg-red-500 text-white my-4  w-56 py-4 rounded-md hover:font-bold'>ADD WHISHLIST</button></Link> 
        <p className='mt-16 text-slate-700 font-medium dark:text-white'><span className='font-bold text-black dark:text-cyan-500'>Category:  </span> {product.category},T-Shirt,Crop Top</p>
        <p className='text-slate-700 font-medium dark:text-white'><span className='font-bold text-black dark:text-cyan-500'>Tags: </span>   Modern ,Latest</p>
         
      </div>
      
    </div>
       <div className='my-10'>
        <h3 className='dark:text-cyan-500 text-red-500 font-bold'>Review:</h3>
         <p className=''>
            
         {product.review.map((e, i) => {
        return (
            <div key={i}>
                <p className=' border border-slate-200 px-10 py-3  dark:text-white text-black md:my-3'>
                    {e.r}
                </p>
            </div>
           
            );
           
       }
         )
       
       }
   
</p>
          
       </div>
    </div>
  )
}

export default ProductDisplay

