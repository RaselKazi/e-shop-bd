import React, { useState } from 'react'

type FilterProps = {
  name: String
}
export default function FilterTag({ name }: FilterProps) {
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
        <li className=" flex items-center mb-3">
          <input
            type="checkbox"
            className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
          />
          <a className=" hover:text-yellow-500 ml-2" href="#">
            Common Good (14)
          </a>
        </li>
      </ul>
    </div>
  )
}
