<template>
  <div 
    class='fa-icon'
    :style="{
    display: 'inline-flex',
    height: iconSize,
    width: iconSize
    }"
  >
  <svg 
  :style="{fill:color}"
  :class="[
    'fa-icon-'+name,
    { 
      'icon-loading':~name.indexOf('load'),
      'is-disabled':disabled
    }
  ]"
  >
    <use :xlink:href='`#icon-${name}`'></use>
  </svg>
  </div>
</template>
<script>
export default {
name: "faIcon",
  props: {
    color: String,
    disabled: Boolean,
    name: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: "1em"
    }
  },
  computed: {
    iconSize() {
      if (typeof this.size === "number"){
        return this.size + "px";
      } else if (typeof this.size === "string" && this.isNumber(this.size)) {
         return `${this.size}px`
      }else {
        return this.size;
      }
    }
  },
  methods:{
    isNumber(val) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)) {
        return true;
        } else {
        return false;
        }
    }
  }
};
</script>