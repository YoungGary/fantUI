import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//main.js中引入packages
import { Toast,Icon} from "../packages/index.js"
Vue.use(Toast)
  .use(Icon)
new Vue({
  render: h => h(App),
}).$mount('#app')
