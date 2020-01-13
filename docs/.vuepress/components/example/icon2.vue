<template>
  <div>
    <fa-icon name="back" color="red" />
    <fa-icon name="distance" color="#ceff23" />
    <fa-icon name="wifi" size="40" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  mounted () {
    import('./iconfont.js').then(icon => {})
  },
}
</script>
