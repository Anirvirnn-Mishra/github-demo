/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
  $("#list").find("li").css("background-color","#00aaff");
  $("#list").children("li").css("background-color","#aaaaff");
  $("#list").parents("div").css("color","#ee2222"); 
  $("#list").siblings("p").css("color","#00ff00");// same level
  $("#list").prev("p").css("background-color","yellow");
  $("#list").next("p").css("background-color","yellow");
  


});