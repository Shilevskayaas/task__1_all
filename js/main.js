$(document).ready(function() {
   $(".header__toggle").click(function() {
     $(this).toggleClass("active");
     $('.header__list').slideToggle(300, function(){
       if($(this).css('display') === "none"){
         $(this).removeAttr('style');
       }
     });
   });
 });
 