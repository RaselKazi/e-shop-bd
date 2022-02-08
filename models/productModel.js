const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Enter product Name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please Enter product Description'],
    },

    price: {
      type: Number,
      required: [true, 'Please Enter product Price'],
      maxLength: [8, 'Price cannot exceed 8 characters'],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, 'Please Enter Product Category'],
    },
    brand: {
      type: String,
      required: [true, 'Please Enter Product brand'],
    },
    stock: {
      type: Number,
      required: [true, 'Please Enter product Stock'],
      maxLength: [4, 'Stock cannot exceed 4 characters'],
      default: 1,
    },
    discount: {
      type: Number,
      required: [true, 'Please Enter product discount'],
      maxLength: [3, 'Stock cannot exceed 3 characters'],
      default: 0,
    },
    discountTargetDate: {
      type: Date,
      required: [true, 'Please Enter product discount'],
      default: Date.now,
    },
    size: {
      type: String,
      required: [true, 'Please Enter product Size'],
    },

    isFeatured: { type: Boolean, required: true, default: false },

    numOfReviews: {
      type: Number,
      default: 0,
    },
    // reviews: [
    //   {
    //     user: {
    //       type: mongoose.Schema.ObjectId,
    //       ref: 'User',
    //       required: true,
    //     },
    //     name: {
    //       type: String,
    //       required: true,
    //     },
    //     rating: {
    //       type: Number,
    //       required: true,
    //     },
    //     comment: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],

    // user: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
  },

  {
    timestamps: true,
  }
)

export default mongoose.models.Product ||
  mongoose.model('Product', productSchema)
