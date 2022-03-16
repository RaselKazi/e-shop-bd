export interface IOrderCard {
  _id: string
  discount: number
  name: String
  quantity: number
  price: number
  image: string
  productId: string
}
export interface IShippingAddress {
  fullName: String
  address: String
  city: String
  postalCode: String
  country: String
}
export interface IOrder {
  _id: string
  user: string
  orderItems: IOrderCard[]
  shippingAddress: IShippingAddress
  paymentMethod: String
  itemsPrice: Number
  shippingPrice: Number
  taxPrice: Number
  totalPrice: Number
  isPaid: Boolean
  isDelivered: Boolean
  paidAt: Date
  deliveredAt: Date
  orderStatus: String
  createdAt: Date
  updatedAt: Date
  __v: number
}
