import Image from 'next/image'
import React from 'react'
import blog from '../../public/images/10.jpg'
const orders = [
  {
    avatar: 'avatar-1.png',
    name: 'Eren Jaegar',
    menu: 'Spicy seasoned seafood noodles',
    total: '$125',
    status: 'completed',
  },
  {
    avatar: 'avatar-2.png',
    name: 'Reiner Braunn',
    menu: 'Salted Pasta with mushroom sauce',
    total: '$145',
    status: 'preparing',
  },
  {
    avatar: 'avatar-3.png',
    name: 'Levi Ackerman',
    menu: 'Beef dumpling in hot and sour soup',
    total: '$105',
    status: 'pending',
  },
  {
    avatar: 'avatar-4.png',
    name: 'Historia Reiss',
    menu: 'Hot spicy fried rice with omelet',
    total: '$45',
    status: 'completed',
  },
  {
    avatar: 'avatar-5.png',
    name: 'Armin Arlert',
    menu: 'Spicy seasoned seafood noodles',
    total: '$125',
    status: 'completed',
  },
  {
    avatar: 'avatar-6.png',
    name: 'Hanji Zoe',
    menu: 'Hot spicy fried rice with omelet',
    total: '$245',
    status: 'completed',
  },
]
function OrderReport() {
  return (
    <div className="p-6 bg-gray-900 rounded-lg">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-xl font-semibold leading-loose text-white">
          Order Report
        </h2>
        <button className="flex py-3 px-4 rounded-lg border border-gray-700 gap-x-2.5">
          <span className="text-sm text-white">Filter order</span>
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-sm font-semibold text-white">
            <td className="py-4 border-b border-gray-700">Customer</td>
            <td className="py-4 border-b border-gray-700">Menu</td>
            <td className="py-4 border-b border-gray-700 text-right">
              Total Payment
            </td>
            <td className="py-4 border-b border-gray-700 text-center">
              Status
            </td>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => {
            return (
              <tr key={i} className="text-sm text-gray-500 ">
                <td className="py-4">
                  <div className="flex gap-4 items-center">
                    <Image
                      className=" rounded-full hover:opacity-80"
                      alt=""
                      src={blog}
                      layout="fixed"
                      width={40}
                      height={40}
                    />
                    <span> </span>
                  </div>
                </td>
                <td className="py-4">{order.menu}</td>
                <td className="py-4 tabular-nums text-right">{order.total}</td>
                <td className="py-4 flex justify-center">
                  <span
                    className={`flex justify-center items-center py-1 w-24 font-medium capitalize rounded-full${
                      order.status === 'completed'
                        ? ' bg-green-400 bg-opacity-25 text-green-400 '
                        : order.status === 'preparing'
                        ? ' bg-purple-400 bg-opacity-25 text-purple-400'
                        : ' bg-red-400 bg-opacity-25 text-red-400'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default OrderReport
