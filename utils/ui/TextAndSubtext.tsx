import React from 'react'
type TextAndSubtextProps = {
  Text: String
  Subtext: String
}
export default function TextAndSubtext({ Text, Subtext }: TextAndSubtextProps) {
  return (
    <div className="pl-4 my-2">
      <div className=" text-lg font-bold text-gray-800 uppercase">
        {`${Text} : `}
        <span className=" capitalize text-lg font-medium text-gray-700 border-gray-800 border-dashed border-b-2">
          {Subtext}
        </span>
      </div>
    </div>
  )
}
