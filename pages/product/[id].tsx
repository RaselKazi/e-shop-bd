import React from 'react'
import Layout from '../../components/Layout/Layout'
import Sidebar from '../../components/Layout/Sidebar/Sidebar'
import ProductCardDetails from '../../components/Product/ProductCardDetails'
import ProductDetails from '../../components/Product/ProductDetails'
import ProductZoomCarousel from '../../components/Product/ProductZoomCarousel'
import dbConnect, { convertDocToObj } from '../../utils/dbConnect'
import Product from '../../models/productModel'
function ProductDetail({ product }) {
  return (
    <Layout>
      <main>
        <section className="xl:px-24 sm:px-10 px-4 pt-5">
          <div className="lg:grid lg:grid-cols-4 gap-8">
            <Sidebar></Sidebar>

            <div className="col-span-3">
              <div className="sm:grid sm:grid-cols-2 gap-8">
                <div>
                  <ProductZoomCarousel
                    images={product.images}
                  ></ProductZoomCarousel>
                </div>
                <div>
                  <ProductCardDetails
                    productData={product}
                  ></ProductCardDetails>
                </div>
              </div>

              <ProductDetails></ProductDetails>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default ProductDetail

export async function getServerSideProps({ params }) {
  const { id } = params

  await dbConnect()
  const product = await Product.findById(id).lean()

  return {
    props: {
      product: convertDocToObj(product),
    },
  }
}
