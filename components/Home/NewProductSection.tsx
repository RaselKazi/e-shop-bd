import Image from 'next/image'
import React from 'react'

import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import CartProductCard from '../Product/CartProductCard'

function NewProductSection({ productData }) {
  return (
    <div className=" relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          {productData.map((pro: any) => (
            <CartProductCard CartData={pro} />
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {productData.map((pro: any) => (
            <CartProductCard CartData={pro} />
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default NewProductSection
