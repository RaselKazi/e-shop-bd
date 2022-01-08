import React from 'react'

function CategoriesCard() {
  return (
    <div className=" flex items-center justify-center p-1">
      <span>
        <svg
          className="svg-inline--fa fa-file-alt fa-w-12 w-8 h-8 mr-4 text-yellow-500"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"
          ></path>
        </svg>
      </span>
      <div>
        <a
          href="shop.html"
          className=" uppercase text-gray-500 font-bold hover:text-yellow-500"
        >
          FREE DELIVERY
        </a>
        <h5 className="text-gray-400 text-sm">On order over $49.86</h5>
      </div>
    </div>
  )
}

export default CategoriesCard
