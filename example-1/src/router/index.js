import Vue from 'vue'
import Router from 'vue-router'
import CircularReference from '@/pages/CircularReference'
import HOCDemo from '@/pages/HOCDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: CircularReference
    },
    {
      path: '/page2',
      name: 'page2',
      component: HOCDemo
    }
  ]
})
