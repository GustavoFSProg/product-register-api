import { Router } from 'express'
import usersController from '../Controllers/usersController'

const routes = new Router()

const UserRouteList = [
  routes.post('/join', usersController.create),
  routes.post('/login', usersController.login),
  routes.delete('/users/del/:id', usersController.removeById),
  routes.get('/users', usersController.getAllUsers),
  routes.get('/users/:id', usersController.getById),
  routes.put('/users/update/:id', usersController.update),
]

export default UserRouteList
