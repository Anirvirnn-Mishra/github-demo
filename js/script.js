/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
  //$("#list").find("li").filter(":even").css("font-weight","bold");// filtered
  // $("#list").find("li").filter(function (index) 
  //   {
  //     if(index===0 )
  //     {
  //       return true;
  //     }

  //   }
  //   ).css("font-weight","bold");// filtered
    $("li").eq(3).css("font-weight","bold");// filtered
    $("li").eq(-2).css("font-weight","bold");// filtered
    $("li").not(3).css("font-style","italic");// opp of filter


});