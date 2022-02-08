import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../../utils/dbConnect'
import User from '../../../../models/userModel'
import nc from 'next-connect'
import { isAdmin, isAuth } from '../../../../utils/auth'
const handler = nc()
handler.use(isAuth, isAdmin)
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()
  try {
    const user = await User.find({})
    /* gat Data in the database */
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send({ error: err })
  }
})
export default handler
