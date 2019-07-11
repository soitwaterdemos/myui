import SYUI from '../packages/index'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(SYUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
