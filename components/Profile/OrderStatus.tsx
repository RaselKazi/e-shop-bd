import React from 'react'
import CheckoutWizard from '../../utils/ui/CheckoutWizard'

import OrderProductCard from './OrderProductCard'

export default function OrderStatus({ orderData }) {
  return (
    <div>
      <div className="py-2 pb-14 border-gray-300 border-b-2">
        <CheckoutWizard step={1}></CheckoutWizard>
      </div>

      <div className="py-2  grid lg:grid-cols-2">
        {orderData.map((item) => {
          return <OrderProductCard CartData={item.orderItems} />
        })}
      </div>
    </div>
  )
}
