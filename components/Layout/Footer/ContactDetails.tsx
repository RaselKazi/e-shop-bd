import React from 'react'
import { countItemList } from '../../../data/ContactData'
export default function ContactDetails() {
  return (
    <div>
      {countItemList.map((item) => (
        <li className=" text-gray-500 mb-4">
          <a href="tel:+8801700000">
            <span className=" inline-block">{item.icon}</span>
            <span className=" ml-3">{item.title}</span>
          </a>
        </li>
      ))}
    </div>
  )
}
