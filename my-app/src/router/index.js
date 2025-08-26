import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView'),
  },
  {
    path: '/blog/:id',
    name: 'post',
    component: () => import('@/views/PostView'),
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('@/views/AddPost'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('@/views/EditPost'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
