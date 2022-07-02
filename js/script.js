/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {

 // change event
 $("#check").change(function () { 
  var ichecked=$(this).is(":checked");
  if(ichecked){
    $(this).add("label[for='check']").css("box-shadow","0 0 4px #181")
  }
  else
  $(this).add("label[for='check']").css("box-shadow","0 0 4px #811")

  })
});
