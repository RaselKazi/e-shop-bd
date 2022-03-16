/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import ProductCard from '../../components/Product/ProductCard'
import { IProduct } from '../../type/product.model.type'
import { Store } from '../../utils/Store'
import CompareItem from '../../utils/ui/CompareItem'

export default function compare() {
  const { state, dispatch } = useContext(Store)
  const router = useRouter()

  useEffect(() => {
    if (state.compareCartItems.length < 2) {
      router.push('/')
    }
  }, [])

  return (
    <Layout>
      <main>
        <section className="xl:px-24 sm:px-10 px-4 pt-5">
          <h2 className="  text-3xl capitalize">products compare</h2>
          <div className=" flex w-full justify-between">
            {state.compareCartItems.map((Data: IProduct, i: number) => (
              <div key={Data._id} className="w-full ">
                <div className=" flex justify-center w-full  lg:w-5/6  mx-2 py-4 lg:mx-4">
                  <div className="w-full">
                    <ProductCard productData={Data} />
                  </div>
                </div>

                <CompareItem index={i} title="product name" data={Data.name} />
                <CompareItem index={i} title=" Brand name" data={Data.brand} />
                <CompareItem
                  index={i}
                  title="product price"
                  data={Data.price}
                />
                <CompareItem index={i} title="product size" data={Data.size} />
                <CompareItem
                  index={i}
                  title="product description"
                  data={Data.description}
                />
              </div>
            ))}

            {state.compareCartItems.length < 1 && (
              <div className="w-full  border-2 border-gray-200  rounded-md">
                <div className="  w-full  lg:w-5/6  mx-2 py-4 lg:mx-4">
                  <div className="w-full h-96 flex justify-center items-center">
                    <button
                      className="py-2 px-4 border-2 border-gray-400  rounded-md hover:bg-yellow-500
                     hover:text-gray-100 bg-gray-200 transition duration-200 text-lg font-medium capitalize "
                    >
                      Add product
                    </button>
                  </div>
                </div>
                <div className=" h-40 -m-1"></div>
                {/* <CompareItem index={2} title="product name" data="--" />
                <CompareItem index={2} title=" Brand name" data="--" />
                <CompareItem index={2} title="product price" data="--" />
                <CompareItem index={2} title="product size" data="--" />
                <CompareItem index={2} title="product description" data="--" /> */}
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  )
}
