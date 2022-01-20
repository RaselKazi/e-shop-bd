import React, { useState } from 'react'
type PriceProps = {
  name: String
}
export default function FilterPrice({ name }: PriceProps) {
  const [open, setOpen] = useState(false)
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
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
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
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
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
  )
}
