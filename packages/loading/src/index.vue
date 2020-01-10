<template>
  <div
    class="fa-loading"
    :style="{
           'zIndex':boxZIndex,
           'position': position,
           'top':top+'px',
           'left':left+'px',
        }"
  >
    <div
      class="fa-loading__container"
      :style="{
             'opacity':opacity,
             'background-color':containerColor
            }"
    >
      <svg  viewBox="25 25 50 50" class="circular">
       <circle cx="50" cy="50" r="20" fill="none" class="path" />
      </svg>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "faLoading",
  props: {
    position: {
      type: String,
      default: "fixed"
    },
    top:{
      type: Number,
      default: 0
    },
    left:{
      type: Number,
      default: 0
    },
    boxZIndex: {
      type: Number,
      default: 10
    },
    opacity:{
      type: Number,
      default: 0.7
    },
    containerColor:{
      type: String,
      default: "black"
    }
  },
  data() {
    return {};
  }
};
</script>
