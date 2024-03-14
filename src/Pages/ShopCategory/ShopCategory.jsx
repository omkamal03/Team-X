import React, { useContext } from 'react'
import { ShopContext} from '../../Context/ShopContext'
import Items from '../../components/Items/Items'

function ShopCategory(props) {
  const {all_product}=useContext(ShopContext)
  return (
    <div className=' mt-24 mx-10 md:mx-24'>
       <img src={props.banner} alt="" />
       <div className='mt-10 flex justify-between items-center'>
         <p className='dark:text-cyan-500'>
           <span className='font-semibold dark:text-cyan-500'>Showing 1-12</span> out of 36
         </p>
         <div className='flex gap-2 items-center border border-slate-500 dark:border-white cursor-pointer rounded-full py-3 px-3  font-medium hover:bg-slate-200 dark:text-cyan-500'>
           Sort by <img className='w-3 h-3 dark:bg-cyan-500' src="src/assets/dropdown_icon.png" alt="" />
         </div>
         </div>
         <div className='my-5  px-8 md:pl-0 flex flex-wrap'>
            {all_product.map((item,i)=>{
              if(props.category===item.category){
               return <Items   key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price}    />
              }
              else{
                return null;
              }
            })
                  }
         
       </div>
    </div>
  )
}

export default ShopCategory