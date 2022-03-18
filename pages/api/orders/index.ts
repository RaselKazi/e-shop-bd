import nc from 'next-connect'
import Order from '../../../models/orderModel'
import dbConnect from '../../../utils/dbConnect'
import { NextApiRequest, NextApiResponse } from 'next'
import { isAuth } from '../../../utils/auth'
import { IOrderServer } from '../../../type/order.model.type'

interface Request {
  body: IOrderServer
  user: { _id: string }
}
const handler = nc()
handler.use(isAuth)
handler.post(async (req: Request, res: NextApiResponse) => {
  console.log(req)
  await dbConnect()
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body

  const newOrder = new Order({
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    user: req.user._id,
  })
  const order = await newOrder.save()
  res.status(201).send(order)
})

export default handler
