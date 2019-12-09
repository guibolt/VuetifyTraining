import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:() => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/projects',
    name: 'project',
    component: () => import(/* webpackChunkName: "Projects" */ '../views/Projects.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "Team" */ '../views/Team.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
