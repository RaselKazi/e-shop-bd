import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { IProduct } from '../../type/product.model.type'
import { Store } from '../../utils/Store'
import CartProductCard from '../Product/CartProductCard'

type CartItemProps = {
  variant?: String
}
export default function CartItem({ variant }: CartItemProps) {
  const { state, dispatch } = useContext(Store)

  const updateCartHandler = async (item: IProduct, quantity: number) => {
    if (quantity <= 0 || '') {
    } else {
      dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } })
    }
  }

  const removeItemHandler = (item: IProduct) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }
  const router = useRouter()
  const GoTOCart = () => {
    if (variant === 'min') {
      router.push('/cart')
    }
  }

  return (
    <div>
      {state.cart.cartItems.map((item: IProduct) => (
        <div
          key={item._id}
          className=" mx-8 my-4 grid grid-cols-5 border-b  border-gray-200 hover:bg-gray-100 cursor-pointer "
        >
          <div className=" col-span-3" onClick={GoTOCart}>
            <CartProductCard variant={variant} CartData={item} />
          </div>

          <div className="flex justify-between items-center col-span-2 px-4">
            {/* // -Quantity- */}

            {variant === 'min' ? (
              <div className=" text-gray-500 font-bold">
                {`Qty ${item.quantity}`}
              </div>
            ) : (
              <div className="bg-white border rounded inline-block mt-4">
                <div className="  flex items-center divide-x">
                  <div className=" ">
                    <input
                      type="number"
                      className="appearance-none font-bold text-center outline-none w-14  md:w-20"
                      value={item.quantity}
                      onChange={(e) => {
                        updateCartHandler(item, parseInt(`${e.target.value}`))
                      }}
                    />
                  </div>
                  <div className=" px-2 md:px-4 py-1">
                    <button
                      className="block"
                      onClick={() => {
                        updateCartHandler(item, item.quantity + 1)
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <button
                      onClick={() => {
                        updateCartHandler(item, item.quantity - 1)
                      }}
                      disabled={item.quantity <= 0}
                      className="block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div
              className={`  text-red-600 bg-red-500/30   rounded hover:bg-red-500 hover:text-gray-100 transition duration-200 font-bold ${
                variant === 'min'
                  ? 'text-xl px-2 '
                  : ' text-xl px-2 md:text-2xl md:px-3'
              }`}
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
