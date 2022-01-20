import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import RatingStar from '../../utils/ui/RatingStar'

function CartProductCard({ variant, CartData }) {
  return (
    <div className="my-3">
      <div
        className={`grid lg:grid-cols-4 grid-cols-4 ${
          variant !== 'min' ? 'gap-6' : ' '
        }`}
      >
        <div className="col-span-1">
          <Link href={`product/${CartData._id}`}>
            <Image
              className="hover:bg-opacity-50 transition-all cursor-pointer duration-200"
              alt=""
              src={CartData.images[0].url}
              layout="responsive"
              width={90}
              height={100}
            />
          </Link>
        </div>
        <div
          className={`lg:col-span-3 sm:col-span-3 col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap ${
            variant !== 'min' ? '' : 'pl-3 '
          }`}
        >
          {/* Titile */}
          <Link href={`product/${CartData._id}`}>
            <a className=" text-gray-800 font-medium hover:text-yellow-500">
              {CartData?.name}
            </a>
          </Link>
          {/* --Rating- */}

          {variant !== 'min' && (
            <div className=" flex items-center space-x-1 mt-2">
              <RatingStar value={CartData.ratings} />
            </div>
          )}

          {/* -Price- */}
          <div
            className={`flex items-center ${
              variant !== 'min' ? 'text-xl' : ' '
            }`}
          >
            <span className=" text-yellow-500  font-bold mr-4">
              {`$${CartData.price}`}
            </span>
            <span className=" text-gray-500">
              <del>{`$${CartData.price}`}</del>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProductCard
