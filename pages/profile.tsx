import Image from 'next/image'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import Layout from '../components/Layout/Layout'
import coverImg from '../public/images/slide1-850x392.webp'
import profileImg from '../public/images/10.jpg'
import TabList from '../utils/ui/TabList'
import OrderHistory from '../components/Profile/OrderHistory'
import ShippingAddress from '../components/Profile/ShippingAddress'
import OrderStatus from '../components/Profile/OrderStatus'
import { Store } from '../utils/Store'
import { useRouter } from 'next/router'
import axios from 'axios'
import { getError } from '../utils/error'
import { IOrder } from '../type/order.model.type'

export default function profile() {
  const [tabs, setTabs] = useState('Order Status')

  const router = useRouter()
  const { state } = useContext(Store)
  const { userInfo } = state

  const [data, setData] = useState([])

  useEffect(() => {
    if (!userInfo) {
      router.push('/login')
    } else {
      const fetchData = async () => {
        try {
          const result = await axios.get(`/api/orders/${userInfo.id}`, {
            headers: { authorization: `Bearer ${userInfo.token}` },
          })
          setData(result.data)
        } catch (err) {}
      }
      fetchData()
    }
  }, [])

  return (
    <Layout>
      <section className="xl:px-24 sm:px-10 px-4 pt-10">
        <div className=" min-h-screen ">
          {/* profile image section */}
          <div className="w-full h-1/4">
            <div className="relative w-full ">
              <Image
                className=" z-0 rounded hover:opacity-80"
                alt=""
                src={coverImg}
                layout="responsive"
                width={900}
                height={200}
              />
              <div className="absolute top-1/2 left-10 w-1/5 h-1/3">
                <div className=" relative group rounded-full border-4 md:border-8 border-gray-300  bg-slate-500 overflow-hidden">
                  <div className="  group-hover:bottom-0 z-10 absolute -bottom-10 left-0 h-6 md:h-10 w-full bg-yellow-500 transition duration-400 text-center flex items-center justify-center">
                    <input className=" hidden" id="profile" type="file" />
                    <label htmlFor="profile">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" text-center text-gray-100 md:h-10 h-6 md:w-10 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </label>
                  </div>
                  <Image
                    className=" -z-0 rounded-full hover:opacity-80 bg-slate-500"
                    alt=""
                    src={profileImg}
                    layout="responsive"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center w-full border border-gray-300">
              <div className=" py-8">
                <h1 className=" capitalize font-bold  text-xl py-1 text-gray-800">
                  {userInfo?.name}
                </h1>
                <p className="text-lg text-gray-600 lg:mb-12">
                  {userInfo?.email}
                </p>
              </div>
            </div>
          </div>
          {/* profile Details section */}

          <div className=" grid grid-cols-3 md:grid-cols-4 border border-gray-300 ">
            <div className=" col-span-1 border-gray-300 border-r hidden md:block"></div>
            <div className="col-span-3 sm:pb-5 pb-2">
              <div className=" bg-gray-100">
                <ul className="flex flex-col md:flex-row text-center md:text-left">
                  <TabList title="Order Status" handelTab={setTabs} />
                  <TabList title="Shipping Address" handelTab={setTabs} />
                  <TabList title="Order History" handelTab={setTabs} />
                </ul>
              </div>
              <div className=" sm:p-5 p-2">
                {tabs === 'Shipping Address' ? (
                  <ShippingAddress />
                ) : tabs === 'Order History' ? (
                  <OrderHistory orderData={data} />
                ) : (
                  <OrderStatus orderData={data} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
