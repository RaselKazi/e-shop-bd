import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'
import RatingStar from '../../utils/ui/RatingStar'
import HoverCardItem from '../../utils/ui/HoverCardItem'
import CountdownTimer from '../../utils/ui/CountdownTimer'
import { IProduct } from '../../type/product.model.type'

type ProductCardProps = { productData: IProduct }
function ProductCard({ productData }: ProductCardProps) {
  return (
    <div className="bg-gray-200 bg-opacity-30 py-8 border rounded border-t-0">
      <div className="pb-4 group">
        <div className=" relative">
          <Link href={`product/${productData._id}`} passHref>
            <Image
              className=" mx-auto h-full w-full cursor-pointer"
              alt=""
              src={productData?.images[0].url}
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

          {productData.discount > 0 && (
            <div className=" absolute top-0 right-0 text-base font-bold text-white bg-red-600 h-7 w-14 flex items-center justify-center rounded">
              <span>{`- ${productData.discount} %`}</span>
            </div>
          )}

          {/*coundown-timmer*/}
          <div className=" transition duration-300  opacity-1 block group-hover:hidden group-hover:opacity-0 ">
            {' '}
            <CountdownTimer
              discountDate={productData.discountTargetDate}
              variant="black"
            ></CountdownTimer>
          </div>
        </div>
        {/* <!------> */}
        <div className="text-center mt-4">
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
              {`$${
                productData.price -
                (productData.price * productData.discount) / 100
              }`}
            </span>
            {productData.discount > 0 && (
              <span className=" text-gray-500 text-xl">
                <del>{`$${productData.price}`}</del>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(ProductCard), { ssr: false })
