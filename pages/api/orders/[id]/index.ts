import nc from 'next-connect'
import Order from '../../../../models/orderModel'
import Product from '../../../../models/productModel'
import dbConnect from '../../../../utils/dbConnect'
import { NextApiRequest, NextApiResponse } from 'next'
import { isAuth } from '../../../../utils/auth'
const handler = nc()
handler.use(isAuth)

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()

  const order = await Order.find({ user: req.query.id })

  res.send(order)
})

export default handler
