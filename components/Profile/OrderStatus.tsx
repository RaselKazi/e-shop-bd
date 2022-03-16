import React from 'react'
import { IOrder } from '../../type/order.model.type'

import CheckoutWizard from '../../utils/ui/CheckoutWizard'

import OrderProductCard from './OrderProductCard'

type OrderStatusProps = { orderData: IOrder[] }
export default function OrderStatus({ orderData }: OrderStatusProps) {
  return (
    <div>
      <div className="py-2 pb-14 border-gray-300 border-b-2">
        <CheckoutWizard step={1}></CheckoutWizard>
      </div>

      <div className="py-2  grid lg:grid-cols-2">
        {orderData.map((item) => {
          return <OrderProductCard key={item._id} CartData={item.orderItems} />
        })}
      </div>
    </div>
  )
}
