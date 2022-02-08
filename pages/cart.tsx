import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import CartProductCard from '../components/Product/CartProductCard'
import { Store } from '../utils/Store'
import CartItem from '../components/Cart/CartItem'
import CartDetails from '../components/Cart/CartDetails'
import { useRouter } from 'next/router'

export default function cart() {
  const router = useRouter()

  const { state, dispatch } = useContext(Store)
  useEffect(() => {
    if (state.cart.cartItems.length === 0) {
      router.push('/')
    }
  }, [])
  const checkoutHandler = () => {
    router.push('/shipping')
  }

  return (
    <Layout>
      <section className="xl:px-24 sm:px-10 px-4 pt-5">
        <div className=" grid  md:grid-cols-5 border  border-gray-200">
          <div className=" md:col-span-3 border-r  border-gray-200">
            <CartItem />
          </div>
          <div className=" md:col-span-2 py-2 px-4">
            <ul className=" border rounded divide-y">
              <CartDetails></CartDetails>
              <li>
                <button
                  className=" p-3 w-full bg-yellow-500 bg-opacity-80 rounded text-lg text-white font-bold uppercase hover:bg-yellow-600 transition duration-200 "
                  onClick={checkoutHandler}
                >
                  Check Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
