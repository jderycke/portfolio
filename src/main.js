import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(VueResource)

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
