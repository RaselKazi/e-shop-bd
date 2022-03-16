import React from 'react'
import { color } from '../../data/ProductCardData'

export default function ProductColor() {
  return (
    <div className=" pt-3 ">
      <button className=" cursor-pointer h-6 w-6 bg-white border border-white inline-block ring-1 ring-gray-200 mr-2"></button>
      {color.map((c) => {
        return (
          <button
            key={c}
            className={`cursor-pointer h-6 w-6  border border-white inline-block ring-1 ring-gray-200 mr-2 bg-${c}-500`}
          ></button>
        )
      })}
    </div>
  )
}
