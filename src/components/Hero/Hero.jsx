import React from 'react'

function Hero() {
  return (
    
    <div className='w-screen pt-28 px-20 md:flex  bg-cyan-100 dark:bg-primary md:items-center  md:justify-evenly '>
       <div  className=''>
          <p className='font-semibold text-xl dark:text-cyan-500'>New Arrivals Only</p>
          <h1 className='text-7xl font-bold flex items-center dark:text-cyan-500'>New 
          <img className='w-36' src="src/assets/hand_icon.png" alt="" /></h1>
          <h1 className='text-7xl font-bold dark:text-cyan-500'>Collections
          <br/> For Every One</h1>
          <button className=' mt-10 bg-red-500 dark:bg-cyan-500 text-white px-8 py-4  rounded-full font-semibold hover:font-bold  w-54 flex items-center gap-3 '>Latest Collection <img className='w-5' src="assets/arrow.png" alt="" /></button>
       </div>
       <div>
           <img className=' w-96 ' src="src/assets/hero_image.png" alt="" />
           
       </div>
    </div>
   
  )
}

export default Hero
