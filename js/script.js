/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {

  function ForImageSwap() {
  

    var images=["images/laptop-mobile_small.jpg","images/people-office-group-team_small.jpg","images/laptop-on-table_small.jpg"];
      i=(i+1)%images.length;
      $(this).fadeOut(function () {
      $(this).attr("src",images[i]).fadeIn();}); 
    
      
    }
 
var i =0;
// });
$(".gallery").find("img").first().on("click", ForImageSwap);



});
