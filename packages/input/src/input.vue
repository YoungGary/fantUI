<template>
  <div
    class="fa-input"
    :class="[
           inputSize,
           isTextarea,
           {
             'fa-input__disabled':disabled,
             'fa-input__suffix_right': hasSuffixSlot|| suffixIcon ,
             'fa-input__suffix_clear':clearable,
             'fa-input__suffix_left':prefixIcon|| hasPrefixSlot,
           }
       ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <template v-if="type != 'textarea'">
      <div class="fa-input__suffix">
        <fa-icon v-show="prefixIcon" :name="prefixIcon" color="#aaa"></fa-icon>
        <slot name="prefix" class="fa-input-prefix__suffix"></slot>
      </div>
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
      <div class="fa-input__clearable" @click="clickClose">
        <fa-icon v-if="suffixIcon" :name="suffixIcon" color="#aaa"></fa-icon>
        <slot name="suffix" class="fa-input-prefix__suffix"></slot>
        <fa-icon
          v-if="clearable&&hovering&&value || clearable&&focus&&value"
          name="close"
          color="#aaa"
        ></fa-icon>
      </div>
    </template>
    <textarea v-else
              ref="textarea"
              class='fa-textarea__inner'
              :value="value"
              v-bind="$attrs" 
              :disabled="disabled"
              :readonly="readonly"
              :placeholder="placeholder"
              @input="onTextareaInput($event.target.value)"
              @blur="blur($event.target.value)"
              @focus="onfocus($event.target.value)"
              @change="$emit('change',$event.target.value)"
              :style="{
                 width:rows,
                  height:cols,
                  ...textareaCalcStyle
              }"
              :class="{ 
                  'fa-input--textarea__disabled':disabled,
              }" />
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
      default: item => {
        if (item == "text" || item == "textarea" || item === "password") {
          return item;
        } else {
          return "text";
        }
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    prefixIcon: {
      type: String,
      default: ""
    },
    suffixIcon: {
      type: String,
      default: ""
    },
    rows: {
      type: String,
      default: item => {
        return item;
      },
    },
    cols: {
      type: String,
      default: item => {
        return item;
      },
    },
    autosize: [Boolean, Object], // 高度自适应
  },
  data() {
    return {
      hovering: false,
      focus: false,
      textareaCalcStyle: {},
      CONTEXT_STYLE: [
        "width",
        "font-size",
        "box-sizing",
        "line-height",
        "padding-top",
        "font-family",
        "font-weight",
        "text-indent",
        "border-width",
        "padding-left",
        "padding-right",
        "letter-spacing",
        "padding-bottom",
        "text-rendering",
        "text-transform"
      ]
    };
  },
  watch: {
    value() {
      this.$nextTick(this.resizeTextarea);
    }
  },
  computed: {
    inputSize() {
      const types = ["large", "normal", "small"];
      if (types.includes(this.size)) {
        return `fa-input__${this.size}`;
      }
      return "fa-input__normal";
    },
    isTextarea(){
      return this.type === 'textarea' ? 'is-textarea' : '';
    },
    hasPrefixSlot() {
      return this.$slots.prefix ? true : false;
    },
    hasSuffixSlot() {
      return this.$slots.suffix ? true : false;
    }
  },
  mounted() {
     this.$nextTick(this.resizeTextarea);
  },
  methods: {
    blur(val) {
      this.focus = false;
      this.$emit("blur", val);
      
    },
    onTextareaInput(val){
      this.$emit("input", val);
      // this.resizeTextarea()
    },
    onfocus(val) {
      this.focus = true;
      this.$emit("focus", val);
    },
    clickClose() {
      this.$emit("input", "");
      this.$emit("change", "");
    },
    resizeTextarea() {
      const { autosize, type } = this;
      if (type !== "textarea" || !autosize) return;
      const minRows = autosize.min;
      const maxRows = autosize.max;
      this.textareaCalcStyle = this.calcTextareaHeight(
        this.$refs.textarea,
        minRows,
        maxRows
      );
      // console.log(this.textareaCalcStyle)
    },
    calculateNodeStyling(el) {
      window.hiddenTextarea.value = this.value;
      const style = window.getComputedStyle(el);
      const boxSizing = style.getPropertyValue("box-sizing");
      const paddingTop = style.getPropertyValue("padding-top");
      const paddingBottom = style.getPropertyValue("padding-bottom");
      const borderTopWidth = style.getPropertyValue("border-top-width");
      const borderBottomWidth = style.getPropertyValue("border-bottom-width");
      const contextStyle = this.CONTEXT_STYLE.map(
        name => `${name}:${style.getPropertyValue(name)}`
      ).join(";");
      window.hiddenTextarea.setAttribute(
        "style",
        `${contextStyle};${this.HIDDEN_STYLE}`
      );
      return [
        boxSizing,
        parseInt(paddingBottom) + parseInt(paddingTop),
        parseInt(borderBottomWidth) + parseInt(borderTopWidth)
      ];
    },
    calcTextareaHeight(el, min, max) {
      if (!window.hiddenTextarea) {
        window.hiddenTextarea = document.createElement("textarea");
        document.body.appendChild(window.hiddenTextarea);
      }
      let [boxSizing, paddingSize, borderSize] = this.calculateNodeStyling(el);
      let height = window.hiddenTextarea.scrollHeight;
      if (boxSizing === "border-box") {
        height = height + borderSize;
      } else {
        height = height - paddingSize;
      }
      window.hiddenTextarea.parentNode &&
        window.hiddenTextarea.parentNode.removeChild(window.hiddenTextarea);
      window.hiddenTextarea = null;

      if (min && height < min) height = min;
      else if (max && height > max) height = max;
      return { height: height + "px" };
    }
  }
};
</script>
