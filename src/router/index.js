import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as appRoutes } from '../app/index'

Vue.use(VueRouter)

const routes = [
    {
        name: 'home',
        path: '/',
        redirect: { 
            name: 'packages'
        }
    },
    ...appRoutes
]

const router = new VueRouter({
    routes,
    mode: 'history',
    base: '/'
  })
  
  
  export default router
  