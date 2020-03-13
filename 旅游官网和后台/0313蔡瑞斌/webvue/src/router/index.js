import Vue       from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/home.vue'
import Main      from '../views/main.vue'
import Product   from '../views/product.vue'
import Detail    from '../views/detail.vue'
import Blog      from '../views/blog.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      { path: '/home/main', name: 'main', component: Main},
      { path: '/home/ours', name: 'ours', component: Main},
      { path: '/home/serve', name: 'serve', component: Main},
      { path: '/home/product', name: 'product', component: Product},
      { path: '/home/detail', name: 'detail', component: Detail},
      { path: '/home/pic', name: 'pic', component: Main},
      { path: '/home/book', name: 'book', component: Blog},
      { path: '/home/contcat', name: 'contcat', component: Main},
      { path:'/home', redirect:'/home/main'}
    ]
  },
  {
    path:'/',
    redirect:'/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
