import Image from 'next/image'
import React from 'react'
import blog from '../../public/images/10.jpg'
const mostOrdered = [
  {
    name: 'Spicy seasoned seafood noodles',
    image: 'food-1.png',
    count: 200,
  },
  {
    name: 'Salted pasta with mushroom sauce',
    image: 'food-2.png',
    count: 120,
  },
  {
    name: 'Beef dumpling in hot and sour soup',
    image: 'food-3.png',
    count: 80,
  },
]
function MostOrdered() {
  return (
    <div className="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold leading-loose text-white">
          Most Ordered
        </h2>
        <button className="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
          <span className="text-sm text-white">Today</span>
        </button>
      </div>
      <hr className="border-gray-700" />

      {mostOrdered.map((ordre) => {
        return (
          <div key={ordre.name} className="flex flex-col gap-y-4">
            <div className="flex gap-x-4 items-center">
              <Image
                className=" rounded-full hover:opacity-80"
                alt=""
                src={blog}
                layout="fixed"
                width={50}
                height={50}
              />

              <div className="flex flex-col gap-y-0.5">
                <div className="text-sm font-medium text-white">
                  {ordre.name}
                </div>
                <div className="text-xs text-gray-500"> dishes ordered</div>
              </div>
            </div>
          </div>
        )
      })}

      <button className="py-3.5 rounded-lg w-full border border-red-400 text-red-400 text-sm font-semibold">
        View all
      </button>
    </div>
  )
}

export default MostOrdered
