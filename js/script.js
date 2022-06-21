/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
  // PASSING ADDITIONAL DATA TO EVENTS

  $("#btn-click").click(
  {
    user:"meow",
    domain:"meowed.com",
    "something":"someanswer"

  },someFunc);// no neeed to pass any data
function someFunc(params) { console.log(params.data.user) ; } 

});
