  
$(window).bind("load", function() {
   
$('.loadscreen').hide();
    
$('body').css('overflow', 'auto');


$(window).scroll(function(){
    
    
    
      $('body').animate({
    scrollTo: $(".top").offset().top
}, 1000);
    
     $('.header').css('display', 'block');
     $('.header').delay(3000).fadeIn('slow');
    
 
});


    


//Fade In
$('.fadein').hide();


    
    
    
    
$('.1').hover(function(){
    
    if( $(window).width() > 580){
        

  $('.1 img').fadeOut([600]); 
      

$(' .1').fadeIn([600]);
 
  }
});
    
    
    
    
$('.2').hover( function(){
if( $(window).width() > 580){
    

       $('.2 img').fadeOut([600])
 
$(' .2').fadeIn([600]);
 }
});

    
    
    
    
$('.3').hover( function(){
if( $(window).width() > 580){
    

       $('.3 img').fadeOut([600])
 
$(' .3').fadeIn([600]);
 }
});

    
    
    
    
$('.4').hover( function(){
if( $(window).width() > 580){
    

       $('.4 img').fadeOut([600])
 
$(' .4').fadeIn([600]);
 }
});

    
    
    
    
$('.5').hover( function(){
if( $(window).width() > 580){
    

       $('.5 img').fadeOut([600])
 
$(' .5').fadeIn([600]);
 }
});

    
    
    
    
$('.6').hover( function(){
if( $(window).width() > 580){
    

       $('.6 img').fadeOut([600])
 
$(' .6').fadeIn([600]);
 }
});










$('.mobile-first').mouseleave(
  function(){
      $(' .1 h1 , .1 img').fadeIn([600])
       $(' .2 h1 , .2 img').fadeIn([600])
        $(' .3 h1 , .3 img').fadeIn([600])
         $(' .4 h1 , .4 img').fadeIn([600])
        $(' .5 h1 , .5 img').fadeIn([600])
       $(' .6 h1 , .6 img').fadeIn([600]) 
$('.fadein').fadeOut([600])
 

});

 });  
