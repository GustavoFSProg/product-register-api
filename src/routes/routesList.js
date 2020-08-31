import { Router } from 'express'
import uploadsConfig from '../config/uploadConfig'
import multer from 'multer'
import productController from '../Controllers/productController'
import usersController from '../Controllers/usersController'

const routes = new Router()

const upload = multer(uploadsConfig)

const routeList = [
  routes.get('/', productController.getAll),
  routes.get('/:id', productController.getById),
  routes.post('/users', usersController.create),
  routes.post('/post', upload.single('image'), productController.create),
  routes.put('/update/:id', productController.update),
  // routes.delete('/del', productController.deleteAll),
]

export default routeList
