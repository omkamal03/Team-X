import React from 'react'
import Items from '../Items/Items'
import data_product from '../../assets/data'

function Popular() {
  return (
    <div className=' pr-36 pt-24 md:px-0 dark:bg-primary'>
      
      <h1 className='text-2xl mx-8  pl-24 md:mx-96 md:px-32 md:text-4xl font-semibold font-serif pb-4 dark:text-cyan-500'>POPULAR IN WOMEN</h1>
      <hr className='mx-44 pr-20 w-36  md:mx-96   md:w-96 md:px-96 h-1 bg-slate-600'/>
      <div className='flex  flex-col px-14  md:flex-row  md:px-26 gap-3 mt-8 flex-wrap'>
          {
              data_product.map((item,i)=>{
               return   <Items key={i} id={item.id} name={item.name}   image={item.image} new_price={item.new_price} old_price={item.old_price} />
})
          }
      </div>
    
  </div>
   
  )
}

export default Popular
