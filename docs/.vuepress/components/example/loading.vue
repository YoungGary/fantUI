<template>
  <div>
      <fa-button @click="open1">打开遮罩层</fa-button>
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
        this.$showLoading({
            zIndex:100
        });
        setTimeout(()=>{
            this.$hideLoading();
        },2000)
    }
    
  }
}
</script>
