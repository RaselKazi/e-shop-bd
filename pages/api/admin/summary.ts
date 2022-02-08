import nc from 'next-connect'
import dbConnect from '../../../utils/dbConnect'
import { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../../models/productModel'
import Order from '../../../models/orderModel'
import User from '../../../models/userModel'
import { isAdmin, isAuth } from '../../../utils/auth'
const handler = nc()
handler.use(isAuth, isAdmin)

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()
  const ordersCount = await Order.countDocuments()
  const productsCount = await Product.countDocuments()
  const usersCount = await User.countDocuments()
  const ordersPriceGroup = await Order.aggregate([
    {
      $group: {
        _id: null,
        sales: { $sum: '$totalPrice' },
      },
    },
  ])
  const ordersPrice =
    ordersPriceGroup.length > 0 ? ordersPriceGroup[0].sales : 0
  const salesData = await Order.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m', date: '$createdAt' } },
        totalSales: { $sum: '$totalPrice' },
      },
    },
  ])

  res.send({ ordersCount, productsCount, usersCount, ordersPrice, salesData })
})

export default handler
