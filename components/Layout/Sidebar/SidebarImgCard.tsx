import Image from 'next/image'
import React from 'react'
import sidebarImg from '../../../public/images/image-left.jpg'
function SidebarImgCard() {
  return (
    <div className=" mt-5 border rounded">
      <Image
        className="w-full hover:opacity-80 duration-300"
        alt=""
        src={sidebarImg}
        layout="responsive"
        width={305}
        height={400}
      />
    </div>
  )
}

export default SidebarImgCard
