import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Sidebar from '../../components/Layout/Sidebar/Sidebar'

import MidProductCard from '../../components/Product/MidProductCard'
import ProductCard from '../../components/Product/ProductCard'
import dbConnect, { convertDocToObj } from '../../utils/dbConnect'
import Product from '../../models/productModel'
function products({ allProducts }) {
  const [tabe, setTabe] = useState('tabe')
  return (
    <Layout>
      <main>
        <section className="xl:px-24 sm:px-10 px-4 pt-5">
          <div className="lg:grid lg:grid-cols-4 gap-8">
            <Sidebar></Sidebar>

            <div className=" col-span-3">
              <div>
                {/* <!--------Button-----------> */}
                <div className=" sm:flex items-center justify-between">
                  <div className=" flex items-center space-x-1">
                    <div className="inline-block mr-2">
                      <p>View as: </p>
                    </div>

                    <button
                      className=" inline-block p-1 px-3 text-white bg-gray-600 hover:bg-yellow-500 rounded-sm font-medium duration-300 focus:outline-none"
                      onClick={() => setTabe('tabe2')}
                    >
                      2
                    </button>

                    <button
                      className="p-1 px-3 text-white bg-gray-600 hover:bg-yellow-500 rounded-sm font-medium duration-300 focus:outline-none hidden lg:block"
                      onClick={() => setTabe('tabe')}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </button>

                    <button
                      className=" inline-block p-1 px-3 text-white bg-gray-600 hover:bg-yellow-500 rounded-sm font-medium duration-300 "
                      onClick={() => setTabe('tabe1')}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className=" flex items-center space-x-1 sm:mt-0 mt-5">
                    <div className="inline-block mr-2 font-bold">
                      <p>SORT BY: </p>
                    </div>

                    <select className=" focus:outline-none border focus:border-gray-500 p-1 px-2">
                      <option value="featured">Featured Items</option>
                      <option value="newest">Newest Items</option>
                      <option value="bestselling">Best Selling</option>
                      <option value="alphaasc">A to Z</option>
                      <option value="alphadesc">Z to A</option>
                      <option value="avgcustomerreview">By Review</option>
                      <option value="priceasc">Price: Ascending</option>
                      <option value="pricedesc">Price: Descending</option>
                    </select>
                  </div>
                </div>
                {tabe === 'tabe1' ? (
                  <div className="grid gap-10 py-10 ">
                    {allProducts.map((pro: any) => (
                      <MidProductCard productData={pro} />
                    ))}
                  </div>
                ) : (
                  <div
                    className={`
                    grid gap-10 py-10 ${
                      tabe === 'tabe2'
                        ? 'sm:grid-cols-2 grid-cols-1'
                        : 'lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'
                    } `}
                  >
                    {allProducts.map((pro: any) => (
                      <ProductCard productData={pro} />
                    ))}
                  </div>
                )}
              </div>

              {/* <!----Pagination----> */}
              <div className=" inline-flex items-center space-x-1 my-4">
                <button className="p-3 focus:outline-none py-1 bg-gray-100 border rounded font-medium bg-yellow-500 text-white duration-300">
                  1
                </button>
                <button className="p-3 focus:outline-none py-1 bg-gray-100 border rounded font-medium hover:bg-yellow-500 hover:text-white duration-300">
                  2
                </button>
                <button className="p-3 focus:outline-none py-1 bg-gray-100 border rounded font-medium hover:bg-yellow-500 hover:text-white duration-300">
                  3
                </button>
                <button className="p-3 focus:outline-none py-1 bg-gray-100 border rounded font-medium hover:bg-yellow-500 hover:text-white duration-300 flex items-center">
                  <span>Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default products

export async function getServerSideProps() {
  await dbConnect()

  const allProducts = await Product.find({}).lean().limit(20)

  return {
    props: {
      allProducts: allProducts.map(convertDocToObj),
    },
  }
}
