import React from 'react'
import Image from 'next/image'

type AvatarColProps = {
  images: { public_id: string; url: string; _id: string }[]
}
export default function AvatarCol({ images }: AvatarColProps) {
  return (
    <th className=" px-4 my-2 flex justify-start items-center">
      {images.map((img) => {
        return (
          <div
            key={img.url}
            className="rounded-full  -mx-2  border-2 border-gray-400 flex  justify-center items-center z-10"
          >
            <Image
              className="rounded-full hover:opacity-80"
              alt="h"
              src={img.url}
              layout="fixed"
              width={25}
              height={25}
            />
          </div>
        )
      })}
    </th>
  )
}
