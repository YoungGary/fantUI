// 导入组件，组件必须声明 name
import Input from './src/input'

// 为组件添加 install 方法，用于按需引入
Input.install = function (Vue) {
    Vue.component(Input.name, Input)
}

export default Input