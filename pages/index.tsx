import type { ReactElement } from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import BlogSection from '../components/Home/BlogSection'
import ImgLogo from '../components/Home/ImgLogo'
import NewProductSection from '../components/Home/NewProductSection'
import ImgBanner from '../components/Home/ImgBanner'
import CategoriesImgTab from '../components/Home/CategoriesImgTab'

import MidProductCard from '../components/Product/MidProductCard'
import CategoriesCard from '../components/Home/CategoriesCard'
import Tag from '../components/Tag'
import MinProductCard from '../components/Product/MinProductCard'
import BannerCarousel from '../components/Home/BannerCarousel'

import SidebarCategories from '../components/Layout/Sidebar/SidebarCategories'
import dbConnect, { convertDocToObj } from '../utils/dbConnect'
import Product from '../models/productModel'
import ProductCard from '../components/Product/ProductCard'
const Home: NextPage = ({ allProducts }) => {
  return (
    <Layout>
      <section className="xl:px-24 sm:px-10 px-4 pt-10">
        <div className="lg:grid lg:grid-cols-5 gap-8 sm:border rounded sm:p-5 relative fakeLoader">
          <div className="hidden lg:block">
            <SidebarCategories></SidebarCategories>
          </div>
          <BannerCarousel></BannerCarousel>
        </div>

        <CategoriesCard></CategoriesCard>
      </section>
      <section className="xl:px-24 sm:px-10 px-4 pt-10">
        <div className="lg:grid lg:grid-cols-4 gap-8 overflow-hidden">
          <div className=" hidden lg:block">
            <div>
              <a
                href="shop.html"
                className=" font-bold border-b-2 border-yellow-500 inline-block pb-1"
              >
                POPULAR TAGS
              </a>
            </div>
            <Tag></Tag>
          </div>

          <div x-data="{ tab:'tab1'}" className=" lg:col-span-3">
            <div className=" sm:flex items-center justify-between">
              <a
                href="shop.html"
                className=" font-bold border-b-2 border-yellow-500 inline-block pb-1 sm:ml-0 ml-4"
              >
                FASHION
              </a>
              <div className="pt-2 sm:pt-0">
                <ul className=" text-center sm:space-x-4">
                  <li className="group inline-block sm:m-0 m-1">
                    <a
                      className=" hover:text-yellow-500 text-gray-500 border-b-2 border-yellow-500"
                      href="shop.html"
                    >
                      Bestselling
                    </a>
                    <div className="  bg-yellow-500 duration-300 h-0.5 hover:w-full w-0 mx-auto -mb-0.5 mt-1 flex justify-center"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" border border-gray-200 rounded sm:p-5 p-2">
              <div className="owl-carousel owl-carousel-02">
                <div className=" grid grid-cols-2 sm:gap-6 gap-2 divide-y">
                  {allProducts.map((pro: any) => (
                    <MinProductCard productData={pro} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ImgBanner imgLink="bn1.png"></ImgBanner>
      </section>
      <section className="xl:px-24 sm:px-10 px-4 pt-10">
        <div>
          <a
            href="shop.html"
            className=" font-bold border-b-2 border-yellow-500 inline-block pb-1"
          >
            DEALS OF THE WEEK
          </a>
        </div>
        <div className=" md:grid md:grid-cols-3 border rounded">
          <MidProductCard productData={allProducts[0]} card="max" />
          <div className="col-span-2">
            {allProducts.slice(2, 4).map((pro: any) => (
              <MidProductCard productData={pro} />
            ))}
          </div>
        </div>
        <div className=" md:grid md:grid-cols-2 gap-8 pt-10">
          <div className="mb-6 md:mb-0">
            <ImgBanner imgLink="bn2.webp"></ImgBanner>
          </div>
          <ImgBanner imgLink="bn3.webp"></ImgBanner>
        </div>
      </section>
      <section className="xl:px-24 sm:px-10 px-4 pt-10 overflow-hidden">
        <CategoriesImgTab></CategoriesImgTab>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 pt-6">
          {allProducts.map((pro: any) => (
            <ProductCard productData={pro} />
          ))}
        </div>

        <ImgBanner imgLink="bn4.webp"></ImgBanner>
      </section>
      <section className="xl:px-24 sm:px-10 px-4 pt-10 overflow-hidden">
        <div>
          {/* -Hero text- */}
          <div>
            <a className=" font-bold border-b-2 border-yellow-500 inline-block pb-1">
              BEST SELLERS
            </a>
          </div>

          {/* carousel */}
          <div className=" py-7 border-t-2 border-gray-100 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  md:grid-cols-2">
            <NewProductSection productData={allProducts} />
            <NewProductSection productData={allProducts} />
            <NewProductSection productData={allProducts} />
          </div>
        </div>

        <ImgLogo></ImgLogo>
      </section>

      <BlogSection></BlogSection>
    </Layout>
  )
}

export default Home

export async function getServerSideProps() {
  await dbConnect()

  const allProducts = await Product.find({}).lean().limit(20)

  return {
    props: {
      allProducts: allProducts.map(convertDocToObj),
    },
  }
}
