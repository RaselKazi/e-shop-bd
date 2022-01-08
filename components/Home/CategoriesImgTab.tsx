import Image from 'next/image'
import React from 'react'

import categoriesImg from '../../public/images/2__63759.original.webp'
import ProductCard from '../Product/ProductCard'

function CategoriesImgTab() {
  return (
    <div x-data="{ tab:'tab1'}">
      {/* -------Button------- */}
      <div className="border rounded">
        <div className=" grid grid-cols-7 divide-x divide-y">
          <button className=" hover:bg-gray-100 text-center py-4 relative group">
            <Image
              className=" mx-auto"
              alt=""
              src={categoriesImg}
              layout="fixed"
              width={100}
              height={80}
            />
            <h5 className=" text-gray-500 font-medium hidden sm:block">
              Electronics
            </h5>

            <div
              x-show="tab === 'tab1'"
              className="absolute -bottom-2 border-t-0 border-l-0 bg-white left-0 right-0 m-auto h-4 w-4 transform rotate-45 group-hover:bg-gray-100 border border-gray-200"
            ></div>
          </button>
        </div>
      </div>

      {/* -----content carousel----- */}
      <ProductCard></ProductCard>
    </div>
  )
}

export default CategoriesImgTab
