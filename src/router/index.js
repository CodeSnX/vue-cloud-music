import Vue from 'vue'
import VueRouter from 'vue-router'
//vuetify提供的定位功能，回到上一个路由的时候可以定位到之前的位置
import goTo from 'vuetify/es5/services/goto'
import Layout from '../views/index/Layout.vue'
import Dashboard from '../views/index/Dashboard.vue'
import Auth from '../views/other/Auth.vue'
import Home from '../views/github/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/other/About.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/other/Profile.vue')
      },
      {
        path: '/music-type',
        name: 'MusicType',
        component: () => import('../views/music/MusicType.vue')
      },
      {
        path: '/music-list',
        name: 'MusicList',
        component: () => import('../views/music/MusicList.vue')
      },
      {
        path: '/music',
        name: 'Music',
        component: () => import('../views/music/Music.vue')
      },
      {
        path: '/role',
        name: 'Role',
        component: () => import('../views/permission/Role.vue')
      },
      {
        path: '/menu',
        name: 'Menu',
        component: () => import('../views/permission/Menu.vue')
      },
      {
        path: '/permission',
        name: 'Permission',
        component: () => import('../views/permission/Permission.vue')
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/following',
        name: 'Following',
        component: () => import('../views/github/Following.vue')
      },
      {
        path: '/followers',
        name: 'Followers',
        component: () => import('../views/github/Followers.vue')
      },
      {
        path: '/repositories',
        name: 'Repositories',
        component: () => import('../views/github/Repositories.vue')
      },
      {
        path: '/stars',
        name: 'Stars',
        component: () => import('../views/github/Stars.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/404',
    name: 'Page404',
    component: () => import('../views/other/Page404.vue')
  }
]

const router = new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }
    return goTo(scrollTo)
  },
  routes
})

export default router
