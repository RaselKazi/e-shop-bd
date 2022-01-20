import React from 'react'
type ListProps = {
  Title: String
  Amount: Number
}
export default function List({ Title, Amount }: ListProps) {
  return (
    <li className=" flex justify-between items-center p-4 border-gray-600 border-t-2 text-lg text-black font-bold">
      <div className="">{Title}</div>
      <div className="">${Amount}</div>
    </li>
  )
}
