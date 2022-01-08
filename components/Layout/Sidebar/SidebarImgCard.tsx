import Image from 'next/image'
import React from 'react'
import sidebarimg from '../../../public/images/image-left.jpg'
function SideberImgCaed() {
  return (
    <div className=" mt-5 border rounded">
      <Image
        className="w-full hover:opacity-80 duration-300"
        alt=""
        src={sidebarimg}
        layout="fixed"
        width={305}
        height={400}
      />
    </div>
  )
}

export default SideberImgCaed
