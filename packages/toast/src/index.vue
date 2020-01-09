<template>
  <transition name="fa-toast-fadein" @after-leave="deleteElement">
    <div
      class="fa-toast"
      :class="[
         toastType
         ]"
      :style="'zIndex:'+zIndex"
      @mousemove="clearTimer"
      @mouseleave="initAutoClose"
      v-show="visible"
    >
      <div class="fa-toast__content">
        <img :src="imageType" class="fa-toast__content_image" />
        <span class="fa-toast__content_font"><slot/></span>
      </div>
      <div class="fa-toast__closeButton" @click="deleteElement" v-if="showButton">
        <faIcon name="close" color="white" />
      </div>
    </div>
  </transition>
</template>
<script>
import faIcon from "../../Icon/src/icon";
export default {
  name: "faToast",
  components: {
    faIcon
  },
  props: {
    type: {
      type: String,
      default: "normal"
    },
    zIndex: {
      type: Number,
      default: 10
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
    showButton: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    toastType() {
      let types = ["primary", "success", "warning", "danger"];
      if (types.includes(this.type)) {
        return "fa-toast--" + this.type;
      }
      return "fa-toast--primary";
    },
    imageType() {
      // danger
      //https://imgkr.cn-bj.ufileos.com/e0c30ffd-b846-452c-902f-3e0efbd10725.png
      // primary
      //https://imgkr.cn-bj.ufileos.com/76c0abd1-f669-44b3-b54a-0abe17a69019.png
      //success
      //https://imgkr.cn-bj.ufileos.com/5971aa2e-98d7-4dce-b22a-bdc70218d475.png
      //wadining
      //https://imgkr.cn-bj.ufileos.com/4da82f59-46e6-43af-9388-6958e634448f.png
      let types = ["primary", "success", "warning", "danger"];
      let url ;
      if (types.includes(this.type)) {
        switch (this.type) {
          case "primary":
            url =  'https://imgkr.cn-bj.ufileos.com/76c0abd1-f669-44b3-b54a-0abe17a69019.png'
            break
          case "success":
            url = 'https://imgkr.cn-bj.ufileos.com/5971aa2e-98d7-4dce-b22a-bdc70218d475.png'
            break
          case "warning":
            url = 'https://imgkr.cn-bj.ufileos.com/4da82f59-46e6-43af-9388-6958e634448f.png'
            break
          case "danger":
            url =  'https://imgkr.cn-bj.ufileos.com/e0c30ffd-b846-452c-902f-3e0efbd10725.png'
            break
          default:
            url =  'https://imgkr.cn-bj.ufileos.com/76c0abd1-f669-44b3-b54a-0abe17a69019.png'
            break;
        }
      }else{
          url = `https://imgkr.cn-bj.ufileos.com/76c0abd1-f669-44b3-b54a-0abe17a69019.png`;
      }
      return url;
    }
  },
  data() {
    return {
      timer: null,
      visible: false
    };
  },
  mounted() {
    this.initAutoClose();
    document.addEventListener("keydown", this.keydown);
  },
  beforeDestroy() {
    this.clearTimer();
    document.removeEventListener("keydown", this.keydown);
  },
  methods: {
    deleteElement() {
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
};
</script>

