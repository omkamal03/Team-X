import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BreadCum from '../../components/BreadCum/BreadCum'
import { ShopContext } from '../../Context/ShopContext'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'


function Product() {
  const {all_product}=useContext(ShopContext)
  const params=useParams()
  const {productId}=useParams();
 
  console.log(productId)
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div className=' mx-16'>
      <BreadCum product={product}/>
       <ProductDisplay product={product}/>
    </div>
  )
}

export default Product