import React from 'react'

export default function TableCol({ title }: { title: String | Number }) {
  return (
    <td className=" text-center border-gray-900 border-x py-2 lg:px-4 text-gray-200 whitespace-nowrap cursor-pointer">
      {title}
    </td>
  )
}
