import { Router } from 'express'
import uploadsConfig from '../config/uploadConfig'
import multer from 'multer'
import productController from '../Controllers/productController'

const routes = new Router()

const upload = multer(uploadsConfig)

const productRouteList = [
  routes.get('/', productController.getAll),
  routes.get('/:id', productController.getById),
  routes.post('/post', upload.single('image'), productController.create),
  routes.put('/products/update/:id', productController.update),
  // routes.delete('/del', productController.deleteAll),
]

export default productRouteList
