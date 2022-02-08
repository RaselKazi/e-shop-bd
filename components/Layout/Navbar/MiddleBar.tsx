import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { Store } from '../../../utils/Store'
import CartItem from '../../Cart/CartItem'
import CompareCartItem from '../../Cart/CompareCartItem'

function MiddleBar() {
  const { state, dispatch } = useContext(Store)
  const [search, setSearch] = useState('')
  const [compareCartOpen, setCompareCartOpen] = useState(false)
  const router = useRouter()
  const searchHandler = () => {
    router.push(`/product?query=${search}`)
  }
  return (
    <div className="flex justify-between items-center py-6 xl:px-24 sm:px-10 px-4">
      <div>
        <a href="">{/* <img  src="images/logo-01.png" alt=""> */}</a>
      </div>

      <div className="w-full sm:px-8 px-2 flex items-center">
        <input
          className=" w-full p-2 rounded-l border-r-0 px-4 text-sm border text-gray-600 outline-none focus:ring focus:ring-blue-200"
          type="text"
          placeholder="Search the store"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button
          className="sm:px-6 p-2 bg-yellow-500 hover:bg-black text-white font-bold rounded-r"
          onClick={searchHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="md:pl-2 flex items-center">
        <div className=" relative">
          <div
            className=" flex items-center text-gray-500  md:mr-4 mr-1 cursor-pointer"
            onClick={() => setCompareCartOpen(!compareCartOpen)}
          >
            <div className="p-2 border rounded-full mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <span className="hidden md:inline-block">Compare</span>
          </div>
          {compareCartOpen && (
            <div
              className="bg-white shadow-lg absolute right-0 top-12 border rounded z-50  items-center justify-center w-96"
              onClick={() => setCompareCartOpen(false)}
            >
              <CompareCartItem />
            </div>
          )}
        </div>

        <a className=" flex items-center text-gray-500 " href="#">
          <div className="p-2 border rounded-full sm:mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="hidden md:inline-block whitespace-nowrap">
            Wish Lists
          </span>
        </a>
      </div>
    </div>
  )
}

export default MiddleBar
