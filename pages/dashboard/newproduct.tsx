import Image from 'next/image'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import DashboardLayout from '../../components/Layout/DashboardLayout'

import {
  categoriesOptionList,
  SizeList,
  ColorList,
} from '../../data/CategoriesData'
import 'react-toastify/dist/ReactToastify.css'
import Select from 'react-select'
type FormValues = {
  name: string
  description: string
  category: string
  size: string
  colors: string[]
  price: Number
  stock: Number
}

function newproduct() {
  const [images, setImages] = useState([])
  const [imagesPreview, setImagesPreview] = useState([])
  const router = useRouter()

  const createProductImagesChange = (e: {
    target: { files: Iterable<unknown> | ArrayLike<unknown> }
  }) => {
    const files = Array.from(e.target.files)

    setImages([])
    setImagesPreview([])

    files.forEach((file) => {
      const reader = new FileReader()

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result])
          setImages((old) => [...old, reader.result])
        }
      }

      reader.readAsDataURL(file)
    })
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = async ({
    name,
    description,
    category,
    price,
    stock,
    size,
  }) => {
    try {
      const myForm = new FormData()

      myForm.set('name', name)
      myForm.set('price', price)
      myForm.set('description', description)
      myForm.set('category', category)
      myForm.set('stock', stock)
      myForm.set('size', size)

      images.forEach((image) => {
        myForm.append('images', image)
      })
      await axios.post('/api/admin/products', myForm, {
        headers: { 'Content-Type': 'application/json' },
      })
      toast.success('Wow hi')
    } catch (err) {
      toast.error(`${err}`)
    }
  }
  return (
    <DashboardLayout>
      <div className="flex flex-col w-full ">
        <div className="flex justify-center items-center my-10">
          <div className="border border-sky-800 bg-gray-900 rounded-lg py-10 px-12 text-gray-500">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid sm:grid-cols-2 gap-6 mb-5">
                <div>
                  <label className=" text-gray-200 text-sm font-bold ">
                    Name
                  </label>
                  <input
                    className={`border-2 
                    focus:text-sky-500 placeholder:italic placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800 focus:outline-none  ${
                      errors.name
                        ? 'border-red-800 focus:border-red-800'
                        : 'border-sky-800 focus:border-sky-400 '
                    }`}
                    type="text"
                    placeholder="Product name"
                    {...register('name', {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  {errors.name && (
                    <span className=" flex text-red-500 ">ty</span>
                  )}
                </div>

                <div>
                  <label className=" text-gray-200 text-sm font-bold ">
                    Price
                  </label>
                  <input
                    className={`appearance-none border-2 
                    focus:text-sky-500 placeholder:italic placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800  focus:bg-gray-800 focus:outline-none  ${
                      errors.price
                        ? 'border-red-800 focus:border-red-800'
                        : 'border-sky-800 focus:border-sky-400 '
                    }`}
                    type="number"
                    placeholder="Product name"
                    {...register('price', {
                      required: true,
                    })}
                  />
                  {errors.price && (
                    <span className=" flex text-red-500 ">price</span>
                  )}
                </div>
              </div>

              <div className=" grid sm:grid-cols-2 gap-6 mb-5">
                <div>
                  <label className=" text-gray-200 text-sm font-bold ">
                    Stock
                  </label>
                  <input
                    className={` appearance-none border-2 
                    focus:text-sky-500 placeholder:italic placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800  focus:bg-gray-800 focus:outline-none  ${
                      errors.stock
                        ? 'border-red-800 focus:border-red-800'
                        : 'border-sky-800 focus:border-sky-400 '
                    }`}
                    type="number"
                    placeholder="Product Stock"
                    {...register('stock', {
                      required: true,
                    })}
                  />
                  {errors.price && (
                    <span className=" flex text-red-500 ">Stock</span>
                  )}
                </div>
                <div>
                  <label className=" text-gray-200 text-sm font-bold ">
                    Categories
                  </label>
                  <select
                    className={`  py-2 border-2 
                    focus:text-sky-500 placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800  focus:bg-gray-800 focus:outline-none ${
                      errors.category
                        ? 'border-red-800 focus:border-red-800'
                        : 'border-sky-800 focus:border-sky-400 '
                    }`}
                    {...register('category')}
                  >
                    {categoriesOptionList.map((List) => (
                      <option className=" text-slate-400" value={List}>
                        {List}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-5">
                <div>
                  <label className="text-gray-200 text-sm font-bold">
                    Color <span className=" text-red-500">*</span>
                  </label>
                  <Select
                    defaultValue={[ColorList[2], ColorList[3]]}
                    isMulti
                    options={ColorList}
                    className=""
                    classNamePrefix="  
                   "
                    {...register('colors')}
                  />
                </div>
                <div>
                  <label className=" text-gray-200 text-sm font-bold ">
                    Size
                  </label>
                  <select
                    className={`  py-2 border-2 
                    focus:text-sky-500 placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800  focus:bg-gray-800 focus:outline-none ${
                      errors.size
                        ? 'border-red-800 focus:border-red-800'
                        : 'border-sky-800 focus:border-sky-400 '
                    }`}
                    {...register('size')}
                  >
                    {SizeList.map((List) => (
                      <option className=" text-slate-400" value={List}>
                        {List}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-5 flex justify-between items-center">
                <div className=" grid  grid-cols-6 gap-3">
                  {imagesPreview.map((image, index) => (
                    <Image
                      className=" mx-6 rounded hover:opacity-80"
                      alt="Product Preview"
                      key={index}
                      src={image}
                      layout="fixed"
                      width={40}
                      height={40}
                    />
                  ))}
                </div>
                <label className="block">
                  <span className="sr-only">photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={createProductImagesChange}
                    multiple
                    className="block w-full  file:transition file:duration-300 text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-l file:border-sky-400 file:text-sm file:font-semibold file:bg-sky-700 file:bg-opacity-25 file:text-sky-500 hover:file:text-white hover:file:bg-sky-900 focus:file:outline-none"
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className=" text-gray-200 text-sm font-bold ">
                  Messages
                </label>
                <textarea
                  className={`border-2 border-sky-800 placeholder-gray-500 placeholder:italic focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200   w-full resize-none  h-28 p-4 shadow rounded bg-gray-800 focus:outline-none ${
                    errors.description
                      ? 'border-red-800 focus:border-red-800'
                      : 'border-sky-800 focus:border-sky-400 '
                  }`}
                  placeholder="Product Description"
                  {...register('description', {
                    required: true,
                  })}
                ></textarea>
                {errors.price && (
                  <span className=" flex text-red-500 ">description</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full h-12 border hover:border-sky-400 hover:bg-sky-800  border-sky-500  bg-gray-900  px-7 rounded text-sm text-sky-400 hover:text-white font-medium duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" limit={2} />
    </DashboardLayout>
  )
}

export default newproduct
