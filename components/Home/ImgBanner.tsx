import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import banner from '../../public/images/bn4.webp'

function ImgBanner() {
  return (
    <div className=" pt-10">
      <Link href="/">
        <a href="shop.html">
          <Image
            className="w-full duration-300 hover:opacity-80"
            alt="banner"
            src={banner}
            layout="responsive"
            width={800}
            height={200}
          />
        </a>
      </Link>
    </div>
  )
}

export default ImgBanner
