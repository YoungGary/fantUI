<template>
  <div>
    <fa-input type="text" v-model="large1" prefix-icon="search"  placeholder="前缀带图标"></fa-input>
    <fa-input type="password" v-model="large2"  placeholder="slot图标" clearable>
        <fa-icon slot="prefix" name="search" color="#aaa" ></fa-icon>
    </fa-input>
    <div style="margin-top:5px">
        <fa-input type="text" v-model="large3" suffix-icon="search" clearable  placeholder="后缀带图标" ></fa-input>
    <fa-input v-model="large4"  placeholder="slot图标" clearable>
        <fa-icon slot="suffix" name="search" color="#aaa"  ></fa-icon>
    </fa-input>
    </div>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
        large1:"", 
        large2:"",
        large3:"",
        large4:"",
    }
  },
  methods:{

  }
}
</script>
