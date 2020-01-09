<template>
  <button class="fa-button"
  :class="[
         buttonSize,
         buttonType
  ]"
  
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'faButton',
  props: {
    //小 中 大 三种类型 large medium small 
    size:{
      type:String,
      default:'medium'
    },
    //type primary danger warning success
    type:{
      type:String,
      default:''
    }
  },
  computed:{
    buttonSize(){
      let sizes = ["large", "medium", "small"];
      if (sizes.includes(this.size)) {
        return "fa-button--" + this.size;
      }
      return "fa-button--medium";
    },
    buttonType(){
      if (this.type) {
        let types = ["primary", "danger", "warning","success"];
        if (types.includes(this.type)) {
          return "fa-button--" + this.type;
        }else{
            return ''
        }
      }else{
          return ''
      }
      
     
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

