import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../../utils/dbConnect'
import Order from '../../../../models/orderModel'
import nc from 'next-connect'
import { isAdmin, isAuth } from '../../../../utils/auth'
const handler = nc()
handler.use(isAuth, isAdmin)
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()
  try {
    const order = await Order.find({})
    /* gat Data in the database */
    res.status(200).send(order)
  } catch (err) {
    res.status(500).send({ error: err })
  }
})
export default handler
