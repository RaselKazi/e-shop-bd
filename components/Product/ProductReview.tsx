import React from 'react'

function ProductReview() {
  return (
    <div x-show="tab === 'tab3'" className=" divide-y">
      <div x-data="{review:true}">
        <div className=" py-3 flex justify-between items-center">
          <span className=" text-xl font-bold  text-gray-700">0 Reviews</span>

          <button className="text-sm flex items-center text-gray-400 hover:text-gray-500">
            Hide Reviews
          </button>

          <button className="text-sm flex items-center text-gray-400 hover:text-gray-500">
            Show Reviews
          </button>
        </div>

        <div x-show="review" className=" py-6">
          <ul>
            <li className=" w-full"></li>
          </ul>
        </div>
      </div>
      {/* ----white a review--- */}
      <div>
        <div className=" text-xl py-4 uppercase font-bold">
          <span>White a Review :</span>
        </div>

        <form id="review" className=" text-gray-500 text-sm">
          <label className="py-2 font-bold">
            <span>Your experience</span>
            <span className=" text-red-500">*</span>
          </label>
          {/* <!--Rating--> */}
          <div
            x-data="{ tab:'tab1'}"
            className=" flex items-center justify-center space-x-1 py-5"
          >
            <svg
              className="w-8 h-8 text-gray-300 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 26 28"
            >
              <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
            </svg>

            <svg
              className="w-8 h-8 text-gray-300 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 26 28"
            >
              <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
            </svg>

            <svg
              className="w-8 h-8 text-gray-300 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 26 28"
            >
              <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
            </svg>

            <svg
              className="w-8 h-8 text-gray-300 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 26 28"
            >
              <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
            </svg>

            <svg
              className="w-8 h-8 text-gray-300 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 26 28"
            >
              <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
            </svg>
          </div>

          <label className="py-2 font-bold">
            <span>Comments</span>
            <span className=" text-red-500">*</span>
          </label>

          <textarea
            className="p-4 w-full h-20 border focus:border-gray-500 rounded focus:outline-none resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="my-4 p-3 bg-gray-700 hover:bg-opacity-80 px-7 rounded text-sm text-white font-medium duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProductReview
