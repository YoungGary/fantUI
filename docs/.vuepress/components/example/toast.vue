<template>
  <div>
      <fa-button @click="open1">打开普通提示</fa-button>
      <fa-button @click="open2">打开成功提示</fa-button>
      <fa-button @click="open3">打开警告提示</fa-button>
      <fa-button @click="open4">打开失败提示</fa-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
    open1(){
        this.$showToast({
            type:'normal',
            message:'普通提示',
            zIndex:100
        })
    },
    open2(){
        this.$showToast({
            type:'success',
            message:'成功提示',
            zIndex:100
        })
    },
    open3(){
        this.$showToast({
            type:'warning',
            message:'警告提示',
            zIndex:100
        })
    }, 
    open4(){
        this.$showToast({
            type:'danger',
            message:'失败提示',
            zIndex:100
        })
    }, 
  }
}
</script>
