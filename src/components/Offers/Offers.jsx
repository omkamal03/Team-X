import React from 'react'

function Offers() {
  return (
    
    <div className=' bg-cyan-100 dark:bg-primary my-16  md:mx-28 flex flex-col md:flex-row px-24 py-16 justify-around items-center'>
      <div className='md:w-1/2'>
          <h1 className='font-semibold text-5xl font-serif dark:text-cyan-500'>Exclusive </h1>
          <br/>
          <h1 className='font-semibold text-5xl font-serif dark:text-cyan-500'>Offers For You</h1>
          <p className='my-3 font-serif dark:text-cyan-500'>ONLY ON BEST SELLERS PRODUCTS</p>
          <button className='my-10 bg-red-500 dark:bg-cyan-500 text-white px-6 py-5 w-44 rounded-xl font-semibold hover:font-bold'>Check New</button>
      </div>
      <div className='md:w-1/2 '>
         <img className='w-44  md:w-64 ' src="src/assets/exclusive_image.png" alt="" />
      </div>
    </div>
  
  )
}

export default Offers