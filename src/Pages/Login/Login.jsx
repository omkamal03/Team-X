import React from 'react'

function Login() {
  return (
    <div>
          <div>
          <form className='my-44 md:mx-96 mx-20 px-5 md:px-20 bg-cyan-100 dark:bg-slate-800 pt-10 pb-24 '> 
        <h2 className='font-sans text-2xl md:px-44 px-2 underline font-bold my-6 dark:text-cyan-500'>DROP</h2>
        <div className='flex flex-col gap-4'>
            <input className=' h-14 border border-slate-500 rounded-lg px-5 py-5' type="text" placeholder='Name' />
            <input className=' h-14 border border-slate-500 rounded-lg px-5 py-5' type=" email" placeholder='E-Mail Address'/>
            <input className=' h-14 border border-slate-500 rounded-lg px-5 py-5' type="password" placeholder='Password' />
        </div>
        <button className='mt-8 bg-red-500 dark:bg-cyan-500 w-full h-14 rounded-lg text-white font-semibold hover:font-bold '>
            LogIn
        </button>
        <div className='my-5'>
            <p className='text-slate-500 cursor-pointer hover:font-semibold dark:text-cyan-100'>Forgot Password?</p>
        </div>
    </form>
    </div>
      
    </div>
  )
}

export default Login
