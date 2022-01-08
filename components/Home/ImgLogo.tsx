import Image from 'next/image'
import React from 'react'
import logo from '../../public/images/b2.png'

function ImgLogo() {
  return (
    <div className=" relative" x-data="{hover:false}">
      {/* ---Owl carousel- */}
      <div className=" owl-carousel owl-carousel-05-01 border rounded p-8 mt-10 px-0">
        <div>
          <a href="shop.html">
            <Image
              className=" opacity-50 duration-200 hover:opacity-100"
              src="images/10.jpg"
              alt=""
              src={logo}
              layout="fixed"
              width={100}
              height={60}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ImgLogo
