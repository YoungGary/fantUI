// 导入组件，组件必须声明 name
import Demo from './src/main'

// 为组件添加 install 方法，用于按需引入
Demo.install = function (Vue) {
    Vue.component(Demo.name, Demo)
    console.log('注册成功了吗', Demo.name)
}

export default Demo