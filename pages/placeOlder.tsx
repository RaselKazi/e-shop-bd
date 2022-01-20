import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import CartDetails from '../components/Cart/CartDetails'
import CartItem from '../components/Cart/CartItem'
import Layout from '../components/Layout/Layout'
import { Store } from '../utils/Store'
import CheckoutWizard from '../utils/ui/CheckoutWizard'
import List from '../utils/ui/List'
import TextAndSubtext from '../utils/ui/TextAndSubtext'

export default function placeOlder() {
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const {
    cart: { cartItems, shippingAddress, paymentMethod },
  } = state

  console.log(typeof shippingAddress)
  console.log(shippingAddress)
  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100 // 123.456 => 123.46
  const itemsPrice = round2(
    cartItems.reduce(
      (a: number, c: { price: number; quantity: number }) =>
        a + c.price * c.quantity,
      0
    )
  )
  const shippingPrice = itemsPrice > 200 ? 0 : 15
  const taxPrice = round2(itemsPrice * 0.15)
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice)
  return (
    <Layout>
      <section className="xl:px-24 sm:px-10 px-4 pt-5">
        <div className="py-12">
          <div className=" mx-auto">
            <CheckoutWizard step={3}></CheckoutWizard>
          </div>
        </div>
      </section>
      <section className="xl:px-24 sm:px-10 px-4 pt-5">
        <div className=" grid  grid-cols-5 border  border-gray-200">
          <div className=" col-span-3 border-r  border-gray-200">
            <div className="bg-gray-200 border-b-2 border-gray-300  w-full">
              <div className=" grid grid-cols-2 ">
                <div className="">
                  <TextAndSubtext
                    Text="fullName"
                    Subtext={shippingAddress.fullName}
                  />
                  <TextAndSubtext Text="city" Subtext={shippingAddress.city} />
                  <TextAndSubtext
                    Text="country"
                    Subtext={shippingAddress.country}
                  />
                </div>

                <div className="">
                  <TextAndSubtext
                    Text="ZipCode"
                    Subtext={shippingAddress.postalCode}
                  />
                  <TextAndSubtext Text="name" Subtext="racel kazi" />
                  <TextAndSubtext Text="payment" Subtext={paymentMethod} />
                </div>
              </div>
              <TextAndSubtext
                Text="Address"
                Subtext={shippingAddress.address}
              />
            </div>
            <CartItem />
          </div>
          <div className=" col-span-2 py-2 px-4">
            <ul className=" border rounded divide-y">
              <CartDetails></CartDetails>

              <List Title="Tax" Amount={taxPrice} />
              <List Title="Shipping:" Amount={shippingPrice} />
              <List Title="Total:" Amount={totalPrice} />

              <li>
                <button className=" p-3 w-full bg-yellow-500 bg-opacity-80 rounded text-lg text-white font-bold uppercase hover:bg-yellow-600 transition duration-200 ">
                  submit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
