import { Key, ReactNode } from 'react'

export interface IProduct {
  _id: Key | null | undefined
  quantity: Number | any
  name: String
  description: String
  price: Number
  ratings: Number
  images: []
  category: String
  brand: String
  stock: Number
  discount: Number
  discountTargetDate: Date
  size: String
  isFeatured: Boolean
  numOfReviews: Number
}

export interface ICartItems {
  quantity: Number | any
  price: Number | any
}
