<template>
  <div>
     <fa-input type="textarea" :autosize="{ min:'200', max:'400'}"  placeholder="指定"  v-model="large"></fa-input>
  </div>
</template>
<script>
export default {
  data () {
    return {
        large:""
    }
  },
  methods:{

  }
}
</script>
