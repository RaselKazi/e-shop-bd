import React, { useContext, useState } from 'react'
import SocialItem from '../Contact/SocialItem'
import ProductColor from './ProductColor'
import SizeChartModal from './SizeChartModal'
import { SizeList } from '../../data/CategoriesData'
import RatingStar from '../../utils/ui/RatingStar'
import { Store } from '../../utils/Store'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BrandIcon from '../Layout/Footer/BrandIcon'
import ReasonsIcon from '../Layout/Footer/ReasonsIcon'

function ProductCardDetails({ productData }) {
  const [openModal, setOpenModal] = useState(false)
  const [productQuantity, setProductQuantity] = useState(0)
  const { state, dispatch } = useContext(Store)

  const addToCartHandler = async (product: { _id: String }) => {
    const existItem = state.cart.cartItems.find(
      (x: { _id: String }) => x._id === product._id
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/product/${product._id}`)
    if (data.countInStock < quantity) {
      toast.error('🛒 Sorry. Product is out of stock')
      return
    }
    toast('🛒 Add to Cart a Product')
    if (productQuantity >= 1) {
      dispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...product, quantity: productQuantity },
      })
    } else {
      dispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...product, quantity },
      })
    }
  }

  return (
    <div>
      <div>
        <h3 className=" text-2xl font-bold tracking-tighter text-gray-700">
          {productData.name}
        </h3>
        {/* --Review- */}
        <div className=" flex items-center">
          {/* --Rating-- */}
          <div className=" flex items-center space-x-1 py-5">
            <RatingStar value={productData.ratings} />
          </div>

          <div className=" px-4 text-gray-500">
            <span>{productData.ratings === 0 ? '(No reviews yet)' : ''}</span>
          </div>
        </div>
        {/* --Price- */}
        <div className=" flex items-center">
          <span className=" text-yellow-500 text-2xl font-bold mr-3">
            {`$${
              productData.price -
              (productData.price * productData.discount) / 100
            }`}
          </span>
          {productData.discount > 0 && (
            <span className=" text-gray-500 text-lg">
              <del>{`$${productData.price}`}</del>
            </span>
          )}
        </div>
      </div>
      {/* -----Size Chart------ */}
      <div x-data="{modal:false}" className=" my-4">
        <button
          onClick={() => {
            setOpenModal(true)
          }}
          className=" flex items-center text-gray-700 duration-300 font-bold hover:text-yellow-500"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-4 h-4 mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
            </svg>
          </span>
          <span className="shadow-2xl"> Size Chart</span>
        </button>
        {/* ----modal---- */}

        {openModal && (
          <div className="z-50  bg-black bg-opacity-70 md:overflow-hidden overflow-y-auto fixed left-0 top-0 w-full h-full flex justify-center items-center">
            <SizeChartModal OpenModal={setOpenModal}></SizeChartModal>
          </div>
        )}
      </div>
      {/* ------Brand Details---- */}
      <div className=" grid grid-cols-2 text-sm font-medium tracking-tighter text-gray-500 gap-2 border-b pb-5">
        <span>Brand</span>
        <span>{productData.brand}</span>
        <span>Condition:</span>
        <span>New</span>
      </div>
      {/* ---size-- */}
      <div className="text-gray-500 my-4">
        <label className="">
          Size:<small className=" ml-3  text-gray-400">Required</small>
        </label>
        <select
          className=" block w-full my-2 border focus:outline-none p-1 focus:border-gray-500 rounded text-sm font-medium"
          required
        >
          {SizeList.map((List) => (
            <option className=" text-slate-400" value={List}>
              {List}
            </option>
          ))}
        </select>
      </div>
      {/* -----color---- */}
      <div className="text-gray-500 my-4">
        <label>
          Color:<small className=" ml-3  text-gray-400">Required</small>
        </label>
        <ProductColor></ProductColor>
      </div>
      {/* // -Quantity- */}
      <div className="my-4">
        <label className="text-gray-500 block">Quantity:</label>
        <div className=" border rounded inline-block mt-4">
          <div className=" flex items-center divide-x">
            <div className=" ">
              <input
                type="number"
                className="appearance-none font-bold text-center outline-none"
                value={productQuantity}
                onChange={(e) => {
                  setProductQuantity(parseInt(`${e.target.value}`))
                }}
              />
            </div>

            <div className=" px-4 py-1">
              <button
                className="block"
                onClick={() => {
                  setProductQuantity((pvs) => pvs + 1)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <button
                onClick={() => {
                  setProductQuantity((pvs) => pvs - 1)
                }}
                disabled={productQuantity === 0}
                className="block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Button and Add to whitelist */}
      <div className=" flex items-center space-x-2 my-6">
        <button
          onClick={() => addToCartHandler(productData)}
          className="p-2 px-6 border-2 border-yellow-500 hover:border-yellow-600 duration-300 rounded-sm text-sm bg-yellow-500 text-white hover:bg-yellow-600"
        >
          Add to Cart
        </button>

        <div className="group relative inline-block">
          <button className=" p-2 px-6 border-2 border-yellow-500 hover:border-yellow-600 duration-300 rounded-sm text-sm bg-yellow-500 text-white hover:bg-yellow-600 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div className="group-hover:block hidden ">
            <div className="absolute whitespace-nowrap -top-12 -right-28 bg-white border rounded px-3 p-1">
              <span>Add to Wish Lists</span>
            </div>
            <div className="absolute -top-5 right-3 bg-white h-3 w-3 transform rotate-45 border-t-0 border-l-0 border"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="p-2 px-6 border-2 border-yellow-500 hover:border-yellow-600 duration-300 rounded-sm text-sm bg-yellow-500 text-white hover:bg-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div className="group-hover:block hidden ">
            <div className="absolute whitespace-nowrap -top-12 -right-24 bg-white border rounded px-3 p-1">
              <span>Add to compare</span>
            </div>
            <div className="absolute -top-5 right-3 bg-white h-3 w-3 transform rotate-45 border-t-0 border-l-0 border"></div>
          </div>
        </div>
      </div>
      {/* ----Share--- */}
      <div className=" flex items-center">
        <SocialItem></SocialItem>
      </div>
      {/* FROM US */}
      <div className=" mt-10">
        <h4 className="font-bold tracking-tighter text-gray-700">
          4 GREAT REASONS TO BUY FROM US:
        </h4>

        <div className=" mt-4 mb-2">
          {/* <img className=" w-12 inline-block mr-4 hover:opacity-70 duration-300" src="images/reasons-1.png" alt=""> */}
          <ReasonsIcon />
        </div>

        <div className="pt-2">
          <BrandIcon />
        </div>
      </div>
      <ToastContainer limit={2} />
    </div>
  )
}

export default ProductCardDetails
