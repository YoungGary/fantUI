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
    <fa-button type="primary">基本按钮</fa-button>
    <fa-button type="danger">危险按钮</fa-button>
    <fa-button type="warning">警告按钮</fa-button>
    <fa-button type="success">成功按钮</fa-button>
    </div>
    <div>
      <fa-button disabled>不能用</fa-button>
      <fa-button disabled type="primary">不能用</fa-button>
      <fa-button disabled type="danger">不能用</fa-button>
      <fa-button disabled type="warning">不能用</fa-button>
      <fa-button disabled type="success">不能用</fa-button>
    </div>
    <div>
      <fa-button shiny>闪闪发光</fa-button>
      <fa-button shiny type="primary">闪闪发光</fa-button>
      <fa-button shiny type="danger">闪闪发光</fa-button>
      <fa-button shiny type="warning">闪闪发光</fa-button>
      <fa-button shiny type="success">闪闪发光</fa-button>
    </div>
    <div>
      <fa-button icon="search">图标按钮</fa-button>
       <fa-button icon="search" type="primary">图标按钮</fa-button>
      <fa-button icon="search" type="danger">图标按钮</fa-button>
      <fa-button icon="search" type="warning">图标按钮</fa-button>
      <fa-button icon="search" type="success">图标按钮</fa-button>
    </div>
    <!-- button loading toast  的 文档  发个版本
    周末 input 日历组件 布局 -->

    <!-- <fa-loading  :top="100" :left="100"></fa-loading> -->
    <div>
       <fa-button type="primary" @click="show">展示loading</fa-button>
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
  margin-top: 60px;
}
</style>
