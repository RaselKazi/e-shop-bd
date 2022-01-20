import Image from 'next/image'
import React from 'react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { brandLogoImgList } from '../../data/ImageData'

function ImgLogo() {
  return (
    <div className=" relative">
      {/* ---Owl carousel- */}
      <div className="border rounded mt-10">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            '440': {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            '640': {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            '1024': {
              slidesPerView: 10,
              spaceBetween: 20,
            },
          }}
        >
          <div className="">
            {brandLogoImgList.map((img) => (
              <SwiperSlide>
                <a className="px-2">
                  <Image
                    className=" opacity-50 duration-200 hover:opacity-100"
                    src={`/../public/images/${img}`}
                    alt=""
                    layout="responsive"
                    width={100}
                    height={60}
                  />
                </a>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default ImgLogo
