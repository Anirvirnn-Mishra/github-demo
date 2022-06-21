/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
//delegated events are the events that help in assign jq to new added Elements

// can be used in todo items,, thousand table rows etc
$("#content").on("click","p",function (param) {$(this).slideToggle();  })
$("#content").append("<p>new added</p>");

$("#content").on("mouseenter","ul",
function(e){
  
  $(this).css("font-weight","bold")});
$("#content").on("mouseleave","ul",
function(e){
  
  $(this).css("font-weight","normal")});

});
