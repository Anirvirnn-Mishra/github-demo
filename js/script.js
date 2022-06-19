/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {

  $("#gallery").css("display","none");
  var redBox= $(".red-box");
  redBox.css("width")// returns 80px
  redBox.width();// returns 80
redBox.width(1111);// set it to 1111
$("p").css("font-size", "92px");
$("p").css("font-size", "+=12px");// relative width , increase
var props=$("p").css(["font-size", "font-weight"]);// all properties as js object
redBox.css("user-select","none");
redBox.css("user-select",function () {return "none";  });


});