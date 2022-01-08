import React from 'react'

function ProductCardDetails() {
  return (
    <div>
      <div>
        <h3 className=" text-2xl font-bold tracking-tighter text-gray-700">
          Catlyn snake pilit
        </h3>
        {/* --Review- */}
        <div className=" flex items-center">
          {/* --Rating-- */}
          <div className=" flex items-center space-x-1 py-5">
            <svg
              className=" w-3 h-3 text-gray-400"
              fill="currentColor"
              viewBox="0 0 26 28"
            >
              <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
            </svg>
          </div>

          <div className=" px-4 text-gray-500">
            <span>(No reviews yet)</span>
          </div>
        </div>
        {/* --Price- */}
        <div className=" flex items-center">
          <span className=" text-yellow-500 text-2xl font-bold mr-3">
            £300.00
          </span>
          <span className=" text-gray-400 text-sm">
            <del>£459.00</del>
          </span>
        </div>
      </div>
      {/* -----Size Chart------ */}
      <div x-data="{modal:false}" className=" my-4">
        <button className=" flex items-center text-gray-700 duration-300 font-bold hover:text-yellow-500">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-4 h-4 mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
            </svg>
          </span>
          <span className="shadow-2xl"> Size Chart</span>
        </button>
        {/* ----modal---- */}
        {/* <div className="z-50  bg-black bg-opacity-70 md:overflow-hidden overflow-y-auto fixed left-0 top-0 w-full h-full flex justify-center items-center">
          <div className="bg-white rounded  relative w-11/12 md:w-4/5 xl:w-3/5">
             -close button- 
            <div className=" absolute text-gray-200 hover:text-white duration-300 cursor-pointer -top-7 right-0">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
             content  
            <div>
              <div>
                <img className="w-full h-full" src="images/size-chart.jpg" alt=""> 
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* ------Brand Details---- */}
      <div className=" grid grid-cols-2 text-sm font-medium tracking-tighter text-gray-500 gap-2 border-b pb-5">
        <span>Brand</span>
        <span>sport 1</span>
        <span>SKU:</span>
        <span>sport 1</span>
        <span>Condition:</span>
        <span>New</span>
      </div>
      {/* ---size-- */}
      <div className="text-gray-500 my-4">
        <label className="">
          Size:<small className=" ml-3  text-gray-400">Required</small>
        </label>
        <select
          className=" block w-full my-2 border focus:outline-none p-1 focus:border-gray-500 rounded text-sm font-medium"
          required
        >
          <option>Choose Options</option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
      </div>
      {/* -----color---- */}
      <div className="text-gray-500 my-4">
        <label>
          Color:<small className=" ml-3  text-gray-400">Required</small>
        </label>
        <div x-data="{ tab:'tab1'}" className=" pt-3 ">
          <button className=" cursor-pointer h-6 w-6 bg-white border border-white inline-block ring-1 ring-gray-200 mr-2"></button>

          <button className=" cursor-pointer h-6 w-6 bg-red-500 border border-white inline-block ring-1 ring-gray-200 mr-2"></button>

          <button className=" cursor-pointer h-6 w-6 bg-yellow-500 border border-white inline-block ring-1 ring-gray-200 mr-2"></button>

          <button className=" cursor-pointer h-6 w-6 bg-green-500 border border-white inline-block ring-1 ring-gray-200 mr-2"></button>

          <button className=" cursor-pointer h-6 w-6 bg-blue-500 border border-white inline-block ring-1 ring-gray-200 mr-2"></button>

          <button className=" cursor-pointer h-6 w-6 bg-purple-500 border border-white inline-block ring-1 ring-gray-200 mr-2"></button>

          <button className=" cursor-pointer h-6 w-6 bg-pink-500 border border-white inline-block ring-1 ring-gray-200 mr-2"></button>
        </div>
      </div>
      {/* // -Quantity- */}
      <div className="my-4">
        <label className="text-gray-500 block">Quantity:</label>
        <div
          className=" border rounded inline-block mt-4"
          x-data="{ count: '0' }"
        >
          <div className=" flex items-center divide-x">
            <div className=" px-6 py-1">
              <p className="font-bold text-center" x-text="count"></p>
            </div>

            <div className=" px-4 py-1">
              <button className="block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <button className="block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Button and Add to whitelist */}
      <div className=" flex items-center space-x-2 my-6">
        <button className="p-2 px-6 border-2 border-yellow-500 hover:border-yellow-600 duration-300 rounded-sm text-sm bg-yellow-500 text-white hover:bg-yellow-600">
          Add to Cart
        </button>

        <div x-data="{popover:false}" className="relative inline-block">
          <button className="p-2 px-6 border-2 border-yellow-500 hover:border-yellow-600 duration-300 rounded-sm text-sm bg-yellow-500 text-white hover:bg-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div x-show="popover">
            <div className="absolute whitespace-nowrap -top-12 -right-28 bg-white border rounded px-3 p-1">
              <span>Add to Wish Lists</span>
            </div>
            <div className="absolute -top-5 right-3 bg-white h-3 w-3 transform rotate-45 border-t-0 border-l-0 border"></div>
          </div>
        </div>

        <div x-data="{popover:false}" className="relative inline-block">
          <button className="p-2 px-6 border-2 border-yellow-500 hover:border-yellow-600 duration-300 rounded-sm text-sm bg-yellow-500 text-white hover:bg-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div x-show="popover">
            <div className="absolute whitespace-nowrap -top-12 -right-24 bg-white border rounded px-3 p-1">
              <span>Add to compare</span>
            </div>
            <div className="absolute -top-5 right-3 bg-white h-3 w-3 transform rotate-45 border-t-0 border-l-0 border"></div>
          </div>
        </div>
      </div>
      {/* ----Share--- */}
      <div className=" flex items-center">
        <a
          className="mr-2 p-2 hover:shadow-2xl duration-300 bg-blue-800 text-white transform hover:-translate-y-1"
          href="#"
        >
          <svg
            className="svg-inline--fa fa-facebook-f fa-w-10 w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            ></path>
          </svg>
        </a>

        <a
          className="mr-2 p-2 hover:shadow-2xl duration-300 bg-blue-400 text-white transform hover:-translate-y-1"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-twitter w-4 h-4"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </a>

        <a
          className="mr-2 p-2 hover:shadow-2xl duration-300 bg-red-600 text-white transform hover:-translate-y-1"
          href="#"
        >
          <svg
            className="svg-inline--fa fa-pinterest-p fa-w-12 w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
            ></path>
          </svg>
        </a>

        <a
          className="mr-2 p-2 hover:shadow-2xl duration-300 bg-pink-600 text-white transform hover:-translate-y-1"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-instagram w-4 h-4 "
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </a>

        <a
          className="mr-2 p-2 hover:shadow-2xl duration-300 bg-red-500 text-white transform hover:-translate-y-1"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-4 w-4"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
        </a>
      </div>
      {/* FROM US */}
      <div className=" mt-10">
        <h4 className="font-bold tracking-tighter text-gray-700">
          4 GREAT REASONS TO BUY FROM US:
        </h4>

        <div className=" my-5">
          {/* <img className=" w-12 inline-block mr-4 hover:opacity-70 duration-300" src="images/reasons-1.png" alt=""> */}
        </div>

        <div className="pt-4">
          {/* <img className="inline-block mb-4 md:mr-2 mr-4" src="images/pay-1.webp" alt=""> */}
        </div>
      </div>
    </div>
  )
}

export default ProductCardDetails
