import Image from 'next/image'
import React from 'react'
import productImg from '../../public/images/14__14891.1528614034.webp'
import CountdownTimerOne from '../../utils/CountdownTimerOne'
function ProductCard() {
  return (
    <div className=" py-8 border rounded border-t-0">
      <div x-show="tab === 'tab1'">
        <div className=" owl-carousel owl-carousel-04-01">
          <div
            x-data="{hidden:false}"
            className="bg-gray-200 bg-opacity-30 pb-4 group"
          >
            <div className=" relative">
              <Image
                className=" mx-auto h-full w-full"
                alt=""
                src={productImg}
                layout="fixed"
                width={300}
                height={250}
              />

              {/* <!--Hidden button----> */}
              <div className=" hidden group-hover:block space-y-3 absolute top-1/4 ">
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
                  <button
                    x-data
                    className="block text-white hover:bg-yellow-500 duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 rounded flex items-center"
                  >
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
                    <span className="duration-300 ml-2 ">Add to Compare</span>
                  </button>
                </div>
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
              <a
                className=" text-gray-800 font-medium hover:text-yellow-500"
                href="catlyn-snake-pilit.html"
              >
                Nami alan shankle tempus turpis
              </a>
              {/* --Rating- */}
              <div className=" flex items-center justify-center space-x-1 my-2">
                <svg
                  className=" w-3 h-3 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 26 28"
                >
                  <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                </svg>

                <svg
                  className=" w-3 h-3 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 26 28"
                >
                  <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                </svg>

                <svg
                  className=" w-3 h-3 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 26 28"
                >
                  <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                </svg>

                <svg
                  className=" w-3 h-3 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 26 28"
                >
                  <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                </svg>

                <svg
                  className=" w-3 h-3 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 26 28"
                >
                  <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                </svg>
              </div>
              {/* --Price-- */}
              <div className=" flex items-center justify-center mt-3">
                <span className=" text-yellow-500 text-xl font-bold mr-4">
                  £400.00
                </span>
                <span className=" text-gray-500">
                  <del>£456.00</del>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
