// 导入组件，组件必须声明 name
import Toast from './src/index'

Toast.install = function (Vue) {
    Vue.prototype.$showToast = function(options) {
        let Component = Vue.extend(Toast);
        let node;
        // option  可以是纯的string 类型 也可以是个对象
        if (typeof options == 'object' && options instanceof Object) {
            node = new Component({
                propsData: options
            });
            node.$slots.default = [options.message];
        }else if (typeof options === 'string') {
            node = new Component();
            node.$slots.default = [options];
            
        }
        node.vm = node.$mount();
        node.vm.visible = true
        document.body.appendChild(node.$el);
    }
}
export default Toast