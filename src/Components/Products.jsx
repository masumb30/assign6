import React from 'react'
import {products } from './data.js'
import ProductCard from './ProductCard.jsx'

export const Products = ({addedProducts, setAddedProducts}) => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
            products.map((product)=> <ProductCard product={product} key={product.id}  addedProducts={addedProducts} setAddedProducts={setAddedProducts} />)
        }
    </div>
  )
}
