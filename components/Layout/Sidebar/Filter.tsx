import React from 'react'

function Filter() {
  return (
    <div className=" mt-5 border rounded">
      <div className=" font-bold p-3 flex items-center bg-gray-200 bg-opacity-80 rounded">
        <span>REFINE BY</span>
      </div>

      <div className=" p-4 text-gray-500 text-sm">
        <div className=" mt-4">
          <span>No filters applied</span>
        </div>

        <div x-data="{open:true}" className=" mt-6">
          <button className=" flex justify-center justify-between w-full">
            <span>Brand</span>
            <span className=" border border-gray-500">
              <svg
                x-show="open === false"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                x-show="open === true"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <ul x-show="open" className=" py-4">
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <a className=" hover:text-yellow-500 ml-2" href="#">
                Common Good (14)
              </a>
            </li>
            <li className=" flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <a className=" hover:text-yellow-500 ml-2" href="#">
                OFS (3)
              </a>
            </li>
          </ul>
        </div>

        <div x-data="{open:true}" className=" mt-6">
          <button className=" flex justify-center justify-between w-full">
            <span>__tags</span>
            <span className=" border border-gray-500">
              <svg
                x-show="open === false"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                x-show="open === true"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <ul x-show="open" className=" py-4">
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <a className=" hover:text-yellow-500 ml-2" href="#">
                123 (1)
              </a>
            </li>
          </ul>
        </div>

        <div x-data="{open:true}" className=" mt-6">
          <button className=" flex justify-center justify-between w-full">
            <span>Price</span>
            <span className=" border border-gray-500">
              <svg
                x-show="open === false"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                x-show="open === true"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <ul x-show="open" className=" py-4">
            <form className=" grid grid-cols-3 gap-2">
              <input
                type="number"
                placeholder="Min."
                value=""
                className="p-2 text-gray-600 border border-gray-300 rounded focus:outline-none"
              />
              <input
                type="number"
                placeholder="Max."
                value=""
                className="p-2 text-gray-600 border border-gray-300 rounded focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white cursor-pointer p-2 text-gray-600 border border-gray-300 rounded focus:outline-none"
              >
                Update
              </button>
            </form>
          </ul>
        </div>

        <div x-data="{open:true}" className=" mt-6">
          <button className=" flex justify-center justify-between w-full">
            <span>Other</span>
            <span className=" border border-gray-500">
              <svg
                x-show="open === false"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                x-show="open === true"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <ul x-show="open" className=" py-4">
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <a className=" hover:text-yellow-500 ml-2" href="#">
                Has Free Shipping (16)
              </a>
            </li>
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <a className=" hover:text-yellow-500 ml-2" href="#">
                Is Featured (7)
              </a>
            </li>
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <a className=" hover:text-yellow-500 ml-2" href="#">
                In Stock (18)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Filter
