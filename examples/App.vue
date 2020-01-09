/* eslint-disable no-console */

<template>
  <div id="app">
    <fa-icon name="volume" size="40" />
    <button  @click="toast"  >展示</button>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  },
  methods:{
    toast(){
      // console.log(this)
      this.$showToast({
        message:'错误1111111111111',
        type:'success',
        closeTime:3000
      })
      // console.log(111)
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
  margin-top: 60px;
}
</style>
