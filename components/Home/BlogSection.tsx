import Image from 'next/image'
import React from 'react'
import { BlogItem } from '../../data/BlogData'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import blog from '../../public/images/10.jpg'

function BlogSection() {
  return (
    <section className="xl:px-24 sm:px-10 px-4 pt-10">
      <div>
        {/* ---Hero text--- */}
        <div>
          <a className=" font-bold border-b-2 border-yellow-500 inline-block pb-1">
            LATEST BLOG
          </a>
        </div>
        {/* Blog carousel */}
        <div
          id="owl-carousel-06"
          className=" owl-carousel py-7 owl-theme border-t-2 border-gray-100"
        >
          {/* <!-------001----------> */}
          <Swiper
            navigation={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              '640': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '768': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '1024': {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {BlogItem.map((item, i) => (
              <SwiperSlide key={i}>
                <div>
                  <Image
                    className=" rounded hover:opacity-80"
                    alt=""
                    src={blog}
                    layout="responsive"
                    width={300}
                    height={250}
                  />

                  <div className="my-3">
                    <div className=" group-hover:text-yellow-500  font-medium ">
                      {item.title}
                    </div>
                    <div className=" flex items-center mt-2">
                      <div className=" flex items-center text-gray-400 font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-person-fill h-4 w-4 mr-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <span className=" text-sm">{item.author}</span>
                      </div>

                      <div className="ml-6 flex items-center text-gray-400 font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-clock-fill h-3 w-3 mr-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        </svg>
                        <span className=" text-sm">{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=" "></div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
