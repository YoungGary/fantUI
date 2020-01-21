<template>
  <div>
      <fa-button @click="open1">自动关闭提示</fa-button>
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
            message:'这是一个可以自动关闭不带按钮的提示',
            zIndex:100,
            closeTime:4000,
            showButton:false
        })
    }
  }
}
</script>
