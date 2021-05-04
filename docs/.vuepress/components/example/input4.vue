<template>
  <div>
    <fa-input type="text" size="large" v-model="input2" placeholder="请输入"></fa-input> 
    <fa-input type="text"  v-model="input1" placeholder="请输入"></fa-input> 
    <fa-input type="text" size="small"  v-model="input3" placeholder="请输入"></fa-input> 
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
