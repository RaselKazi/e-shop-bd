import { useRouter } from 'next/router'
import React, { Dispatch, SetStateAction } from 'react'
type HeadLineProps = {
  productTab: String
  setProductTab: Dispatch<SetStateAction<string>>
}

const tab = ['Bestselling', 'Featured', 'New Arrivals', 'Top Reviewed']
export default function HeadLineText({
  productTab,
  setProductTab,
}: HeadLineProps) {
  const router = useRouter()
  const handelTab = (tab: string) => {
    setProductTab(tab)
    router.push(`/?sort=${tab.split(' ').join('')}`)
  }
  return (
    <div className=" group inline-block sm:m-0 m-1">
      {tab.map((text) => (
        <li
          className="inline-block px-2 relative  cursor-pointer"
          key={text}
          onClick={() => handelTab(text)}
        >
          <a
            className={`${
              productTab === text
                ? 'text-yellow-500 border-b-2 border-yellow-500'
                : 'text-gray-500'
            } hover:text-yellow-500  py-2  `}
          >
            {text}
          </a>
          <div className=" absolute bg-yellow-400  duration-300 h-0.5 group-hover:w-full w-0  mx-auto -mb-0.5 mt-1 flex justify-center"></div>
        </li>
      ))}
    </div>
  )
}
