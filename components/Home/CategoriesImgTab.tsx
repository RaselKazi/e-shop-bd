import Image from 'next/image'
import React, { useContext, useState } from 'react'
import ProductCard from '../Product/ProductCard'
import { CategoriesImgList } from '../../data/ImageData'
import { Store } from '../../utils/Store'
import { useRouter } from 'next/router'

function CategoriesImgTab() {
  const [openCategories, setOpenCategories] = useState('')

  const { state, dispatch } = useContext(Store)
  const router = useRouter()
  const categoryHandler = (category: string) => {
    dispatch({ type: 'SAVE_FILTER_CATEGORY', payload: category })
    setOpenCategories(category)
    router.push(`/?category=${category.split(' ').join('')}`)
  }
  return (
    <div className="border rounded">
      <div className=" grid grid-cols-7 divide-x divide-y">
        {CategoriesImgList.map((item) => (
          <button
            key={item.title}
            className={`hover:bg-gray-100 text-center p-2 md:py-4 md:px-6 relative group ${
              openCategories === item.title && 'bg-gray-100'
            }`}
            onClick={() => {
              categoryHandler(item.title)
            }}
          >
            <Image
              className=""
              alt=""
              src={item.img}
              layout="responsive"
              width={100}
              height={50}
            />
            <h5 className=" text-gray-500 font-medium hidden sm:block">
              {item.title}
            </h5>
            {openCategories === item.title && (
              <div className="absolute -bottom-2 border-t-0 border-l-0 bg-gray-100 left-0 right-0 m-auto h-4 w-4 transform rotate-45 border "></div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoriesImgTab
