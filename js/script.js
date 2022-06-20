/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {

$("#btn-click").hover(function () {
    // over
    $(this).text("hoverd");
    
  }
);
// alternate 1
// $(".blue-box").hover(function () {
//     // over
//     $(this).fadeTo(200,0.5);
//     $(this).text("Hovered");
//   }, function () {
//     // out
//     $(this).fadeTo(200,1);
//     $(this).text("Blue");
//   }
// );

// alternate 2
// $(".blue-box").mouseenter(function () { 
//   $(this).fadeTo(200,0.5);
//   $(this).text("Enter");
//  });
// $(".blue-box").mouseleave(function () { 
//   $(this).fadeTo(200,1);
//   $(this).text("Leave");
//  });/// this and above might lag when called fast enough that is why below is perfect soln with alternat1 also



  $(".blue-box").mouseenter(function () {
    $(this).stop().fadeTo(2000, 0.5);
    $(this).text("Enter");
  });
  $(".blue-box").mouseleave(function () {
    $(this).stop().fadeTo(2000, 1);
    $(this).text("Leave");// either this or alternate 1 with stop()

});

});