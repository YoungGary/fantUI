import HelloWord from './src/HelloWorld.vue';
HelloWord.install = (Vue)=>{
    Vue.components(HelloWord.name,HelloWord)
}
export default HelloWord;
