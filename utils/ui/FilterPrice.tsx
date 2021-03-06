import { useRouter } from 'next/router'
import React, { useState } from 'react'
type PriceProps = {
  name: String
}
export default function FilterPrice({ name }: PriceProps) {
  const [open, setOpen] = useState(false)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const router = useRouter()
  const handelSubmit = () => {
    router.push(`/product?price=${minPrice}-${maxPrice}`)
  }
  return (
    <div className=" mt-6">
      <button className=" flex justify-between w-full">
        <span>{name}</span>
        <span
          className=" border border-gray-500"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? (
            <svg
              x-show="open === false"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              x-show="open === true"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </button>

      <ul className={`${open && 'hidden'} py-4`}>
        <form className=" grid grid-cols-3 gap-2">
          <input
            type="number"
            placeholder="Min."
            value={minPrice}
            className="p-2 text-gray-600 border border-gray-300 rounded focus:outline-none"
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max."
            value={maxPrice}
            className="p-2 text-gray-600 border border-gray-300 rounded focus:outline-none"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white cursor-pointer p-2 text-gray-600 border border-gray-300 rounded focus:outline-none"
            onClick={handelSubmit}
          >
            Update
          </button>
        </form>
      </ul>
    </div>
  )
}
