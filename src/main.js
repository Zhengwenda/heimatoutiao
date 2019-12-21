import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './permission'
import axios from './utils/request' // 引入自己封装的axios
import 'element-ui/lib/theme-chalk/index.css'
import '../src/styles/index.less'
import components from './components/index.js'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(components)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
