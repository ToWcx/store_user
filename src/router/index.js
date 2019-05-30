import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')
const Login = () => import('@/components/Login')
const Home = () => import('@/components/Home')
const Goods = () => import('@/components/Goods')
const Search = () => import('@/components/Search')
const Order = () => import('@/components/Order')
const Address = () => import('@/components/Address')
const Lbt = () => import('@/components/Lbt')
const Head = () => import('@/components/Head')
// <<<<<<< HEAD
const Settlement=()=>import('@/components/settlement')
// =======
const Regist = () => import('@/components/Regist')
const Test = () => import('@/components/Test')
const GoodsDetail = () => import('@/components/GoodsDetail')
const Details = () => import('@/components/Details')
const Comments = () => import('@/components/Comments')
// >>>>>>> 8e1940e511d2a4813d2d1a0e2141896bd0becae3

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
      name:'login',
      component: Login
    }, {
      path: '/home',
      component: Home

    },
     {
      path: '/home/:id',
      component: GoodsDetail,
      props: true,
      children:[
        {
          path:'details/:id',
          name:"details",
          component:Details
        },
        {
          path:'comments/:id',
          name:"comments",
          component:Comments
        }
    ]
    },{
      path: '/goodsDes',
      name:'goodsDes',
      component: Goods
    }, 
    {
      path: '/settlement',
      name:'settlement',
      component: Settlement
    },
    {
      path: '/search',
      component: Search
    }, {
      path: '/lbt',
      component: Lbt
    }, {
      path: '/head',
      component: Head
    }, {
      path: '/regist',
      component: Regist
    }, {
      path: '/test',
      component: Test
    }, {
      path: '/order',
      name:'order',
      component: Order,
      meta: {
        requiresAuth: false
      }
    }, {
      path: '/address',
      name:"address",
      component: Address,
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
