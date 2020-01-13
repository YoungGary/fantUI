<template>
  <div class="container">
      <div id=NewsToolBox></div>
      <div class="singlePanel" v-for="item,index in lists" :key="index" @click="copy(item.icon)">
          <fa-icon :name="item.icon" size="40" color="black"/>
          <p>{{item.icon}}</p>
      </div>
      
  </div>
</template>
<script>
export default {
  data () {
    return {
        lists:[
            {icon:'volume'},
            {icon:'QA'},
            {icon:'sleepmode'},
            {icon:'xiamimusic'},
            {icon:'voiceprint'},
            {icon:'togo'},
            {icon:'voiceshopping'},
            {icon:'tipsmoney'},

            {icon:'schedule'},
            {icon:'scanread'},
            {icon:'voicememo'},
            {icon:'phonebill'},
            {icon:'queenmirror'},
            {icon:'suggestion'},
            {icon:'MTR'},
            {icon:'maskclock'},

            {icon:'respond'},
            {icon:'instruction'},
            {icon:'scanQR'},
            {icon:'skintest'},
            {icon:'stepback'},
            {icon:'paymentlife'},
            {icon:'huoyan'},
            {icon:'search'},

            {icon:'mutemode'},
            {icon:'groupctrl'},
            {icon:'geniehuoyan'},
            {icon:'evitarehighway'},
            {icon:'kidslock'},
            {icon:'mirrorlightctrl'},
            {icon:'lightctrl'},
            {icon:'message'},

            {icon:'messagewhite'},
            {icon:'masterctrl'},
            {icon:'callingrobort'},
            {icon:'infopersonal'},
            {icon:'marks'},
            {icon:'housecare'},
            {icon:'geniecommunity'},
            {icon:'info'},

            {icon:'genieSEC'},
            {icon:'faimlyalbum'},
            {icon:'highwayfirst'},
            {icon:'genieclock'},
            {icon:'evitarepayment'},
            {icon:'evitaretraffic'},
            {icon:'addmeteo1'},
            {icon:'entertainmentmark'},

            {icon:'geniecalling'},
            {icon:'clock'},
            {icon:'close1'},
            {icon:'cancel1'},
            {icon:'cancelwhite'},
            {icon:'address2'},
            {icon:'addresslist1'},
            {icon:'checkmore1'},

            {icon:'back'},
            {icon:'bookresource'},
            {icon:'addresslist'},
            {icon:'checkmore'},
            {icon:'addmeteo'},
            {icon:'address1'},
            {icon:'problem'},
            {icon:'random'},

            {icon:'wifi'},
            {icon:'movie'},
            {icon:'privacy_closed'},
            {icon:'payment'},
            {icon:'nickname'},
            {icon:'voice'},
            {icon:'distance'},
            {icon:'eye_protection'},

            {icon:'mute'},
            {icon:'hangup'},
            {icon:'video1'},
            {icon:'call'},
            {icon:'withdraw'},
            {icon:'callout'},
            {icon:'th_internet'},
            {icon:'telephone'},

            {icon:'visible'},
            {icon:'refresh'},
            {icon:'video'},
            {icon:'timeout'},
            {icon:'next'},
            {icon:'relationship'},
            {icon:'phone'},
            {icon:'safety'},

            {icon:'night'},
            {icon:'restore'},
            {icon:'locking'},
            {icon:'turnvoice'},
            {icon:'shopping'},
            {icon:'history'},
            {icon:'top'},
            {icon:'vision'},

            {icon:'upward'},
            {icon:'soundsize'},
            {icon:'collection'},
            {icon:'layered'},
            {icon:'Incoming_call'},
            {icon:'prompt'},
            {icon:'singlecycle'},
            {icon:'save'},

            {icon:'music'},
            {icon:'increase'},
            {icon:'Privacy'},
            {icon:'previous'},
            {icon:'selection'},
            {icon:'refuse'},
            {icon:'nosignal'},
            {icon:'close'},

            {icon:'protect'},
            {icon:'face'},
            {icon:'answer'},
            {icon:'information'},
            {icon:'conversation'},
            {icon:'privac_open'},
            {icon:'brightness1'},
            {icon:'play'},

            {icon:'privacy'},
            {icon:'prevent'},
            {icon:'agreement'},
            {icon:'guarantee'},
            {icon:'bottom'},
            {icon:'nextsong'},
            {icon:'loop'},
            {icon:'favoriteslist'},

            {icon:'home'},
            {icon:'musiclist'},
            {icon:'brightness'},
            {icon:'down'},
            {icon:'cancel'},
            {icon:'bluray'},
            {icon:'settings'},
            {icon:'child1'},

            {icon:'edit'},
            {icon:'DND_mode'},
            {icon:'delete'},
            {icon:'audio'},
            {icon:'child'},
            {icon:'addto'},
            {icon:'bluetooth_link'},
            {icon:'course'},

            {icon:'camera'},
            {icon:'bluetoothon'},
            {icon:'bluetoothoff'},
            {icon:'address'},
        ]
    }
  },
  components:{
    
  },
  mounted () {
    import('./iconfont.js').then(icon => {})
  },
  methods:{
      copy(item){
          console.log(item)
           var flag = this.copyText(item); //传递文本  
           console.log(flag)
           if (flag) {
               this.$showToast({
                   message:`成功复制${item}到剪切板`,
                   type:'success',
                   zIndex:1000
               })
           }else{
                this.$showToast({
                   message:'复制失败',
                    type:'danger',
                   zIndex:1000
               })
           }
          
      },
      copyText(text) {
            var textarea = document.createElement("textarea"); //创建input对象
            // var currentFocus = document.activeElement; //当前获得焦点的元素
            var toolBoxwrap = document.getElementById('NewsToolBox'); //将文本框插入到NewsToolBox这个之后
            toolBoxwrap.appendChild(textarea); //添加元素
            textarea.value = text;
            textarea.focus();
            if (textarea.setSelectionRange) {
                textarea.setSelectionRange(0, textarea.value.length); //获取光标起始位置到结束位置
            } else {
                textarea.select();
            }
            try {
                var flag = document.execCommand("copy"); //执行复制
            } catch (eo) {
                var flag = false;
            }
            toolBoxwrap.removeChild(textarea); //删除元素
            // currentFocus.focus();
            return flag;
        }
  }
}
</script>
<style lang="scss" scoped>
@mixin flexColumnCenter{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    cursor: auto;
}
.singlePanel{
    width: 140px;
    height:140px;
    border: 1px solid #3eaf7c;
    margin-right: 20px;
    margin-bottom: 20px;
    transition: all 0.2s;
    cursor: pointer;
    @include flexColumnCenter();
    p{
        cursor: pointer;
    }
    &:hover{
        transform: scale(1.1);
        border:1px solid #3eaf7c;
        p{
            color: #3eaf7c
        }
    }
}

</style>
