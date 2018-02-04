// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vueFire'
import VueResource from 'vue-resource'
import VueClazyLoad from 'vue-clazy-load'
import App from './App'
import router from './router'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(VueFire)
Vue.use(VueResource)
Vue.use(VueClazyLoad)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD MMM, YYYY')
  }
})
