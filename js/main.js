$(document).ready(function() {
   $(".header__toggle").click(function() {
     $(this).toggleClass("active");
     $('.columns__container').removeClass('hide');
     $('.header__list, .header__popup').slideToggle(100, function(){
       if($(this).css('display') === "none"){
         $(this).removeAttr('style');
       } else {
         $('.columns__container').addClass('hide');
      }		
      return false;
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