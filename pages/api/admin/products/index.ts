import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import Product from '../../../../models/productModel'
import dbConnect from '../../../../utils/dbConnect'
const cloudinary = require('cloudinary')
const fileUpload = require('express-fileupload')
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const config = {
  api: {
    bodyParser: false,
  },
}
const handler = nc()

handler
  .use(fileUpload())
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    dbConnect()
    try {
      let images = []

      if (typeof req.body.images === 'string') {
        images.push(req.body.images)
      } else {
        images = req.body.images
      }

      const imagesLinks = []

      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
          folder: 'NextProducts',
        })

        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        })
      }

      req.body.images = imagesLinks
      const product = await Product.create(
        req.body
      ) /* create a new model in the database */
      res.status(201).json({ data: product })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  })

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  dbConnect()
  try {
    const product = await Product.find()
    /* gat Data in the database */
    res.status(200).json({ data: product })
  } catch (err) {
    res.status(500).json({ error: err })
  }
})
export default handler
