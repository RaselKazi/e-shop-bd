import router from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Layout from '../components/Layout/Layout'
import { Store } from '../utils/Store'
import CheckoutWizard from '../utils/ui/CheckoutWizard'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function payment() {
  const [paymentMethod, setPaymentMethod] = useState('')
  const { state, dispatch } = useContext(Store)

  const {
    cart: { shippingAddress },
  } = state
  useEffect(() => {
    if (!shippingAddress.address) {
      router.push('/shipping')
    } else {
      setPaymentMethod(Cookies.get('paymentMethod') || '')
    }
  }, [])
  const submitHandler = (e) => {
    e.preventDefault()

    if (!paymentMethod) {
      toast.error('Payment method is required')
    } else {
      dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod })
      Cookies.set('paymentMethod', paymentMethod)
      router.push('/placeOlder')
    }
  }
  return (
    <Layout>
      <section className="xl:px-24 sm:px-10 px-4  w-screen h-full">
        <div className="py-10">
          <div className=" mx-auto">
            <CheckoutWizard step={2}></CheckoutWizard>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={submitHandler}>
            <div className=" ">
              <div className="flex flex-col">
                <div className=" flex justify-between items-center border-b border-gray-300 hover:bg-gray-200 px-4 rounded-md">
                  <label className="inline-flex items-center my-5">
                    <input
                      type="radio"
                      name="payment"
                      value="PayPal"
                      className=" h-8 w-8
                  "
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="ml-5 text-gray-700 text-2xl font-bold capitalize">
                      PayPal
                    </span>
                  </label>
                  <div className="text-yellow-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" flex justify-between items-center border-b border-gray-300 hover:bg-gray-200 px-4 rounded-md">
                  <label className="inline-flex items-center my-5">
                    <input
                      type="radio"
                      name="payment"
                      value="Stripe"
                      className=" h-8 w-8
                  "
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="ml-5 text-gray-700 text-2xl font-bold capitalize">
                      Stripe
                    </span>
                  </label>
                  <div className="text-yellow-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" flex justify-between items-center border-b border-gray-300 hover:bg-gray-200 px-4 rounded-md">
                  <label className="inline-flex items-center my-5">
                    <input
                      type="radio"
                      name="payment"
                      value="Cash"
                      className=" h-8 w-8
                  "
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="ml-5 text-gray-700 text-2xl font-bold capitalize">
                      Cash
                    </span>
                  </label>
                  <div className="text-yellow-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <button className=" p-3 my-6 w-full bg-yellow-500 bg-opacity-80 rounded text-lg text-white font-bold uppercase hover:bg-yellow-600 transition duration-200 ">
                submit
              </button>
              <button
                className=" p-3 w-full bg-gray-500 bg-opacity-80 rounded text-lg text-white font-bold uppercase hover:bg-gray-600 transition duration-200 "
                onClick={() => router.push('/shipping')}
              >
                Back
              </button>
            </div>
          </form>
        </div>
        <ToastContainer theme="dark" limit={2} />
      </section>
    </Layout>
  )
}
