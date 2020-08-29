import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
})

export default model('productModel', schema)
