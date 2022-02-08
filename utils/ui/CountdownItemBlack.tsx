import React from 'react'
type CountdownProp = {
  value: Number
  text: string
}
export default function CountdownItemBlack({ value, text }: CountdownProp) {
  return (
    <li className="p-1 text-center bg-black bg-opacity-70  rounded-sm">
      <span className="pb-2 font-bold text-base" id="days3">
        {value}
      </span>
      <h5 className=" uppercase mt-2 text-xs">{text}</h5>
    </li>
  )
}
