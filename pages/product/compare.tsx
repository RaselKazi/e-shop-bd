import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import ProductCard from '../../components/Product/ProductCard'
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
  console.log(state.compareCartItems)
  return (
    <Layout>
      <main>
        <section className="xl:px-24 sm:px-10 px-4 pt-5">
          <h2 className="  text-3xl capitalize">products compare</h2>
          <div className=" flex w-full justify-between">
            {state.compareCartItems.map((Data, i) => (
              <div className="w-full ">
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
          </div>
        </section>
      </main>
    </Layout>
  )
}
