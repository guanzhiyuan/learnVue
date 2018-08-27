// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../static/css/base.less' 
import ElementUI from 'element-ui'
import axios from 'axios'
import './mock/mock.js'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App:App },
  template: '<App/>'
})
