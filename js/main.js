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
$(document).ready(function() {   
    $('a[name=modal]').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
    $(id).fadeIn(600); 
    });
    $('.window .close').click(function (e) { 
    e.preventDefault();
    $('.window').hide();
    }); 
   });  