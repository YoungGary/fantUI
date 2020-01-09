/* eslint-disable no-console */

<template>
  <div id="app">
    <!-- <fa-icon name="volume" size="40" /> -->
    <!-- <button  @click="toast"  >展示</button> -->
    <div>
      <fa-button size="large">大按钮</fa-button>
    <fa-button size="medium">中按钮</fa-button>
    <fa-button size="small">小按钮</fa-button>
    </div>
    <div>
    <fa-button>朴素按钮</fa-button>
    <fa-button  type="primary">基本按钮</fa-button>
    <fa-button type="danger">危险按钮</fa-button>
    <fa-button type="warning">警告按钮</fa-button>
    <fa-button type="success">成功按钮</fa-button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  },
  methods:{
    toast(){
      this.$showToast({
        message:'错误1111111111111',
        type:'success',
        closeTime:3000
      })
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
