<template>
  <div class="container">
    <div>{{ msg }}</div>
    <div>{{ proData }}</div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  props: {
    proData: {
      type: String,
      default: '我是默认值'
    }
  },
  data() {
    return {
      msg: 'welcome to your Vue.js'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/index.scss";
</style>
