/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {

  $("#btn-click").click(function (e) { // e is event obj
    $(this).text("CLicked");
    alert("button click kyu kara?");
    console.log(e.ctrlKey);// PRESSED WITH CTRL KEY?
    console.log(e.shiftKey);// PRESSED WITH SHIFT KEY?


    
  });
  // ADDING CLICK LISTENER
  $(".red-box").click(function (e) { 
    e.preventDefault();
    $(this).fadeTo(1000,0.5);
  });
  // triggering event listener
  $(".red-box").click();

});