import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Work from '@/components/Work'
import Blog from '@/components/Blog'
import NotFound from '@/components/NotFound'
import TechFault from '@/components/TechFault'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '/work/',
      name: 'Work',
      component: Work
    },
    {
      path: '/blog/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/author/:author/',
      name: 'author',
      props: true,
      component: Blog
    },
    {
      path: '/blog/post/:post/',
      name: 'post',
      props: true,
      component: Blog
    },
    {
      path: '/404/',
      name: '404',
      component: NotFound
    },
    {
      path: '/500/',
      name: '500',
      component: TechFault
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
