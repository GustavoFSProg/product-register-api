import express from 'express'
import routeList from './routes/routesList'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use('/', routeList)

const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`App Server Running at Port ${PORT}`)
})

export default app
