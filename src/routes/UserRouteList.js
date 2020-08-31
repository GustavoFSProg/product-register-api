import { Router } from 'express'
import usersController from '../Controllers/usersController'

const routes = new Router()

const UserRouteList = [
  routes.post('/users', usersController.create),
  routes.get('/usuarios', usersController.getAllUsers),
  routes.get('/users/:id', usersController.getById),
]

export default UserRouteList
