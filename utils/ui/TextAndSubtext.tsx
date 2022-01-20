import React from 'react'
type TextAndSubtextProps = {
  Text: String
  Subtext: String
}
export default function TextAndSubtext({ Text, Subtext }: TextAndSubtextProps) {
  return (
    <div className="px-3 my-4">
      <div className=" text-xl font-bold text-gray-900 uppercase">
        {`${Text} : `}
        <span className=" capitalize text-lg font-medium text-gray-700 border-gray-800 border-dashed border-b-2">
          {Subtext}
        </span>
      </div>
    </div>
  )
}
