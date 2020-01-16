<template>
  <div
    class="fa-input"
    :class="[
           inputSize,
           {
             'fa-input__disabled':disabled,
             'fa-input__suffix_right':clearable
           }
       ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <input
      :type="type"
      :value="value"
      class="fa-input__inner"
      v-bind="$attrs"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="$emit('input',$event.target.value)"
      @blur="blur($event.target.value)"
      @focus="onfocus($event.target.value)"
      @change="$emit('change',$event.target.value)"
    />
    <div v-if="clearable" class="fa-input__clearable" @click="clickClose">
       <fa-icon v-if="clearable&&hovering&&value || clearable&&focus&&value"  name="close" color="#aaa" ></fa-icon>
    </div>
  </div>
</template>
<script>

export default {
  name: "faInput",
  props: {
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly:{
      type: Boolean,
      default: false
    },
    placeholder:{
      type: String,
      default: ''
    },
    value:{
      type: String,
      default: ''
    },
    clearable:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
        hovering:false,
        focus:false
    };
  },
  computed: {
    inputSize() {
      const types = ["large", "normal", "small"];
      if (types.includes(this.size)) {
        return `fa-input__${this.size}`;
      }
      return "fa-input__normal";
    }
  },
  methods:{
    blur(val){
       this.focus = false;
      this.$emit('blur',val)
    },
    onfocus(val){
      this.focus = true;
      this.$emit('focus',val)
    },
    clickClose(){
      this.$emit('input','')
      this.$emit('change','')
    }
  }
};
</script>
