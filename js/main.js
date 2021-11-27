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

$(document).ready(function(){
   $('.columns__add_hide').click(function(e){
      e.preventDefault();
      let $arr = $(this);
      $arr.toggleClass('hide'); 
      $arr.parents('.columns__link').find('.columns__text, .columns__all_hide, .columns__upload_hide').toggleClass('hide')
   });				
});

(function($) {
   $(function() {
      $("ul.columns__list").on("click", "li:not(.active)", function() {
      $(this)
         .addClass("active")
         .siblings()
         .removeClass("active")
         .closest("div.columns__road")
         .find("div.columns__window")
         .removeClass("active")
         .eq($(this).index())
         .addClass("active");
      });
   });
})(jQuery);

$(document).ready(function(){
   $('.columns__all').click(function(){
      $('.columns__event_hide').toggleClass('hide');	
      if ($('.columns__event_hide').hasClass('hide')) {
         $('.columns__all').addClass('hide');
      } else {
         $('.columns__event_hide').removeClass('hide');
         $('.columns__all').removeClass('hide');
      }		
      return false;
   });				
});