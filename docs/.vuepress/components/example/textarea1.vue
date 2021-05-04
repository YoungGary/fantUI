<template>
  <div>
      <fa-input text="textarea" v-model="input1" placeholder="请输入文本域"></fa-input> 
      <fa-input type="textarea"  disabled  placeholder="禁用的" ></fa-input>
  </div>
</template>
<script>
export default {
  data () {
    return {
        input1:""
    }
  },
  methods:{

  }
}
</script>
