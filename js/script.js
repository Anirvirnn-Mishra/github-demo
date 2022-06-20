/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {

  var gallery=$(".gallery");
  var images=["images/laptop-mobile_small.jpg","images/laptop-on-table_small.jpg","images/people-office-group-team_small.jpg"];
  gallery.data("availableImages",images);
  gallery.data("name","something ");
  
  console.log(gallery.data());// returns all data associated
  gallery.removeData("name");// name data does not exist anymore

  console.log($("p:first").data("additional-data"));// prints the property





  // var some=gallery.detach();
  // $("body").prepend(some);
  

});