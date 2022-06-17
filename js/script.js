$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
   $(".red-box").fadeTo(2000 , 0.2);
   $(".red-box").fadeOut(2000 );// removes the object(display:none) but 
   $(".green-box").fadeTo(1000 , 0.5);///fade to 0 keeps the element there but invisible
   $(".blue-box").fadeTo(500 , 0.8);
   $(".red-box").fadeToggle();
   $(".red-box").fadeToggle();

   
});