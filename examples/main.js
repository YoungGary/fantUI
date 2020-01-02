import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//main.js中引入packages
import libs from "../packages"
Vue.use(libs,{a:'test'})


new Vue({
  render: h => h(App),
}).$mount('#app')
