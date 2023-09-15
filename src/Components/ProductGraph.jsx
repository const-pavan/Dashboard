import React from 'react'
import { DoughnutGraph } from '../Graph'
import './ProductGraph.css'

const ProductItem = ({ color, name }) => (
  <div className='flex gap-4 items-center'>
    <div className={`bg-${color} rounded-full p-2`}></div>
    <h2 className='font-mon font-semibold text-lg'>{name}</h2>
  </div>
)

function ProductGraph() {
  const products = [
    { color: 'green', name: 'Basic Tees' },
    { color: 'yellow', name: 'Custom Short Pants' },
    { color: 'red', name: 'Super Hoodies' },
  ]

  return (
    <div className='bg-light border-2 border-grey shadow-xl my-7 rounded-2xl'>
      <div className='flex justify-between items-center pt-10 px-10'>
        <h1 className='text-2xl font-bold font-mon'>Top Products</h1>
        <h2 className='text-lightgrey text-xl'>May - June 2021</h2>
      </div>
      <div className='grid grid-cols-2 gap-6 py-7'>
        <div>
          <DoughnutGraph />
        </div>
        <div className='grid place-content-between'>
          {products.map((product) => (
            <ProductItem color={product.color} name={product.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductGraph
