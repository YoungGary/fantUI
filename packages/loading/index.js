// 导入组件，组件必须声明 name
import Loading from './src/index'

// 为组件添加 install 方法，用于按需引入
Loading.install = function (Vue) {
    Vue.component(Loading.name, Loading)
    Vue.prototype.$showLoading = function (options) {
        let Component = Vue.extend(Loading);
        let node  = new Component({
            propsData:options
        })
        node.vm = node.$mount()
        for (let index = 0; index < document.body.childNodes.length; index++) {
            const element = document.body.childNodes[index];
            if (element.className == 'fa-loading') {
                return
            }
        }
        document.body.appendChild(node.$el)
    }
    Vue.prototype.$hideLoading = function(){
        document.body.childNodes.forEach(item => {
            if (item.className === 'fa-loading') {
              document.body.removeChild(item)
            }
        })
    }

}

export default Loading