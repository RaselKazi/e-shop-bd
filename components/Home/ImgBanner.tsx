import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ImgBannerProps = {
  imgLink: string
}
function ImgBanner({ imgLink }: ImgBannerProps) {
  return (
    <div className=" pt-10">
      <Link href="/" passHref>
        <a>
          <Image
            className="w-full duration-300 hover:opacity-80"
            alt="banner"
            src={imgLink}
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
