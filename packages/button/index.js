// 导入组件，组件必须声明 name
import Button from './src/button'

// 为组件添加 install 方法，用于按需引入
Button.install = function (Vue) {
    Vue.component(Button.name, Button)
}
export default Button