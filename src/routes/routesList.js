import { Router } from 'express'
import uploadsConfig from '../config/uploadConfig'
import multer from 'multer'
import productController from '../Controllers/productController'
import usersController from '../Controllers/usersController'

const routes = new Router()

const upload = multer(uploadsConfig)

const routeList = [
  routes.get('/', productController.getAll),
  routes.post('/users', usersController.create),
  routes.post('/post', upload.single('image'), productController.create),
  // routes.delete('/del', productController.deleteAll),
]

export default routeList
