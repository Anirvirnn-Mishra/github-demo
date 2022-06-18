/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
  var link=$("#linkk");
  console.log(link.attr("href"));// retireve href attribute
  console.log(link.attr("title"));// retireve title  attribute but undefined
  link.attr("href","/mewo-mewo");// set href attribute

  // do not use in boolean attributes like disabled, checked etc
  var checkbox= $("#check");
  checkbox.prop("checked",true);
  checkbox.prop("disabled",true);

  // val to get values of the elements
  console.log($("input[type=email]").val());// get
  $("input[type=email]").val("everythong@akndnv.com");// set
 


  // these all handle one at a time not all elements
});