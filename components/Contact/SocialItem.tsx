import React from 'react'
import { socialIconData } from '../../data/FooterData'
export default function SocialItem() {
  return socialIconData.map((item) => (
    <a
      key={item.bgColor}
      className={`mr-2 p-2 hover:shadow-2xl duration-300 text-white transform hover:-translate-y-1 ${item.bgColor}`}
      href="#"
    >
      {item.icon}
    </a>
  ))
}
