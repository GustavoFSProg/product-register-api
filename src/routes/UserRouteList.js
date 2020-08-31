import { Router } from 'express'
import usersController from '../Controllers/usersController'

const routes = new Router()

const UserRouteList = [
  routes.post('/users', usersController.create),
  // routes.delete('/users/del', usersController.deleteAll),
  routes.get('/users', usersController.getAllUsers),
  routes.get('/users/:id', usersController.getById),
  routes.put('/users/update/:id', usersController.update),
]

export default UserRouteList
