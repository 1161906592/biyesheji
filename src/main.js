// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
const App = () => import(/* webpackChunkName: 'App' */ './App')

console.log(App)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  render: h => h(App)
}).$mount('#app')
