/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
  
  $("form").children().not("input:text , textarea, br").remove();
  var detachedItem= $("li").detach();// preserves the attached event handelers and otther data

  $("#content").append(detachedItem);  

  $("p").empty();// does not remove p but empty else everything including children

});