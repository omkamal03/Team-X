import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <form className='my-44 md:mx-96 mx-16 px-5  md:px-20 bg-cyan-100 dark:bg-slate-800 pt-10 pb-24 '> 
    <h2 className='font-sans text-2xl font-bold my-6 dark:text-cyan-500 text-black'>SignUp</h2>
    <div className='flex flex-col gap-4'>
        <input className=' h-14 border border-slate-500 rounded-lg px-5 py-5' type="text" placeholder='Name' />
        <input className=' h-14 border border-slate-500 rounded-lg px-5 py-5' type=" email" placeholder='E-Mail Address'/>
        <input className=' h-14 border border-slate-500 rounded-lg px-5 py-5' type="password" placeholder='Create Password' />
        <input className=' h-14 border border-slate-500 rounded-lg px-5 py-5' type="password" placeholder='Confirm Password' />
    </div>
    <button className='mt-8 bg-red-500 dark:bg-cyan-500 w-full h-14 rounded-lg text-white font-semibold hover:font-bold '>
        Continue
    </button>
    <div>
        <p className='text-slate-500 mt-5 dark:text-white'>Already have an account?<Link onClick={scrollToTop} to="/login"><span className='text-red-500 dark:text-cyan-500 font-semibold hover:font-bold cursor-pointer'> Login here</span></Link> </p>
        <div className=' flex items-center gap-2'>
        <input className='mt-2' type="checkbox" id='check' />
        <label className='  text-slate-500 dark:text-white  py-4' htmlFor="check">  By Continuing,I agree to the terms of use & privacy.</label>
        </div>
    </div>
</form>
  )
}

export default Signup
