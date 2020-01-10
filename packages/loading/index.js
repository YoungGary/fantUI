// 导入组件，组件必须声明 name
import Loading from './src/index'

// 为组件添加 install 方法，用于按需引入
Loading.install = function (Vue) {
    Vue.component(Loading.name, Loading)
}

export default Loading