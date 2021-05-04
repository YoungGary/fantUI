<template>
  <div>
      <fa-input type="text"  v-model="input1" placeholder="请输入文本"></fa-input> 
      <fa-input type="password"  v-model="input2" placeholder="请输入密码"></fa-input> 
      <fa-input type="textarea"  v-model="input3" placeholder="请输入文本域"></fa-input> 
  </div>
</template>
<script>
export default {
  data () {
    return {
        input1:"",
        input2:"", 
        input3:""
    }
  },
  methods:{

  }
}
</script>
