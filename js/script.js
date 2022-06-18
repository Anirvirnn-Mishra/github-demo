/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
  // replaced with
  $("ul ul li").replaceWith("mew <br>");
  $(".red-box, .green-box").replaceWith("<div class='blue-box'>more blue box</div>");
  $("<div class='green-box'>green returns</div>").replaceAll(".blue-box");
  

  

  

});