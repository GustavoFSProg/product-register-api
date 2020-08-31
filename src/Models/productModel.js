import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    unique: true,
    retquired: true,
    trim: true,
  },
  image: String,
  price: Number,
  description: String,
})

export default model('productModel', schema)
