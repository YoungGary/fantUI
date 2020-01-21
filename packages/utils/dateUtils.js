const getYearMonthDay = (date)=>{
    // console.log(typeof date)
    if (typeof date === 'object') {
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate()
        return {year,month,day} 
    }else if(typeof date === 'string' && date !== ''){
        let strTime = date;    //字符串日期格式             
        let datedate = new Date(Date.parse(strTime.replace(/-/g,  "/")));  
        console.log(date)
        let year = datedate.getFullYear();
        let month = datedate.getMonth();
        let day = datedate.getDate()
        return {year,month,day}    
    }else if(date === ''){
        let date = new Date()
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate()
        return {year,month,day} 
    }
   
}

const getDate = (year,month,day)=>{
    return new Date(year,month,day)
}

// const dateFormat2 = (fmt, date)=> {
//     let ret;
//     let opt = {
//         "Y+": date.getFullYear().toString(),        // 年
//         "m+": (date.getMonth() + 1).toString(),     // 月
//         "d+": date.getDate().toString(),            // 日
//         "H+": date.getHours().toString(),           // 时
//         "M+": date.getMinutes().toString(),         // 分
//         "S+": date.getSeconds().toString()          // 秒
//         // 有其他格式化字符需求可以继续添加，必须转化成字符串
//     };
//     for (let k in opt) {
//         ret = new RegExp("(" + k + ")").exec(fmt);
//         if (ret) {
//             fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
//         }
//     }
//     return fmt;
// }



const dateFormat = function(fmt,date){
    var o = {
      "M+" : date.getMonth()+1,                 //月份
      "d+" : date.getDate(),                    //日
      "h+" : date.getHours(),                   //小时
      "m+" : date.getMinutes(),                 //分
      "s+" : date.getSeconds(),                 //秒
      "q+" : Math.floor((date.getMonth()+3)/3), //季度
      "S"  : date.getMilliseconds()             //毫秒
    };
  
    if(/(y+)/.test(fmt)){
      fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
          
    for(var k in o){
      if(new RegExp("("+ k +")").test(fmt)){
        fmt = fmt.replace(
          RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
      }       
    }
  
    return fmt;
  }
export {
    getYearMonthDay,
    getDate,
    dateFormat
}