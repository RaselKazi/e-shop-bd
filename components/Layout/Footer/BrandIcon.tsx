import Image from 'next/image'
import React from 'react'
import brand from '../../../public/images/pay-1.webp'

function BrandIcon() {
  return (
    <div className="pt-4 text-center">
      <Image
        className="inline-block mb-4 md:mr-2 mr-4"
        alt=""
        src={brand}
        layout="fixed"
        width={40}
        height={20}
      />
    </div>
  )
}

export default BrandIcon
