import { Router } from 'express'

const routes = new Router()

const routeList = [
  routes.get('/', (res) => {
    console.log('First Route')
  }),
]

export default routeList
