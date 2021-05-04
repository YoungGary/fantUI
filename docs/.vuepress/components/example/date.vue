<template>
  <div>
      <fa-date-picker v-model="date" placeholder="请选择" value-format="yyyy年MM月dd日" ></fa-date-picker>
      <div>
          当前v-model的值：{{date}}
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
        date:''
    }
  }
}
</script>
