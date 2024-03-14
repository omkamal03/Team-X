import React from 'react'
import { IoLogoBitbucket } from "react-icons/io";

function Footer() {
  return (
    <div className='w-full  pt-10 p-10 px-26 md:px-96 flex-col items-center bg-cyan-100 dark:bg-black'>
        <div className='w-full '>
        <div className='  flex items-center pb-4  px-24 md:px-64'>
           <IoLogoBitbucket className=' text-black text-3xl dark:text-cyan-500 cursor-pointer' />
           <h3 className='font-bold text-3xl px-5 md:px-5 dark:text-cyan-500 '>LOGO</h3>
        </div>
        <ul className='md:px-44 px-36 flex flex-col md:flex-row my-4 gap-3  font-serif text-slate-500'>
            <li className='w-20   cursor-pointer hover:font-semibold dark:text-white'>Company</li>
            <li  className='w-20  cursor-pointer hover:font-semibold dark:text-white'>Products</li>
            <li className='w-20  cursor-pointer hover:font-semibold dark:text-white'>Offices</li>
            <li className='w-20  cursor-pointer hover:font-semibold dark:text-white'>About</li>
            <li className='w-20  cursor-pointer hover:font-semibold dark:text-white'>Contact</li>
        </ul>
        <div className='flex px-60 my-5 gap-5'>
            <img className='w-8 cursor-pointer transition-all duration-100 ease-in-out hover:scale-105' src="/assets/instagram_icon.png" alt="" />
            <img className='w-8 cursor-pointer transition-all duration-100 ease-in-out hover:scale-105'  src="/assets/pintester_icon.png" alt="" />
            <img className='w-8 cursor-pointer transition-all duration-100 ease-in-out hover:scale-105'  src="/assets/whatsapp_icon.png" alt="" />
        </div>
        <hr  className='w-full h-1 bg-slate-500'/>
        <p  className='font-semibold text-slate-500 text-sm px-16 md:px-56  py-10 dark:text-white'>Copyright @ 2024-All Right Deserved</p>
        </div>
    </div>
  )
}

export default Footer
