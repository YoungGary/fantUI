<template>
  <div>
      <div style="width:100%;height:200px;border:1px solid red;position:relative">
          <fa-loading position="absolute"  v-show="showLoading" />
      </div>
      <fa-button @click="open1">打开</fa-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
        showLoading:false
    }
  },
  methods:{
    open1(){
        this.showLoading = true
        setTimeout(()=>{
            this.showLoading = false
        },2000)
    }
  }
}
</script>
