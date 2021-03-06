import Image from 'next/image'
import React from 'react'

import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import CartProductCard from '../Product/CartProductCard'
import { IProduct } from '../../type/product.model.type'
type ProductSectionProps = { productData: IProduct[] }
function NewProductSection({ productData }: ProductSectionProps) {
  return (
    <div className=" relative py-2 mx-3 border-t-2">
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
          {productData.slice(0, 4).map((pro) => (
            <div key={pro._id}>
              <CartProductCard CartData={pro} />
            </div>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {productData.slice(4, 8).map((pro) => (
            <div key={pro._id}>
              <CartProductCard CartData={pro} />
            </div>
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default NewProductSection
