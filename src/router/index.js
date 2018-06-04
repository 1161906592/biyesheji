import Router from 'vue-router'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: () => import('../views/list')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/detail')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/form')
    }
  ]
})
