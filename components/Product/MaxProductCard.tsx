import Image from 'next/image'
import React from 'react'
import product from '../../public/images/3__33781.1528613921.webp'
import { cardHoverItem } from '../../data/CardProductData'
import CountdownTimer from '../../utils/CountdownTimer'

function MaxProductCard() {
  return (
    <div className=" group p-5 md:border-r border-r-0 border-b md:border-b-0 border-gray-200">
      <div className=" relative">
        <Image
          className=" mx-auto h-full w-full"
          alt=""
          src={product}
          layout="responsive"
          width={400}
          height={400}
        />

        <div className="space-y-3 absolute top-1/4">
          {cardHoverItem.map((item) => {
            return (
              <div className=" group-hover:block hidden transition duration-300 delay-100">
                <button className=" group text-white hover:bg-yellow-500 duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 rounded flex items-center">
                  {item.icon}
                  <span className=" hidden duration-300 ml-2">
                    {item.title}
                  </span>
                </button>
              </div>
            )
          })}
        </div>
      </div>

      <div className="lg:p-5 p-0 py-5">
        <a
          className=" text-gray-800 text-xl hover:text-yellow-500 font-bold"
          href="catlyn-snake-pilit.html"
        >
          Cillum Ham Hock
        </a>

        <div className=" flex items-center my-2">
          <span className=" text-yellow-500 text-2xl font-bold mr-4">
            £360.00
          </span>
        </div>

        <div>
          <span className=" text-gray-500 text-sm leading-loose">
            Nam tempus turpis at metus scelerisque placerat nulla deumantos
            sollicitudin felis. Pellentesque diam dolor, elementum et lobortis
            at, mollis ut risus. Sedcus faucibus cosmo sullamcorper mattis...
          </span>
        </div>
        {/*timmer */}
        <CountdownTimer class="max"></CountdownTimer>
      </div>
    </div>
  )
}

export default MaxProductCard
