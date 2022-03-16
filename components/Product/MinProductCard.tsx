import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import product from '../../public/images/2__85707.1528614702.jpg'
import { Store } from '../../utils/Store'
import RatingStar from '../../utils/ui/RatingStar'
import 'react-toastify/dist/ReactToastify.css'
import { IProduct } from '../../type/product.model.type'

type ProductCardProps = { productData: IProduct }

function MinProductCard({ productData }: ProductCardProps) {
  const { state, dispatch } = useContext(Store)

  const AddToCart = async (product: IProduct) => {
    const existItem = state.cart.cartItems.find(
      (x: { _id: string }) => x._id === product._id
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/product/${product._id}`)
    if (data.countInStock < quantity) {
      toast.error('🛒 Sorry. Product is out of stock')

      return
    }
    toast('🛒 Add to Cart a Product')
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
  }

  const AddToWish = async (product: IProduct): Promise<void> => {
    const existItem = state.wishListItems.find(
      (x: { _id: String }) => x._id === product._id
    )
    if (existItem) {
      toast('🛒 Product exist')
    } else {
      toast('🛒 Add to Wish Lists')
      dispatch({ type: 'WISH_LIST_ADD_ITEM', payload: product })
    }
  }
  const AddToCompare = async (product: IProduct): Promise<void> => {
    const existItem = state.compareCartItems.find(
      (x: { _id: String }) => x._id === product._id
    )
    if (existItem) {
      toast('🛒 Product exist')
    } else if (state.compareCartItems.length > 3) {
      toast('🛒 Compare Cart is full')
    } else {
      toast('🛒 Add to CompareCart a Product')
      dispatch({ type: 'COMPARE_CART_ADD_ITEM', payload: product })
    }
  }
  return (
    <div className=" group md:flex xl:items-center py-2">
      <div className="md:w-2/5 w-full mr-4 relative">
        <Link href={`product/${productData._id}`} passHref>
          <Image
            className="mx-auto cursor-pointer"
            alt=""
            src={productData.images[0].url}
            layout="responsive"
            width={190}
            height={170}
          />
        </Link>

        {/* <!--bages---> */}

        {productData.discount > 0 && (
          <div className=" absolute top-0 right-0 text-base font-bold text-white bg-red-600 h-7 w-12 flex items-center justify-center rounded">
            <span>{`- ${productData.discount}%`}</span>
          </div>
        )}
      </div>

      <div className="py-2">
        <Link href={`product/${productData._id}`}>
          <a className=" text-gray-800 ">{productData.name}</a>
        </Link>
        {/* <!--Rating--> */}
        <div className=" flex items-center space-x-1 py-1 ">
          <RatingStar value={productData.ratings} />
        </div>
        {/* <!--Price--> */}
        <div className=" flex items-center my-2">
          <span className=" text-yellow-500 text-md font-bold mr-4">
            {`$${
              productData.price -
              (productData.price * productData.discount) / 100
            }`}
          </span>
          {productData.discount > 0 && (
            <span className=" text-gray-500 text-sm">
              <del>{`$${productData.price}`}</del>
            </span>
          )}
        </div>

        <div className="xl:flex md:block flex items-center space-x-1">
          <button
            className="flex items-center uppercase text-white hover:bg-yellow-500 duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 rounded whitespace-nowrap"
            onClick={() => AddToCart(productData)}
          >
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </span>
            <span>Add to Cart</span>
          </button>

          <div className="flex justify-center xl:pt-0 md:pt-2 pt-0 items-center space-x-1">
            <button
              className="group-hover:opacity-100  opacity-0  text-white hover:bg-yellow-500 duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 rounded"
              onClick={() => AddToWish(productData)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              className="group-hover:opacity-100  opacity-0 text-white hover:bg-yellow-500 duration-100 transition delay-100 bg-black bg-opacity-60 text-xs font-medium p-2 rounded hidden md:block"
              onClick={() => AddToCompare(productData)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer limit={2} />
    </div>
  )
}

export default MinProductCard
