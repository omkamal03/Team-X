import React from 'react'
import { Link } from 'react-router-dom';
function Items(props) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
      return (

        <div  className='mb-6   dark:bg-cyan-900 bg-blue-100 transition ease-in-out duration-100 -z-1 hover:scale-110 cursor-pointer px-5 hover:overflow-hidden w-96 md:w-72 md:px-5'>
          
          <Link to={`/product/${props.id}`}><img onClick={scrollToTop} className='pt-5 w-96 md:w-60 ' src={props.image} alt="" /></Link>  
            <p className='  text-sm font-serif py-3 font-medium dark:text-white'>{props.name}</p>
    
            <div className='flex items-center gap-5 py-3'>
                 <div className='font-semibold text-lg dark:text-white'>${props.new_price}</div>
                 <div dark:text-white > <s className='dark:text-white'> ${props.old_price}</s> </div>
            </div>
          
        </div>
      )
}

export default Items
