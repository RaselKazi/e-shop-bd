import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import CountdownTimer from '../../utils/ui/CountdownTimer'
import HoverCardItem from '../../utils/ui/HoverCardItem'

type ProductCard = {
  card?: String
  productData: any
}
function MidProductCard({ card, productData }: ProductCard) {
  return (
    <div
      className={`group border-b p-5 ${
        card === 'max'
          ? ' md:border-r border-r-0 md:border-b-0 border-gray-200'
          : 'md:grid md:grid-cols-5 gap-4 '
      }`}
    >
      <div className="col-span-2 relative cursor-pointer">
        <Link href={`product/${productData?._id}`}>
          <Image
            className=" mx-auto h-full w-full"
            alt=""
            src={productData?.images[0].url}
            layout="responsive"
            width={300}
            height={320}
          />
        </Link>

        {/* <!--bages---> */}
        <div className=" absolute top-4 right-10 text-xs text-white bg-red-500 h-10 w-10 flex items-center justify-center rounded-full">
          <span>-27%</span>
        </div>

        <div className="space-y-3 absolute top-1/4">
          <HoverCardItem productId={productData} />
        </div>
      </div>
      <div
        className={`md:py-0 py-5 ${card === 'max' ? 'lg:p-5' : 'col-span-3 '}`}
      >
        <Link href={`product/${productData?._id}`}>
          <a className=" text-gray-800 text-xl hover:text-yellow-500 font-bold cursor-pointer">
            {productData?.name}
          </a>
        </Link>
        <div className=" flex items-center my-2">
          <span className=" text-yellow-500 text-2xl font-bold mr-4">
            {`$${productData?.price}`}
          </span>
          <span className=" text-gray-500 text-xl">
            <del>£450.00</del>
          </span>
        </div>
        <div>
          <span className=" text-gray-500 text-sm leading-loose">
            Nam tempus turpis at metus scelerisque placerat nulla deumantos
            sollicitudin felis. Pellentesque diam dolor
          </span>
        </div>
        {/* <!--timmer--> */}
        <CountdownTimer
          class={`${card === 'max' ? 'max' : 'mid'}`}
        ></CountdownTimer>
      </div>
    </div>
  )
}

export default MidProductCard
