import { useState } from 'react'
import ProductDescription from './ProductDescription'
import ProductReview from './ProductReview'
import ProductWarranty from './ProductWarranty'

function ProductDetails() {
  const [tabe, setTabe] = useState('tabe')
  return (
    <div className=" lg:col-span-3 border border-gray-200 rounded divide-y mt-10">
      {/* <!---button----> */}
      <div className=" bg-gray-100">
        <ul className="sm:flex items-center text-center">
          <li
            className="duration-300 sm:border-r border-b hover:bg-yellow-500 hover:text-white"
            onClick={() => setTabe('tabe')}
          >
            <span className=" font-bold uppercase text-sm p-4 px-6 block">
              Description
            </span>
          </li>

          <li
            className="duration-300 sm:border-r border-b hover:bg-yellow-500 hover:text-white"
            onClick={() => setTabe('tabe1')}
          >
            <span className=" font-bold uppercase text-sm p-4 px-6 block">
              Warranty Information
            </span>
          </li>

          <li
            className="duration-300 sm:border-r border-b hover:bg-yellow-500 hover:text-white"
            onClick={() => setTabe('tabe2')}
          >
            <span className=" font-bold uppercase text-sm p-4 px-6 block">
              Show Reviews
            </span>
          </li>
        </ul>
      </div>
      <div className=" sm:p-5 p-2">
        {tabe === 'tabe1' ? (
          <ProductWarranty></ProductWarranty>
        ) : tabe === 'tabe2' ? (
          <ProductReview></ProductReview>
        ) : (
          <ProductDescription></ProductDescription>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
