import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
export default function OrderProductCard({ CartData }) {
  console.log(CartData)
  return (
    <div className="mx-3">
      {CartData.map((item) => (
        <div className="p-2 h-20 w-full grid grid-cols-4 gap-6  border-b border-gray-300 hover:bg-gray-200 rounded-md transition duration-200">
          <div className="col-span-1">
            <Link href={`product/${item.productId}`}>
              <Image
                className="hover:bg-opacity-50 transition-all cursor-pointer duration-200"
                alt=""
                src={item.image}
                layout="fixed"
                width={65}
                height={65}
              />
            </Link>
          </div>
          <div className="col-span-2 overflow-hidden overflow-ellipsis whitespace-nowrap pl-2">
            {/* Titile */}
            <Link href={`product/${item.productId}`}>
              <a className=" text-gray-800 font-medium hover:text-yellow-500">
                {item?.name}
              </a>
            </Link>

            {/* -Price- */}
            <div className="flex items-center ">
              <span className=" text-yellow-500  font-bold mr-4">
                {`$${item.price - (item.price * item.discount) / 100}`}
              </span>

              {item.discount > 0 && (
                <span className=" text-gray-500 ">
                  <del>{`$${item.price}`}</del>
                </span>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className=" capitalize font-bold text-gray-800 text-lg">
              qut {item.quantity}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
