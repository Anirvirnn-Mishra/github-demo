/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
  var pFirst= $("p:first");
  // get
  console.log(pFirst.text());
  console.log(pFirst.html());

  //set
  pFirst.text("<em>something is changed</em>");// just simply paste the text
  pFirst.html(pFirst.text()+"<em>something is changed</em>");// parses html and then paste it


  

});