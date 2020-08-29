import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routeList from './routes/routesList'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

mongoose.connect(process.env.DATABASE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

const app = express()

app.use(express.json())
app.use(cors())
app.use('/', routeList)

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`App Server Running at Port ${PORT}`)
})

export default app
