
import fantui from '../../packages'
import DemoBlock from './components/demo-block/demo-block'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  Vue.use(fantui)
  Vue.component('demo-block', DemoBlock)
}
