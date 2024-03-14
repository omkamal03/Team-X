import React from 'react'

function BreadCum(props) {
    const {product}=props
  return (
    <div className='mt-28 py-5 flex gap-2 items-center'>
      <p className='font-serif font-semibold text-slate-500 dark:text-white'>Home-</p><p className='text-slate-500 dark:text-white'></p><p className='font-serif font-semibold text-slate-500 dark:text-white'>Shop- </p><p></p><p className='font-serif font-semibold text-slate-500 dark:text-white'>{product.category}- </p> <p className='font-serif font-semibold text-slate-500 dark:text-white'>{product.name}</p>
    </div>
  )
}

export default BreadCum