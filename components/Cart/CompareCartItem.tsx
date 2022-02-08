import Link from 'next/link'
import React, { useContext } from 'react'
import { Store } from '../../utils/Store'
import CartProductCard from '../Product/CartProductCard'

export default function CompareCartItem() {
  const { state, dispatch } = useContext(Store)

  const removeItemHandler = (item) => {
    dispatch({ type: 'COMPARE_CART_REMOVE_ITEM', payload: item })
  }
  return (
    <div>
      {state.compareCartItems.map((item) => (
        <div
          key={item._id}
          className=" mx-8 my-4 grid grid-cols-5 border-b  border-gray-200 hover:bg-gray-100 cursor-pointer "
        >
          <Link href="/product/compare">
            <div className=" col-span-4">
              <CartProductCard variant="min" CartData={item} />
            </div>
          </Link>

          <div className="flex justify-between items-center col-span-1 px-4">
            <div
              className="text-red-600 bg-red-500/30   rounded hover:bg-red-500 hover:text-gray-100 transition duration-200 font-bold text-xl px-2"
              onClick={() => removeItemHandler(item)}
            >
              X
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
