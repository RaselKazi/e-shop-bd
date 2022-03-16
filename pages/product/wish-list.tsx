import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import ProductCard from '../../components/Product/ProductCard'
import { IProduct } from '../../type/product.model.type'
import { Store } from '../../utils/Store'

export default function WishList() {
  const { state, dispatch } = useContext(Store)
  return (
    <Layout>
      <main>
        <section className="xl:px-24 sm:px-10 px-4 pt-5">
          <h2 className="  text-3xl my-8 capitalize">wish lists</h2>
          <div className=" grid grid-cols-4 gap-10">
            {state.wishListItems.map((item: IProduct) => (
              <ProductCard key={item._id} productData={item} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
