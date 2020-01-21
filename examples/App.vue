/* eslint-disable no-console */
<template>
  <div id="app">
   <fa-date-picker v-model="date" ></fa-date-picker>
   <fa-button>{{date}}</fa-button>  
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return{
      date: ''
    }
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  min-height: 2000px;
  width: 100%
}
.margintop{
  margin-top: 30px
}
</style>
