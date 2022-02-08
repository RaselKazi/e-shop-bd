import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import Product from '../../../../models/productModel'
import { isAdmin, isAuth } from '../../../../utils/auth'
import dbConnect from '../../../../utils/dbConnect'
const handler = nc()
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()
  const product = await Product.findById(req.query.id)
  res.status(201).json({ data: product })
})

export default handler
