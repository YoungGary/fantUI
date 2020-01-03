import Icon from './src/icon.vue';
Icon.install = (Vue)=>{
    Vue.components(Icon.name,Icon)
}
export default Icon;
