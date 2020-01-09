import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//main.js中引入packages
import fantui from "../packages/index.js"
Vue.use(fantui)
  
new Vue({
  render: h => h(App),
}).$mount('#app')
