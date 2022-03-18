export interface IProduct {
  _id: string
  __v: number
  name: String
  description: String
  quantity: number
  price: number
  ratings: number
  images: [{ public_id: string; url: string; _id: string }]
  category: String
  brand: String
  stock: Number
  discount: number
  discountTargetDate: Date
  size: String
  isFeatured: Boolean
  numOfReviews: Number
  createdAt: Date
  updatedAt: Date
}

export interface ICartItems {
  quantity: number
  price: number
}
export interface IHomePageQuery {
  query: { category: String; sort: String }
}
export interface IProductPageQuery {
  query: {
    pageSize: number
    page: number
    category: String
    sort: String
    brand: String
    price: String
    rating: String
    query: string
  }
}

export interface IProductQuery {
  pageSize?: number
  page?: string | string[]
  category?: string | string[]
  sort?: string
  brand?: string | string[]
  price?: string | string[]
  rating?: string | string[]
  searchQuery?: string | string[]
}

export interface IImagesItems {
  images: [{ public_id: string; url: string; _id: string }]
}
