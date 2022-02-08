import { useState } from 'react'
import TabList from '../../utils/ui/TabList'
import ProductDescription from './ProductDescription'
import ProductReview from './ProductReview'
import ProductWarranty from './ProductWarranty'

function ProductDetails() {
  const [tabs, setTabs] = useState('tab')
  return (
    <div className=" lg:col-span-3 border border-gray-200 rounded divide-y mt-10">
      {/* <!---button----> */}
      <div className=" bg-gray-100">
        <ul className="sm:flex items-center text-center">
          <TabList title="Description" handelTab={setTabs} />
          <TabList title="Warranty Information" handelTab={setTabs} />
          <TabList title="Show Reviews" handelTab={setTabs} />
        </ul>
      </div>
      <div className=" sm:p-5 p-2">
        {tabs === 'Warranty Information' ? (
          <ProductWarranty></ProductWarranty>
        ) : tabs === 'Show Reviews' ? (
          <ProductReview></ProductReview>
        ) : (
          <ProductDescription></ProductDescription>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
