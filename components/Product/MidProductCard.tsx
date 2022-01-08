import Image from 'next/image'
import React from 'react'
import product from '../../public/images/40__59838.1528858720.webp'
import CountdownTimer from '../../utils/CountdownTimer'

function MidProductCard() {
  return (
    <div
      x-data="{hidden:false}"
      className="md:grid md:grid-cols-5 gap-4 border-b p-5"
    >
      <div className="col-span-2 relative">
        <Image
          className=" mx-auto h-full w-full"
          alt=""
          src={product}
          layout="responsive"
          width={300}
          height={320}
        />

        {/* <!--bages---> */}
        <div className=" absolute top-4 right-10 text-xs text-white bg-red-500 h-10 w-10 flex items-center justify-center rounded-full">
          <span>-27%</span>
        </div>

        <div className="space-y-3 absolute top-1/4">
          <div>
            <button className="block text-white hover:bg-yellow-500 duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 rounded  flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="duration-300 ml-2">Add to Cart</span>
            </button>
          </div>

          <div>
            <button className="block text-white hover:bg-yellow-500 duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 rounded flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="duration-300 ml-2">Add to Wish List</span>
            </button>
          </div>

          <div>
            <button className="block text-white hover:bg-yellow-500 duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 rounded flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="duration-300 ml-2">Add to Compare</span>
            </button>
          </div>

          <div>
            <button className="block text-white hover:bg-yellow-500 duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 rounded flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="duration-300 ml-2">Quick view</span>
            </button>
          </div>
        </div>
      </div>

      <div className=" col-span-3 md:py-0 py-5">
        <a
          className=" text-gray-800 text-xl hover:text-yellow-500 font-bold"
          href="catlyn-snake-pilit.html"
        >
          Denouncing pleasure
        </a>

        <div className=" flex items-center my-2">
          <span className=" text-yellow-500 text-2xl font-bold mr-4">
            £350.00
          </span>
          <span className=" text-gray-500 text-xl">
            <del>£450.00</del>
          </span>
        </div>

        <div>
          <span className=" text-gray-500 text-sm leading-loose">
            Nam tempus turpis at metus scelerisque placerat nulla deumantos
            sollicitudin felis. Pellentesque diam dolor, elementum et lobortis
            at, mollis ut risus. Sedcus faucibus cosmo sullamcorper mattis...
          </span>
        </div>
        {/* <!--timmer--> */}
        <CountdownTimer class="mid"></CountdownTimer>
      </div>
    </div>
  )
}

export default MidProductCard
