import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')
const Login = () => import('@/components/Login')
const Home = () => import('@/components/Home')
const Goods = () => import('@/components/Goods')
const Search = () => import('@/components/Search')
const Order = () => import('@/components/Order')

Vue.use(Router)

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/helloWorld',
      component: HelloWorld
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/home',
      component: Home

    }, {
      path: '/home/:id',
      component: Goods,
      props: true
    },{
      path: '/goodsDes',
      component: Goods
    }, {
      path: '/search',
      component: Search
    }, {
      path: '/order',
      component: Order,
      meta: {
        requiresAuth: false
      }
    }, {
      path: '/address',
      component: Add,
      meta: {
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    // if(store.state.token){
    //   next()
    // }else
    {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }else {
      next()
    }
})

export default router
