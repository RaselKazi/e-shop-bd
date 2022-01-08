import Image from 'next/image'
import React from 'react'
import blog from '../../public/images/1__77599.1528613842.webp'

function NewProductSection() {
  return (
    <div>
      {/* -Hero text- */}
      <div>
        <a
          href="shop.html"
          className=" font-bold border-b-2 border-yellow-500 inline-block pb-1"
        >
          BEST SELLERS
        </a>
      </div>
      {/* carousel */}
      <div className=" owl-carousel py-7 owl-theme owl-carousel-05 border-t-2 border-gray-100 ">
        <div className=" space-y-5">
          <div className="grid lg:grid-cols-4 grid-cols-4 sm:grid-cols-8 gap-3 group">
            <div className="col-span-1">
              <a href="catlyn-snake-pilit.html">
                <Image
                  className=" group-hover:opacity-50 duration-200 duration-200"
                  alt=""
                  src={blog}
                  layout="fixed"
                  width={90}
                  height={100}
                />
              </a>
            </div>
            <div className="lg:col-span-3 sm:col-span-7 col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap">
              {/* Titile */}
              <a
                className=" text-gray-800 font-medium hover:text-yellow-500"
                href="catlyn-snake-pilit.html"
              >
                Donec et libero nunc quis facilisis odio
              </a>
              {/* --Rating- */}
              <div className=" flex items-center space-x-1 my-2">
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
              {/* -Price- */}
              <div className=" flex items-center mt-3">
                <span className=" text-yellow-500 text-xl font-bold mr-4">
                  £350.00
                </span>
                <span className=" text-gray-500">
                  <del>£450.00</del>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProductSection
