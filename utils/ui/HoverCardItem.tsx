import axios from 'axios'
import React, { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { cardHoverItem } from '../../data/ProductCardData'
import { Store } from '../Store'
import 'react-toastify/dist/ReactToastify.css'
type HoverCardItemProps = {
  productId?: String
}
export default function HoverCardItem({ productId }) {
  const [hoverEffect, setHoverEffect] = useState('')

  const { state, dispatch } = useContext(Store)
  const AddToCart = async (product: { _id: String }) => {
    const existItem = state.cart.cartItems.find(
      (x: { _id: String }) => x._id === product._id
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/product/${product._id}`)
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock')
      return
    }
    toast.success('Add to Cart a Product')
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
  }

  // const AddToWish = () => {
  //   console.log('hihihi')
  // }
  // const AddToCompare = () => {
  //   console.log('hihihi')
  // }
  // const QuickView = () => {
  //   console.log('hihihi')
  // }
  return (
    <div>
      <div className=" group-hover:block hidden transition duration-300 delay-700">
        <button
          className={`group text-white hover:bg-yellow-500 transition duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 my-2 rounded flex items-center  delay-700`}
          onMouseEnter={() => setHoverEffect('Add to Cart')}
          onMouseLeave={() => setHoverEffect('')}
          onClick={() => AddToCart(productId)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span
            className={` transition-all duration-300 ml-2 ${
              hoverEffect === 'Add to Cart' ? '' : 'hidden'
            }`}
          >
            Add to Cart
          </span>
        </button>
        <button
          className={`group text-white hover:bg-yellow-500 transition duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 my-2 rounded flex items-center  delay-700`}
          onMouseEnter={() => setHoverEffect('Add to Wish List')}
          onMouseLeave={() => setHoverEffect('')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
          <span
            className={` transition-all duration-300 ml-2 ${
              hoverEffect === 'Add to Wish List' ? '' : 'hidden'
            }`}
          >
            Add to Wish List
          </span>
        </button>
        <button
          className={`group text-white hover:bg-yellow-500 transition duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 my-2 rounded flex items-center  delay-700`}
          onMouseEnter={() => setHoverEffect('Add to Compare')}
          onMouseLeave={() => setHoverEffect('')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"
            />
          </svg>
          <span
            className={` transition-all duration-300 ml-2 ${
              hoverEffect === 'Add to Compare' ? '' : 'hidden'
            }`}
          >
            Add to Compare
          </span>
        </button>
        <button
          className={`group text-white hover:bg-yellow-500 transition duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 my-2 rounded flex items-center  delay-700`}
          onMouseEnter={() => setHoverEffect('Quick view')}
          onMouseLeave={() => setHoverEffect('')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span
            className={` transition-all duration-300 ml-2 ${
              hoverEffect === 'Quick view' ? '' : 'hidden'
            }`}
          >
            Quick view
          </span>
        </button>
      </div>

      <ToastContainer theme="dark" limit={2} />
    </div>
  )
}
