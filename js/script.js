/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
// on("click",function(){...})
// $("html").on("click keydown", function (e/**optional event arg */) {
//   //console.log($(e.offsetX));
//   console.log(e.key );
// });// calls everytime click or key is pressed

var i =0;
var images=["images/laptop-mobile_small.jpg","images/people-office-group-team_small.jpg","images/laptop-on-table_small.jpg"];
// $(".gallery").on("click", function () {
//   i=(i+1)%images.length;
//   $(this).find("img").first().attr("src",images[i]).fadeIn(200000); 
//   //$(this).find("img").first().stop().attr("src",images[i]); // either can be usefd
// });
$(".gallery").find("img").first().on("click", function () {
  i=(i+1)%images.length;
  $(this).fadeOut(function () {
  $(this).attr("src",images[i]).fadeIn();}); 
  //$(this).find("img").first().stop().attr("src",images[i]); // either can be usefd
});



});