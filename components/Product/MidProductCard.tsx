import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import CountdownTimer from '../../utils/ui/CountdownTimer'
import HoverCardItem from '../../utils/ui/HoverCardItem'
import { IProduct } from '../../type/product.model.type'

type ProductCard = {
  card?: String
  productData: IProduct
}
function MidProductCard({ card, productData }: ProductCard) {
  console.log(productData)
  return (
    <div
      className={`group border-b p-5 ${
        card === 'max'
          ? ' md:border-r border-r-0 md:border-b-0 border-gray-200'
          : 'md:grid md:grid-cols-5 gap-4 '
      }`}
    >
      <div className="col-span-2 relative cursor-pointer">
        <Link href={`product/${productData._id}`} passHref>
          <Image
            className=" mx-auto h-full w-full"
            alt=""
            src={productData.images[0].url}
            layout="responsive"
            width={300}
            height={320}
          />
        </Link>

        {/* <!--begs---> */}
        {productData.discount > 0 && (
          <div className="  absolute top-0 right-0 text-base font-bold text-white bg-red-600 h-7 w-16 flex items-center justify-center rounded">
            <span>
              <span>{`- ${productData.discount} %`}</span>
            </span>
          </div>
        )}

        <div className="space-y-3 absolute top-1/4">
          <HoverCardItem productId={productData} />
        </div>
      </div>
      <div
        className={`md:py-0 py-5 ${card === 'max' ? 'lg:p-5' : 'col-span-3 '}`}
      >
        <Link href={`product/${productData._id}`}>
          <a className=" text-gray-800 text-xl hover:text-yellow-500 font-bold cursor-pointer">
            {productData?.name}
          </a>
        </Link>
        <div className=" flex items-center my-2">
          <span className=" text-yellow-500 text-2xl font-bold mr-4">
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
        <div>
          <span className=" text-gray-500 text-sm leading-loose">
            Nam tempus turpin at metes scale risque placenta nullo demantoid
            solicitude felid. Pellentesque diam dolor
          </span>
        </div>
        {/* <!--timer--> */}
        <CountdownTimer
          cardSize={`${card === 'max' ? 'max' : 'mid'}`}
          discountDate={productData.discountTargetDate}
        ></CountdownTimer>
      </div>
    </div>
  )
}

export default MidProductCard
