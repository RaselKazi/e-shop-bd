import { useContext, useState } from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import BlogSection from '../components/Home/BlogSection'
import ImgLogo from '../components/Home/ImgLogo'
import NewProductSection from '../components/Home/NewProductSection'
import ImgBanner from '../components/Home/ImgBanner'
import CategoriesImgTab from '../components/Home/CategoriesImgTab'

import MidProductCard from '../components/Product/MidProductCard'
import CategoriesCard from '../components/Home/CategoriesCard'
import Tag from '../components/Layout/Sidebar/Tag'
import MinProductCard from '../components/Product/MinProductCard'
import BannerCarousel from '../components/Home/BannerCarousel'

import SidebarCategories from '../components/Layout/Sidebar/SidebarCategories'
import dbConnect, { convertDocToObj } from '../utils/dbConnect'
import Product from '../models/productModel'
import ProductCard from '../components/Product/ProductCard'
import HeadLineText from '../utils/ui/HeadLineText'
import { Store } from '../utils/Store'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { IHomePageQuery, IProduct } from '../type/product.model.type'

interface IProductProps {
  allProducts: IProduct[]
  topProducts: IProduct[]
  productCategory: IProduct[]
  FeaturedProducts: IProduct[]
  NewArrivalsProducts: IProduct[]
  BestsellingProducts: IProduct[]
}
const Home = ({
  allProducts,
  topProducts,
  productCategory,
  FeaturedProducts,
  NewArrivalsProducts,
  BestsellingProducts,
}: IProductProps) => {
  const { state, dispatch } = useContext(Store)
  const [productTab, setProductTab] = useState('')
  const router = useRouter()
  return (
    <Layout>
      {/* Carousel and Categories section */}
      <section className="xl:px-24 sm:px-10 px-4 pt-10">
        <div className="lg:grid lg:grid-cols-5 gap-8 sm:border rounded sm:p-5 relative fakeLoader">
          <div className="hidden lg:block">
            <SidebarCategories></SidebarCategories>
          </div>
          <BannerCarousel></BannerCarousel>
        </div>

        <CategoriesCard></CategoriesCard>
      </section>

      {/* POPULAR TAGS and MinProductCard section */}
      <section className="xl:px-24 sm:px-10 px-4 pt-10">
        <div className="lg:grid lg:grid-cols-4 gap-8 overflow-hidden">
          <div className=" hidden lg:block">
            <div>
              <a className=" font-bold border-b-2 border-yellow-500 inline-block pb-1">
                POPULAR TAGS
              </a>
            </div>
            <Tag></Tag>
          </div>

          <div className=" lg:col-span-3">
            <div className=" sm:flex items-center justify-between">
              <a className=" font-bold border-b-2 border-yellow-500 inline-block pb-1 sm:ml-0 ml-4">
                FASHION
              </a>
              <div className="pt-2 sm:pt-0">
                <ul className="flex text-center sm:space-x-4">
                  <HeadLineText
                    productTab={productTab}
                    setProductTab={setProductTab}
                  />
                </ul>
              </div>
            </div>
            <div className=" border border-gray-200 rounded sm:p-5 p-2">
              <div className=" grid grid-cols-2 sm:gap-6 gap-2 divide-y">
                {topProducts.map((pro) => (
                  <div key={pro._id}>
                    <MinProductCard productData={pro} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ImgBanner imgLink="https://raw.githubusercontent.com/RaselKazi/e-shop-bd/main/public/images/bn4.webp"></ImgBanner>
      </section>
      {/* DEALS OF THE WEEK ProductCard section */}
      <section className="xl:px-24 sm:px-10 px-4 pt-10">
        <div>
          <a className=" font-bold border-b-2 border-yellow-500 inline-block pb-1">
            DEALS OF THE WEEK
          </a>
        </div>
        <div className=" md:grid md:grid-cols-3 border rounded">
          <MidProductCard productData={allProducts[0]} card="max" />
          <div className="col-span-2">
            {allProducts.slice(2, 4).map((pro) => (
              <div key={pro._id}>
                <MidProductCard productData={pro} />
              </div>
            ))}
          </div>
        </div>
        <div className=" md:grid md:grid-cols-2 gap-8 pt-10">
          <div className="mb-6 md:mb-0">
            <ImgBanner imgLink="https://raw.githubusercontent.com/RaselKazi/e-shop-bd/main/public/images/bn2.webp"></ImgBanner>
          </div>
          <ImgBanner imgLink="https://raw.githubusercontent.com/RaselKazi/e-shop-bd/main/public/images/bn3.webp"></ImgBanner>
        </div>
      </section>
      {/* New Arrivals ProductCard section */}
      <section className="xl:px-24 sm:px-10 px-4 pt-10 overflow-hidden">
        <CategoriesImgTab></CategoriesImgTab>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 pt-6">
          {productCategory.map((pro) => (
            <div key={pro._id}>
              <ProductCard productData={pro} />
            </div>
          ))}
        </div>

        <ImgBanner imgLink="https://raw.githubusercontent.com/RaselKazi/e-shop-bd/main/public/images/bn4.webp"></ImgBanner>
      </section>
      {/* Bestselling small ProductCard section */}
      <section className="xl:px-24 sm:px-10 px-4 pt-10 overflow-hidden">
        <div className=" border-gray-100 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  md:grid-cols-2">
          {/* carousel */}
          <div className=" ">
            <a className=" font-bold border-b-2 border-yellow-500 inline-block pb-1 ml-3">
              BEST SELLERS
            </a>

            <NewProductSection productData={BestsellingProducts} />
          </div>
          <div className=" ">
            <a className=" font-bold border-b-2 border-yellow-500 inline-block pb-1 ml-3">
              FEATURED PRODUCTS
            </a>

            <NewProductSection productData={FeaturedProducts} />
          </div>
          <div className=" ">
            <a className=" font-bold border-b-2 border-yellow-500 inline-block pb-1 ml-3">
              NEWS PRODUCTS
            </a>

            <NewProductSection productData={NewArrivalsProducts} />
          </div>
        </div>

        <ImgLogo></ImgLogo>
      </section>
      <BlogSection></BlogSection>
    </Layout>
  )
}
export default dynamic(() => Promise.resolve(Home), { ssr: false })

export async function getServerSideProps({ query }: IHomePageQuery) {
  await dbConnect()
  const category = query.category || ''
  const sort = query.sort || ''

  const categoryFilter = category && category !== 'all' ? { category } : {}
  const order =
    sort === 'Featured'
      ? { isFeatured: -1 }
      : sort === 'Bestselling'
      ? { price: -1 }
      : sort === 'TopReviewed'
      ? { rating: -1 }
      : sort === 'NewArrivals'
      ? { createdAt: -1 }
      : { _id: -1 }

  const allProducts = await Product.find({}).lean().limit(4)
  // const categories = await Product.find().distinct('category')
  const topProducts = await Product.find({}).sort(order).limit(4).lean()
  const FeaturedProducts = await Product.find({})
    .sort({ isFeatured: -1 })
    .limit(8)
    .lean()
  const NewArrivalsProducts = await Product.find({})
    .sort({ createdAt: -1 })
    .limit(8)
    .lean()
  const BestsellingProducts = await Product.find({})
    .sort({ price: -1 })
    .limit(8)
    .lean()

  const productCategory = await Product.find({
    ...categoryFilter,
  })
    .limit(4)
    .lean()

  return {
    props: {
      allProducts: allProducts.map(convertDocToObj),
      topProducts: topProducts.map(convertDocToObj),
      FeaturedProducts: FeaturedProducts.map(convertDocToObj),
      NewArrivalsProducts: NewArrivalsProducts.map(convertDocToObj),
      BestsellingProducts: BestsellingProducts.map(convertDocToObj),
      productCategory: productCategory.map(convertDocToObj),
    },
  }
}
