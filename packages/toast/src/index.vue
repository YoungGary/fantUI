<template>
  <transition name="fa-toast-fadein" @after-leave="deleteElement">
    <div class="fa-toast" :class="[
         toastType
         ]" :style="'zIndex:'+zIndex"
         @mousemove="clearTimer"
         @mouseleave="initAutoClose"
         v-show="visible"
         >
       <slot /> 
       <i class="fa-toast__closeButton"
         @click="deleteElement" v-if="showButton">
        <faIcon name='close'/>
      </i>
    </div>
  </transition>
</template>
<script>
import faIcon from "../../Icon/src/icon";
export default {
  name: 'faToast',
  components:{
    faIcon
  },
  props: {
    type: {
      type: String,
      default: "normal"
    },
    zIndex:{
      type:Number,
      default:10
    },
    autoClose: {
      // 是否自动关闭
      type: Boolean,
      default: true
    },
    closeTime: {
      // 关闭的延时
      type: Number,
      default: 2000
    },
    showButton:{
      type:Boolean,
      default:true
    }
  },
  computed: {
    toastType() {
      let types = ["primary", "success", "warning", "danger"];
      if (types.includes(this.type)) {
        return "fa-toast--" + this.type;
      }
      return "fa-toast--normal";
    }
  },
  data() {
    return {
      timer: null,
      visible: false 
    }
  },
   mounted() {
    this.initAutoClose();
    document.addEventListener("keydown", this.keydown);
  },
  beforeDestroy() {
    this.clearTimer()
    document.removeEventListener("keydown", this.keydown);
  },
  methods:{
    deleteElement(){
      this.visible = false;
      setTimeout(() => {
        this.$el.remove();
        this.$destroy();
      }, 300);
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    initAutoClose() {
      if (this.autoClose && Math.abs(this.closeTime) > 0) {
        this.timer = setTimeout(() => {
          this.deleteElement();
        }, Math.abs(this.closeTime));
      }
    },
    keydown(e) {
      if (e.keyCode === 27) {
        this.deleteElement();
      }
    }
}
}
</script>

