import { Router } from 'express'
import multer from 'multer'
import uploadsConfig from '../config/uploadConfig'
import productController from '../Controllers/productController'

const routes = new Router()

const upload = multer(uploadsConfig)

const productRouteList = [
  routes.get('/', productController.getAll),
  routes.get('/products/:id', productController.getById),
  routes.post('/post', upload.single('image'), productController.create),
  routes.put('/products/update/:id', productController.update),
  routes.delete('/products/del/:id', productController.removerProduto),
]

export default productRouteList
