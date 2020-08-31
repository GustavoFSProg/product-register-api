import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    unique: true,
    retquired: true,
    trim: true,
  },
  email: String,
  password: String,
})

export default model('usersModel', schema)
