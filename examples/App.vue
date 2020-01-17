/* eslint-disable no-console */

<template>
  <div id="app">
   
 
     <div class="margintop">
      <fa-input type="textarea" :autosize="{ min:'200', max:'400'}"  placeholder="制定了3"  v-model="large"></fa-input>
    </div>
  
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return{
      large:''
    }
  },
  methods:{
    toast(){
      this.$showToast({
        message:'错误1111111111111',
        type:'success',
        closeTime:3000
      })
    },
    click(){
      console.log(111)
    },
    show(){
      this.$showLoading();
      setTimeout(()=>{
        this.$hideLoading();
      },2000)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 2000px;
  width: 100%
}
.margintop{
  margin-top: 30px
}
</style>
