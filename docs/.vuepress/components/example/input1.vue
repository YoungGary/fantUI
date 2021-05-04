<template>
  <div>
      <fa-input  v-model="input1" placeholder="请输入"></fa-input> 
      <fa-input  style="width:400px" v-model="input2" placeholder="请输入" ></fa-input>
  </div>
</template>
<script>
export default {
  data () {
    return {
        input1:"",
        input2:""
    }
  },
  methods:{

  }
}
</script>
