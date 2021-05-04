
// 传进来一个date 类型的 参数 或者是个字符串  返回 年 月 日的数字
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
        // console.log(date)
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