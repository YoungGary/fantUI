/* eslint-disable no-console */
import Icon from './Icon'
import Toast from './toast'
import ToastVue from './toast/src/index'
import Button from './button'
import Loading from './loading'
// 引入样式
import '../style/index.scss';
//引入 iconfont
// import '../style/iconfont/iconfont'

const components = [Icon,Toast,Button,Loading] ;

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

    //loading
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
};
export default fantUI;

export  {
  Icon,
  Toast,
  Button
}