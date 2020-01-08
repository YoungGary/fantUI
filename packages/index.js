/* eslint-disable no-console */
import Icon from './Icon'
import Toast from './toast'
// 引入样式
import '../style/index.scss';
//引入 iconfont
import '../style/iconfont/iconfont'

const components = [Icon,Toast] ;

let fantUI = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};
export default fantUI;

export  {
  Icon,
  Toast
}