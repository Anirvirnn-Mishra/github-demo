/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
  // key down is key clicked , key up is key released
  // keypress is evil!
   $("html").keydown(
    function (param) 
    {
       console.log(param.which);// LOGS ASCII 
       console.log(param.key);// LOGS KEY LETTER
       console.log(param.keyCode);// LOGS ASCII
       //if(param.key==="ArrowRight"){$(".blue-box").stop().animate({"margin-left":"+=5px"})}// lags too much 
       if(param.key==="ArrowRight"){$(".blue-box").stop().css("margin-left","+=5px")} 
       if(param.key==="ArrowLeft"){$(".blue-box").css("margin-left","-=5px")}

    });


});
