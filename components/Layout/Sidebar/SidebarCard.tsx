import Image from 'next/image'
import React from 'react'
import sidebarimg from '../../../public/images/ad1.jpg'
function SideberCard() {
  return (
    <div className=" mt-5 border rounded">
      <div className=" font-bold p-3 flex items-center bg-gray-200 bg-opacity-80 rounded">
        <span>CUSTOM CMS BLOCK</span>
      </div>

      <div className=" p-4">
        <Image
          className="w-full hover:opacity-80 duration-300"
          alt=""
          src={sidebarimg}
          layout="responsive"
          width={275}
          height={200}
        />

        <p className=" text-gray-500 text-sm py-6">
          Custom CMS block displayed at the left sidebar on the Catalog Page.
          Put your own content here: text, html, images, media... whatever you
          like.
        </p>

        <button className=" p-3 bg-gray-800 hover:bg-opacity-80 px-7 rounded text-sm text-white font-medium duration-300">
          Read More
        </button>
      </div>
    </div>
  )
}

export default SideberCard
