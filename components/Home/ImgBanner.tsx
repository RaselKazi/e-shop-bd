import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ImgBannerProps = {
  imgLink: String
}
function ImgBanner({ imgLink }: ImgBannerProps) {
  return (
    <div className=" pt-10">
      <Link href="/">
        <a href="shop.html">
          <Image
            className="w-full duration-300 hover:opacity-80"
            alt="banner"
            src={`/../public/images/${imgLink}`}
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
