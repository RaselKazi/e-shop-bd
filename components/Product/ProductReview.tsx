import React, { useState } from 'react'
import RatingStar from '../../utils/ui/RatingStar'

function ProductReview() {
  const [rating, setRating] = useState(0)
  return (
    <div className=" divide-y">
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
          <div className=" flex items-center justify-center space-x-1 py-5">
            <RatingStar
              show={true}
              value={rating}
              setRating={setRating}
            ></RatingStar>
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
