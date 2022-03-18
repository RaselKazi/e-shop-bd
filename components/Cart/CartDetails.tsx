import React, { useContext } from 'react'
import { ICartItems, IProduct } from '../../type/product.model.type'
import { Store } from '../../utils/Store'

export default function CartDetails() {
  const { state } = useContext(Store)
  const {
    cart: { cartItems },
  } = state

  const round2 = (num: number) => Math.round(num * 100 + Number.EPSILON) / 100 // 123.456 => 123.46
  const items = cartItems.reduce(
    (a: number, c: { quantity: number }) => a + c.quantity,
    0
  )
  const itemsPrice = round2(
    cartItems.reduce(
      (a: number, c: { price: number; quantity: number }) =>
        a + c.price * c.quantity,
      0
    )
  )
  return (
    <>
      <li className="p-3 flex items-center justify-evenly bg-gray-200 bg-opacity-80 rounded   text-lg text-black font-bold capitalize">
        <div className="">{`(items) ${items}`}</div>
        <div className="">Subtotal</div>
        <div className="">${itemsPrice}</div>
      </li>
      <li className="p-4 flex justify-between items-center font-medium text-lg capitalize">
        <div className="">Qunty</div>
        <div className="">Price</div>
        <div className="">total</div>
      </li>
      {cartItems.map((item: ICartItems, i: React.Key) => (
        <li
          key={i}
          className="p-4 flex justify-between items-center hover:bg-gray-100"
        >
          <div className="">{item.quantity}</div>
          <div className="">${item.price}</div>
          <div className="">${item.quantity * item.price}</div>
        </li>
      ))}

      <li className="border-yellow-600 border-t-2"></li>
      <li className=" flex justify-between items-center p-4 text-black font-bold">
        <div className="">Items</div>
        <div className="">${itemsPrice}</div>
      </li>
    </>
  )
}
