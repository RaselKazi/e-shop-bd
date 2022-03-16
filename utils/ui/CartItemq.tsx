import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CartItem() {
  return (
    <div className="my-3 ">
      <div className="grid lg:grid-cols-4 grid-cols-4">
        <div className="col-span-1">
          <Link href={`product/${''}`} passHref>
            <Image
              className="hover:bg-opacity-50 transition-all cursor-pointer duration-200"
              alt=""
              src="/../public/images/1__77599.1528613842.webp"
              layout="responsive"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className=" px-3 lg:col-span-3 sm:col-span-3 col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap">
          {/* Titile */}
          <Link href={`product/${''}`}>
            <a className=" text-gray-800 font-medium hover:text-yellow-500">
              iphone hkiha jhjhhjh gg
            </a>
          </Link>
          {/* --Rating- */}

          {/* -Price- */}
          <div className=" flex items-center">
            <span className=" text-yellow-500 font-bold mr-4">{`$1000`}</span>
            <span className=" text-gray-500">
              <del>{`$333`}</del>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
