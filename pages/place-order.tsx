import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import CartDetails from '../components/Cart/CartDetails'
import CartItem from '../components/Cart/CartItem'
import Layout from '../components/Layout/Layout'
import Cookies from 'js-cookie'
import { getError } from '../utils/error'
import { Store } from '../utils/Store'
import CheckoutWizard from '../utils/ui/CheckoutWizard'
import List from '../utils/ui/List'
import TextAndSubtext from '../utils/ui/TextAndSubtext'
import 'react-toastify/dist/ReactToastify.css'
import { IProduct } from '../type/product.model.type'
export default function placeOlder() {
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const {
    userInfo,
    cart: { cartItems, shippingAddress, paymentMethod },
  } = state

  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment')
    }
    if (cartItems.length === 0) {
      router.push('/cart')
    }
  }, [])
  const round2 = (num: number) => Math.round(num * 100 + Number.EPSILON) / 100 // 123.456 => 123.46
  const itemsPrice = round2(
    cartItems.reduce(
      (a: number, c: { price: number; quantity: number }) =>
        a + c.price * c.quantity,
      0
    )
  )
  const afterDiscountPrice = round2(
    cartItems.reduce(
      (a: number, c: { price: number; discount: number; quantity: number }) => {
        const discountPrice = c.price - (c.price * c.discount) / 100
        return a + discountPrice * c.quantity
      },
      0
    )
  )
  const shippingPrice = afterDiscountPrice > 200 ? 0 : 15
  const taxPrice = round2(afterDiscountPrice * 0.15)
  const totalPrice = round2(afterDiscountPrice + shippingPrice + taxPrice)

  //modify cartItems
  const cartItem = cartItems.map((c: IProduct) => {
    return {
      productId: c._id,
      name: c.name,
      quantity: c.quantity,
      price: c.price,
      discount: c.discount,
      image: c.images[0].url,
    }
  })

  const placeOrderHandler = async () => {
    try {
      const { data } = await axios.post(
        '/api/orders',
        {
          orderItems: cartItem,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          shippingPrice,
          taxPrice,
          totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      )
      dispatch({ type: 'CART_CLEAR' })
      Cookies.remove('cartItems')
      toast.success('place order successfully')
      router.push('/cart')
    } catch (err) {
      toast.error(getError(err))
    }
  }

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
        <div className=" grid  md:grid-cols-5 border  border-gray-200">
          <div className=" md:col-span-3 border-r  border-gray-200">
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
          <div className=" md:col-span-2 py-2 px-4">
            <ul className=" border rounded divide-y">
              <CartDetails></CartDetails>

              <List Title="After Discount" Amount={afterDiscountPrice} />
              <List Title="Tax" Amount={taxPrice} />
              <List Title="Shipping:" Amount={shippingPrice} />
              <List Title="Total:" Amount={totalPrice} />

              <li>
                <button
                  className=" p-3 w-full bg-yellow-500 bg-opacity-80 rounded text-lg text-white font-bold uppercase hover:bg-yellow-600 transition duration-200 "
                  onClick={placeOrderHandler}
                >
                  Place Order
                </button>
              </li>
            </ul>
          </div>
        </div>
        <ToastContainer limit={2} />
      </section>
    </Layout>
  )
}
