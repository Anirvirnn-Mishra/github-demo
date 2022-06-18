/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
  // as a child
   $("ul ul:last").append("<li>last subitem</li>");
   $("<li>External item</li>").appendTo("ul ul:first");
   $("<li>External item1</li>").prependTo("ul ul:first");
   $("ul ul:last").prepend("<li>last subitem1</li>");
   $("#content").prepend("<h2>before content div</h2>");

   // as a sibling
    
    
    $(".red-box").before("<div class='yellow-box'>Yellow</div>");
    $(".red-box").after(function () { 
      return "<div class='yellow-box'>Yellow</div>";
     });
     $(".yellow-box").after($(".blue-box"));// moves the inner element if only one call else it clones

  

});