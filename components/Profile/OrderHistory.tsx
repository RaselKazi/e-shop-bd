import React from 'react'
import { dateFormate } from '../../utils/dateFormate'

export default function OrderHistory({ orderData }) {
  return (
    <div className=" flex justify-center">
      <table className="table-auto border-collapse border border-gray-300 rounded-3xl">
        <thead className="bg-gray-200">
          <tr>
            <th className="lg:px-4 px-2 hidden sm:block  py-2 text-center text-base font-medium text-gray-900 uppercase tracking-wider border-b border-gray-400">
              Id
            </th>
            <th className="lg:px-4 px-2  py-2 text-center text-base font-medium text-gray-900 uppercase tracking-wider border-b border-gray-400">
              Date
            </th>
            <th className="lg:px-4 px-2  py-2 text-center text-base font-medium text-gray-900 uppercase tracking-wider border-b border-gray-400">
              Payment
            </th>
            <th className="lg:px-4 px-2  py-2 text-center text-base font-medium text-gray-900 uppercase tracking-wider border-b border-gray-400">
              TotalAmount
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-50 divide-y divide-gray-200">
          {orderData.map((order) => (
            <tr
              className="  hover:bg-gray-200  bg-gray-50 odd:bg-gray-100 transition duration-200"
              key={order._id}
            >
              <td className=" hidden sm:block text-center px-4 py-2 text-gray-900 whitespace-nowrap">
                {order._id}
              </td>
              <td className="text-center px-4 py-2 text-gray-900 whitespace-nowrap">
                {dateFormate(order.createdAt)}
              </td>
              <td className="text-center px-4 py-2 text-gray-900 whitespace-nowrap">
                {order.paymentMethod}
              </td>
              <td className="text-center px-4 py-2 text-gray-900 whitespace-nowrap">
                $ {order.totalPrice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
