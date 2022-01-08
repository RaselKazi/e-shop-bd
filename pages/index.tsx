import type { ReactElement } from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import BlogSection from '../components/Home/BlogSection'
import ImgLogo from '../components/Home/ImgLogo'
import NewProductSection from '../components/Home/NewProductSection'
import ImgBanner from '../components/Home/ImgBanner'
import CategoriesImgTab from '../components/Home/CategoriesImgTab'
import MaxProductCard from '../components/Product/MaxProductCard'
import MidProductCard from '../components/Product/MidProductCard'
import CategoriesCard from '../components/Home/CategoriesCard'
import Tag from '../components/Tag'
import MinProductCard from '../components/Product/MinProductCard'

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="xl:px-24 sm:px-10 px-4 pt-10">
        <div className=" lg:grid hidden grid-cols-4  divide-x  divide-gray-200 border rounded mt-6 p-4 px-0">
          <CategoriesCard></CategoriesCard>
        </div>
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
                  <MinProductCard></MinProductCard>
                  <MinProductCard></MinProductCard>
                  <MinProductCard></MinProductCard>
                  <MinProductCard></MinProductCard>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ImgBanner></ImgBanner>
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
          <MaxProductCard></MaxProductCard>
          <div className="col-span-2">
            <MidProductCard></MidProductCard>
            <MidProductCard></MidProductCard>
          </div>
        </div>
        <div className=" md:grid md:grid-cols-2 gap-8 pt-10">
          <div className="mb-6 md:mb-0">
            <ImgBanner></ImgBanner>
          </div>
          <ImgBanner></ImgBanner>
        </div>
      </section>
      <section className="xl:px-24 sm:px-10 px-4 pt-10 overflow-hidden">
        <ImgBanner></ImgBanner>
        <CategoriesImgTab></CategoriesImgTab>
      </section>
      <section className="xl:px-24 sm:px-10 px-4 pt-10 overflow-hidden">
        <NewProductSection></NewProductSection>
        <ImgLogo></ImgLogo>
      </section>

      <BlogSection></BlogSection>
    </Layout>
  )
}

export default Home
