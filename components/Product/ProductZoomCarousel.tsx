import Image from 'next/image'
import React from 'react'
import CarouselBigImg from '../../public/images/2__85707.1528614702.jpg'
import CarouselImg from '../../public/images/2__85707.1528614702.jpg'
function ProductZoomCarousel() {
  return (
    <div>
      <div>
        <div className="cursor-zoomin">
          <Image
            className=" duration-500 w-full hover:opacity-0"
            alt=""
            src={CarouselBigImg}
            layout="fixed"
            width={500}
            height={450}
          />
        </div>
      </div>

      <div className=" grid grid-cols-5 gap-2 cursor-pointer mt-4">
        {/* -------001--------- */}
        <div className="border border-gray-300">
          <Image
            className=" w-full"
            alt=""
            src={CarouselImg}
            layout="fixed"
            width={86}
            height={90}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductZoomCarousel
