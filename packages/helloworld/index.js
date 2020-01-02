import HelloWord from './src/index.vue';
HelloWord.install = (Vue)=>{
    Vue.components(HelloWord.name,HelloWord)
}
export default HelloWord;
