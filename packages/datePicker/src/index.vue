/* eslint-disable vue/valid-v-bind */
<template>
  <div class="fa-datepicker" v-check-outside>
    <fa-input v-model="formatValue"></fa-input>
    <div class="fa-datepicker__select" v-if="visiable">
      <div class="fa-datepicker__select__nav">
        <div>&lt;</div>
        <div @click="prevMonth">&lt;&lt;</div>
        <div>{{curYear}}年</div>
        <div>{{curMonth+1}}月</div>
        <div @click="nextMonth">&gt;&gt;</div>
        <div>&gt;</div>
      </div>
      <div class="fa-datepicker__select__content">
          <div class="fa-datepicker__select__content__week">
            <span v-for="item in weeks" :key="item" class="weekcell">{{item}}</span>
          </div>
          <div v-for="i in 6" :key="i">
            <span @click="chooseDay(visiableDays[(i-1)*7+(j-1)])" v-for="j in 7" :key="j" class="cell"  v-bind:class="{'currentMonth': isCurrentMonth(visiableDays[(i-1)*7+(j-1)]) ,'currentDay':isCurrentDay(visiableDays[(i-1)*7+(j-1)])}">
              {{visiableDays[(i-1)*7+(j-1)].getDate()}}
            </span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getYearMonthDay,getDate } from "../../utils/dateUtils";
export default {
  name: 'faDatePicker',
  props: {
    value:{
      type:Date,
      default:()=>new Date()
    }
  },
  directives:{
    checkOutside:{
      bind(el,bindings,vnode){  
        let handler = (e)=>{
            // console.log(vnode)
          if (el.contains(e.target)) {
            if (!vnode.context.visiable) {
                vnode.context.focus()
            }
          }else{
            if (vnode.context.visiable) {
              vnode.context.blur()
            }
            
          }
        }
        el.handler = handler
        document.addEventListener('click',handler)
      },
      unbind(el){
        document.removeEventListener('click',el.handler)
      }
    }
  },
  data() {
    let {year} = getYearMonthDay(this.value)
    let {month} = getYearMonthDay(this.value)
    return {
      curMonth:month,
      curYear:year,
      visiable:false,
      weeks:['日','一','二','三','四','五','六']
    }
  },
  computed:{
    formatValue(){
      let {year,month,day} = getYearMonthDay(this.value)
      return `${year}-${month+1>9 ? month+1: '0'+(month+1)}-${day>9? day: '0'+(day)}`
    },
    visiableDays(){
      // 当前月的1号 周几
      let {year,month} = getYearMonthDay(new Date(this.curYear,this.curMonth,1))
      let dayOne = getDate(year,month,1)
      let whatday = dayOne.getDay()//是周几
      console.log()
      //是周几 就要倒推几天 获取 日历显示第一天的天数
      let startday = dayOne - whatday * 60*60*24*1000
      // 加42天
      let arr = [];
      for (let index = 0; index < 42; index++) {
        arr.push(new Date(startday+index*60*60*1000*24))
      }
      return arr
    }
  },
  methods:{
    focus(){
      this.visiable = true
    },
    blur(){
      this.visiable = false
    },
    isCurrentMonth(date){
      let {year,month} = getYearMonthDay(date)
      // console.log(year,month)
      let {year:y,month:m} = getYearMonthDay(new Date(this.curYear,this.curMonth,1))
      return year == y && month == m
      
    },
    isCurrentDay(date){
      let {year,month,day} = getYearMonthDay(date)
      // console.log(year,month)
      let {year:y,month:m,day:d} = getYearMonthDay(this.value)
      return year == y && month == m && day == d
    },
    chooseDay(date){
      this.$emit('input',date)
      this.visiable = false
    },
    prevMonth(){
       this.curMonth = this.curMonth -1
      if (this.curMonth < 0) {
        this.curYear --
        this.curMonth = 11
      }
      console.log(this.curMonth)
    },
    nextMonth(){

      this.curMonth = this.curMonth +1
      if (this.curMonth  >  11) {
        this.curYear ++
        this.curMonth = 0
      }
      
    }
  }
}
</script>
