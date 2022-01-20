import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'
import CountdownTimerOne from '../../utils/ui/CountdownTimerOne'
import RatingStar from '../../utils/ui/RatingStar'
import HoverCardItem from '../../utils/ui/HoverCardItem'
function ProductCard({ productData }) {
  return (
    <div className="bg-gray-200 bg-opacity-30 py-8 border rounded border-t-0">
      <div className="pb-4 group">
        <div className=" relative">
          <Link href={`product/${productData._id}`}>
            <Image
              className=" mx-auto h-full w-full cursor-pointer"
              alt=""
              src={productData.images[0].url}
              layout="responsive"
              width={280}
              height={260}
            />
          </Link>
          {/* <!--Hidden button----> */}
          <div className=" space-y-3 absolute top-1/4 ">
            <HoverCardItem productId={productData} />
          </div>
          {/* <!--bages---> */}
          <div className=" absolute top-2 right-4 text-xs text-white bg-red-500 h-12 w-12 flex items-center justify-center rounded-full">
            <span>-14%</span>
          </div>

          {/*coundown-timmer*/}
          <div className=" transition duration-300  opacity-1 block group-hover:hidden group-hover:opacity-0 ">
            {' '}
            <CountdownTimerOne></CountdownTimerOne>
          </div>
        </div>
        {/* <!------> */}
        <div className="text-center ">
          {/* <!--Titile--> */}
          <Link href={`product/${productData._id}`}>
            <a className=" text-gray-800 font-medium hover:text-yellow-500">
              {productData.name}
            </a>
          </Link>
          {/* --Rating- */}
          <div className=" flex items-center justify-center space-x-1 my-2">
            <RatingStar value={productData.ratings} />
          </div>
          {/* --Price-- */}
          <div className=" flex items-center justify-center mt-3">
            <span className=" text-yellow-500 text-xl font-bold mr-4">
              {`$${productData.price}`}
            </span>
            <span className=" text-gray-500">
              <del>£456.00</del>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(ProductCard), { ssr: false })
