/* eslint-disable no-console */
import Icon from './Icon'
import Toast from './toast'
import ToastVue from './toast/src/index'
// 引入样式
import '../style/index.scss';
//引入 iconfont
import '../style/iconfont/iconfont'

const components = [Icon,Toast] ;

let fantUI = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
      // console.log(component)
    });
    //全局引用的时候toast方法绑定
    Vue.prototype.$showToast = function(options) {
      let Component = Vue.extend(ToastVue);
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
};
export default fantUI;

export  {
  Icon,
  Toast
}