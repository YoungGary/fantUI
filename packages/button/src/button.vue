<template>
  <button class="fa-button"
  :disabled="disabled"
  :class="[
         buttonSize,
         buttonType,
         {
          'is-disabled':disabled,
          'is-shiny':shiny,
          'is-plain':plain
        }
  ]"
  @click="click($event)"
  @touchstart='touchstart($event)'
  >
    <fa-icon v-if="icon"  :name="icon"  color="white" style="margin-right:2px;"></fa-icon>
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
    },
    plain:{
      type:Boolean,
      default:false
    },
    shiny:{
       type:Boolean,
       default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    icon:{
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
    },
    iconSize(){
      let sizes = ["large", "medium", "small"];
      if (sizes.includes(this.size)) {
        return  this.size == 'large'? 20:this.size == 'large'?15:14;
      }
      return 15;
    }
  },
  data() {
    return {
      
    }
  },
  methods:{
    click(event){
      this.$emit('click',event)
    },
    touchstart(event){
      this.$emit('touchstart',event)
    }
  }
}
</script>

