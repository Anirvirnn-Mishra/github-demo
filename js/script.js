$(function () {
  // jQuery goes here...

  $(".red-box").animate (
    {
      marginLeft:"200px",
      opacity:"0",
      display:"none",
      height:"50px",
      width:"50px",
      marginTop:"25px"
    },1000);
    
  $(".red-box").animate (
    {
      "margin-left":"0px",
      "opacity":"0",
      "display":"none"
    },1000);
    $("p").animate(
      {
        fontSize:"20px"
      }
      ,1000)
});