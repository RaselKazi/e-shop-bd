import React from 'react'
import { TagList } from '../data/CategoriesData'
function Tag() {
  return (
    <div className=" border border-gray-200 rounded p-5">
      <ul>
        {TagList.map((i) => (
          <li key={i} className="inline-block px-1 py-2">
            <span className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500  p-1 hover:bg-yellow-500 hover:text-white bg-gray-200  rounded-full">
              {i}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tag
