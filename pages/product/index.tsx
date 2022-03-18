import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Layout from '../../components/Layout/Layout'
import Sidebar from '../../components/Layout/Sidebar/Sidebar'

import MidProductCard from '../../components/Product/MidProductCard'
import ProductCard from '../../components/Product/ProductCard'
import dbConnect, { convertDocToObj } from '../../utils/dbConnect'
import Product from '../../models/productModel'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import {
  IProduct,
  IProductPageQuery,
  IProductQuery,
} from '../../type/product.model.type'

const PAGE_SIZE = 9
type IProductProps = {
  products: IProduct[]
  countProducts: number
  categories: string[]
  brands: string[]
  pages: number
}
function products(props: IProductProps) {
  const [tabs, setTabs] = useState('tabe')

  const router = useRouter()

  // const {
  //   query = 'all',
  //   category = 'all',
  //   brand = 'all',
  //   price = 'all',
  //   rating = 'all',
  //   sort = 'featured',
  // } = router.query
  const { products, countProducts, categories, brands, pages } = props

  const filterSearch = ({
    page,
    searchQuery,
    category,
    price,
    sort,
  }: IProductQuery) => {
    const path = router.pathname
    const { query } = router
    if (page) query.page = page
    if (searchQuery) query.searchQuery = searchQuery
    if (sort) query.sort = sort
    if (category) query.category = category
    if (price) query.price = price

    router.push({
      pathname: path,
      query: query,
    })
  }

  const sortHandler = (sort: string) => {
    filterSearch({ sort })
  }

  const handlePage = (data: { selected: number }) => {
    const pages: Number = data.selected + 1 // because page start from 0
    const page = pages.toString()

    filterSearch({ page })
  }

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
                      onClick={() => setTabs('tabs2')}
                    >
                      2
                    </button>

                    <button
                      className="p-1 px-3 text-white bg-gray-600 hover:bg-yellow-500 rounded-sm font-medium duration-300 focus:outline-none hidden lg:block"
                      onClick={() => setTabs('tabs')}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </button>

                    <button
                      className=" inline-block p-1 px-3 text-white bg-gray-600 hover:bg-yellow-500 rounded-sm font-medium duration-300 "
                      onClick={() => setTabs('tabs1')}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className=" flex items-center space-x-1 sm:mt-0 mt-5">
                    <div className="inline-block mr-2 font-bold">
                      <p>SORT BY: </p>
                    </div>

                    <select
                      className=" focus:outline-none border focus:border-gray-500 p-1 px-2"
                      onChange={(e) => sortHandler(e.target.value)}
                    >
                      <option value="featured">Featured Items</option>
                      <option value="newest">Newest Items</option>

                      <option value="alphaasc">A to Z</option>
                      <option value="alphadesc">Z to A</option>
                      <option value="toprated">By Review</option>
                      <option value="lowest">Price: Low to High</option>
                      <option value="highest">Price: High to Low</option>
                    </select>
                  </div>
                </div>
                {tabs === 'tabs1' ? (
                  <div className="grid gap-10 py-10 ">
                    {products.map((pro) => (
                      <div key={pro._id}>
                        <MidProductCard productData={pro} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className={`
                    grid gap-10 py-10 ${
                      tabs === 'tabs2'
                        ? 'sm:grid-cols-2 grid-cols-1'
                        : 'lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'
                    } `}
                  >
                    {products.map((pro) => (
                      <div key={pro._id}>
                        <ProductCard productData={pro} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* <!----Pagination----> */}

              <div className=" inline-flex items-center space-x-1 my-4">
                <ReactPaginate
                  previousLabel={'< previous'}
                  nextLabel={'next >'}
                  breakLabel={'...'}
                  pageCount={pages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePage}
                  containerClassName={'inline-flex items-center space-x-1 my-4'}
                  pageLinkClassName={'page-link'}
                  previousLinkClassName={'page-link'}
                  nextLinkClassName={'page-link'}
                  breakLinkClassName={'page-link'}
                  activeLinkClassName={'active-page'}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
export default dynamic(() => Promise.resolve(products), { ssr: false })

export async function getServerSideProps({ query }: IProductPageQuery) {
  await dbConnect()

  const pageSize = query.pageSize || PAGE_SIZE
  const page = query.page || 1
  const category = query.category || ''
  const brand = query.brand || ''
  const price = query.price || ''
  const rating = query.rating || ''
  const sort = query.sort || ''
  const searchQuery = query.query || ''

  const queryFilter =
    searchQuery && searchQuery !== 'all'
      ? {
          name: {
            $regex: searchQuery,
            $options: 'i',
          },
        }
      : {}
  const categoryFilter = category && category !== 'all' ? { category } : {}
  const brandFilter = brand && brand !== 'all' ? { brand } : {}
  const ratingFilter =
    rating && rating !== 'all'
      ? {
          rating: {
            $gte: Number(rating),
          },
        }
      : {}
  // 10-50
  const priceFilter =
    price && price !== '-'
      ? {
          price: {
            $gte: Number(price.split('-')[0]),
            $lte: Number(price.split('-')[1]),
          },
        }
      : {}

  const order =
    sort === 'featured'
      ? { isFeatured: -1 }
      : sort === 'lowest'
      ? { price: 1 }
      : sort === 'highest'
      ? { price: -1 }
      : sort === 'alphaasc'
      ? { name: 1 }
      : sort === 'alphadesc'
      ? { name: -1 }
      : sort === 'toprated'
      ? { rating: -1 }
      : sort === 'newest'
      ? { createdAt: -1 }
      : sort === 'Bestselling'
      ? { price: -1 }
      : { _id: -1 }

  const categories = await Product.find().distinct('category')
  const brands = await Product.find().distinct('brand')
  const productDocs = await Product.find(
    {
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...brandFilter,
      ...ratingFilter,
    },
    '-reviews'
  )
    .sort(order)
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .lean()

  const countProducts = await Product.countDocuments({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
    ...brandFilter,
    ...ratingFilter,
  })

  const products = productDocs.map(convertDocToObj)
  return {
    props: {
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
      categories,
      brands,
    },
  }
}
