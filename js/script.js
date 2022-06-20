/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {

  $("a").addClass("fancy-link");// changed class of an element

  $("div").addClass(function (index,currentClass) { 
    if (currentClass==="dummy") {
      return "red-box";
      
    } 
   });
   $(".red-box").removeClass().addClass("yellow-box");



});