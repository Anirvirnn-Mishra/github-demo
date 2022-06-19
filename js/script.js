/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
  var galImage= $(".gallery").find("img").first();
  var images=["images/laptop-mobile_small.jpg",
  "images/laptop-on-table_small.jpg",
  "images/people-office-group-team_small.jpg"];
  var i=0;
  setInterval(function () 
  {
    i= (i+1)%images.length;
    galImage.fadeOut(
      function () 
      {
        $(this).attr("src",images[i]); 
         $(this).fadeIn(1000); });
         
         console.log(i);

  }
  ,2000);
  var someP=$("p").find("a").first();
  setInterval(function () 
  {
    i= (i+1)%images.length;
    someP.fadeOut(
      function () 
      {
        $(this).attr("href",images[i]); 
         $(this).fadeIn(1000); });
         
         console.log(i);

  }
  ,2000);

});