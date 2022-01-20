import Image from 'next/image'
import React, { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import CarouselBigImg from './../../public/images/image-left.jpg'
import CarouselImg from './../../public/images/ad1.jpg'
function ProductZoomCarousel({ images }) {
  const [imgUrl, setImgUrl] = useState(`${images[0].url}`)
  return (
    <div>
      <div>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'Wrist',
              isFluidWidth: true,
              src: `${imgUrl}`,
            },
            largeImage: {
              src: `${imgUrl}`,
              width: 900,
              height: 1200,
            },
          }}
        />
      </div>

      <div className=" grid grid-cols-5 gap-2 cursor-pointer mt-4">
        {/* -------001--------- */}
        {images.map((img) => (
          <div
            className="border border-gray-300"
            onClick={() => setImgUrl(img.url)}
          >
            <Image
              className=" w-full"
              alt=""
              src={img.url}
              layout="responsive"
              width={85}
              height={85}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductZoomCarousel
