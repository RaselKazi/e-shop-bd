import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { Country, State } from 'country-state-city'
import Layout from '../components/Layout/Layout'
import CheckoutWizard from '../utils/ui/CheckoutWizard'
import { useRouter } from 'next/router'
import { Store } from '../utils/Store'

export type RegistrationFormFields = {
  fullName: string
  address: string
  city: string
  postalCode: Number
  country: string
  state: string
  phoneNumber: Number
}

export default function shipping() {
  const { state, dispatch } = useContext(Store)
  const {
    userInfo,
    cart: { shippingAddress, cartItems },
  } = state

  const [stateOfCountry, setStateOfCountry] = useState(
    shippingAddress.stateOfCountry
  )
  const [country, setCountry] = useState(shippingAddress.country)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>()
  const router = useRouter()

  useEffect(() => {
    if (!userInfo) {
      router.push('/login?redirect=/shipping')
    }
    if (cartItems.length === 0) {
      router.push('/cart')
    }
  }, [])

  const onSubmit = handleSubmit(
    ({ fullName, address, city, postalCode, phoneNumber }) => {
      dispatch({
        type: 'SAVE_SHIPPING_ADDRESS',
        payload: {
          fullName,
          address,
          city,
          postalCode,
          country,
          stateOfCountry,
          phoneNumber,
        },
      })
      Cookies.set(
        'shippingAddress',
        JSON.stringify({
          fullName,
          address,
          city,
          postalCode,
          country,
          stateOfCountry,
          phoneNumber,
        })
      )
      router.push('/payment')
    }
  )

  return (
    <Layout>
      <section className="xl:px-24 sm:px-10 px-4  w-screen h-full">
        <div className="py-10">
          <div className=" mx-auto">
            <CheckoutWizard step={1}></CheckoutWizard>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={onSubmit}>
            <div className=" flex flex-col">
              <div className="my-3">
                <input
                  value={shippingAddress.fullName}
                  type="text"
                  placeholder="Full Name"
                  className={` border-2 rounded-md w-full py-3 text-xl pl-6 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300   ${
                    errors.fullName
                      ? 'border-red-800 focus:border-red-800'
                      : 'border-gray-300 focus:border-sky-400 '
                  }`}
                  {...register('fullName', {
                    required: true,
                  })}
                />
                {errors.fullName && (
                  <span className=" flex text-red-500 ">Stock</span>
                )}
              </div>
              <div className="my-3">
                <input
                  value={shippingAddress.address}
                  type="text"
                  placeholder="Address"
                  className={` border-2 rounded-md w-full py-3 text-xl pl-6 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300   ${
                    errors.address
                      ? 'border-red-800 focus:border-red-800'
                      : 'border-gray-300 focus:border-sky-400 '
                  }`}
                  {...register('address', {
                    required: true,
                  })}
                />
                {errors.address && (
                  <span className=" flex text-red-500 ">Stock</span>
                )}
              </div>
              <div className="my-3">
                <input
                  value={shippingAddress.city}
                  type="text"
                  placeholder="City"
                  className={` border-2 rounded-md w-full py-3 text-xl pl-6 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300   ${
                    errors.city
                      ? 'border-red-800 focus:border-red-800'
                      : 'border-gray-300 focus:border-sky-400 '
                  }`}
                  {...register('city', {
                    required: true,
                  })}
                />
                {errors.city && (
                  <span className=" flex text-red-500 ">Stock</span>
                )}
              </div>

              <div className="my-3">
                <select
                  className=" border-2 rounded-md w-full py-3 text-xl  pl-6 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300 border-gray-300 focus:border-sky-400"
                  {...register('country', {
                    required: true,
                  })}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Country</option>
                  {Country &&
                    Country.getAllCountries().map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>

              {country && (
                <div className="my-3">
                  <select
                    className=" border-2 rounded-md w-full py-3 text-xl pl-6 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300 border-gray-300 focus:border-sky-400"
                    {...register('state', {
                      required: true,
                    })}
                    value={stateOfCountry}
                    onChange={(e) => setStateOfCountry(e.target.value)}
                  >
                    <option value="">State</option>
                    {State &&
                      State.getStatesOfCountry(country).map((item) => (
                        <option key={item.isoCode} value={item.isoCode}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
              )}
              <div className="my-3">
                <input
                  value={shippingAddress.postalCode}
                  type="number"
                  placeholder="Postal Code"
                  className={` border-2 rounded-md w-full py-3 text-xl pl-6 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300   ${
                    errors.postalCode
                      ? 'border-red-800 focus:border-red-800'
                      : 'border-gray-300 focus:border-sky-400 '
                  }`}
                  {...register('postalCode', {
                    required: true,
                  })}
                />
                {errors.postalCode && (
                  <span className=" flex text-red-500 ">Stock</span>
                )}
              </div>
              <div className="my-3">
                <input
                  type="number"
                  value={shippingAddress.phoneNumber}
                  placeholder="Phone Number"
                  className={` border-2 rounded-md w-full py-3 text-xl pl-6  text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300   ${
                    errors.phoneNumber
                      ? 'border-red-800 focus:border-red-800'
                      : 'border-gray-300 focus:border-sky-400 '
                  }`}
                  {...register('phoneNumber', {
                    required: true,
                  })}
                />
                {errors.phoneNumber && (
                  <span className=" flex text-red-500 ">Stock</span>
                )}
              </div>
              <button className=" p-3 w-full bg-yellow-500 bg-opacity-80 rounded text-lg text-white font-bold uppercase hover:bg-yellow-600 transition duration-200 ">
                submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
