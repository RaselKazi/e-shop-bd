import React from 'react'
type CountdownItemProp = {
  size: string | undefined
  text: string
  value: Number
}
export default function CountdownItem({
  size,
  text,
  value,
}: CountdownItemProp) {
  return (
    <li className=" mr-4 text-center">
      <span
        className={` font-bold rounded-full  flex items-center justify-center bg-gray-200 text-gray-600
               ${size === 'max' ? 'text-base h-10 w-10' : 'h-12 w-12 text-xl'}`}
        id="days"
      >
        {value}
      </span>
      <h5 className=" text-gray-400 uppercase my-2 text-xs">{text}</h5>
    </li>
  )
}
