/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {

  // focus and blur
  var inputs=$("input:text, input:password, textarea, input[type=email], input[type=checkbox]");
  inputs.focus(function () { $(this).css("box-shadow","0 0 4px #666877"); });
  inputs.focus(function (e) {
    $(this).css("box-shadow","0 0 4px #666"); 
  });

  inputs.blur(function () {console.log($(this).length<3);
    if($(this).val.length<3)
    {
      $(this).css("box-shadow","0 0 4px #ff0000");

    }
    else
     {$(this).css("box-shadow","none");
     $(this).css("box-shadow","0 0 4px #00ff00");
  }});
});
