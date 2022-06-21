/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
  var gal= $(".gallery").find("img");
  gal.css("width","33%").css("opacity","0.7");
  gal.mouseenter(function () { 
    $(this).stop().css("opacity","1");
  });
  gal.mouseleave(function () { 
    $(this).stop().css("opacity","0.7");
  });
  gal.click(
    function()
    {
      
      var source= $(this).attr("src");
      var img= $("<img>").attr("src",source).css("width","100%");
      $(".lightbox").empty().append(img).fadeIn(1000);

    });
    $(".lightbox").click(
      function()
      {
        
        $(".lightbox").stop().fadeOut();
  
      });

});
