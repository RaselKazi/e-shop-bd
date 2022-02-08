import React from 'react'

export default function CompareItem({ index, title, data }) {
  return (
    <div>
      {index === 0 ? (
        <div className="p-3">
          <div className="text-base lg:text-2xl  capitalize">{title}</div>
        </div>
      ) : (
        <div className="p-3">
          <div className="text-white text-base lg:text-2xl  capitalize">
            {title}
          </div>
        </div>
      )}
      <div className="p-3 border border-gray-200  bg-gray-100">
        <div className="capitalize text-base">{data}</div>
      </div>
    </div>
  )
}
