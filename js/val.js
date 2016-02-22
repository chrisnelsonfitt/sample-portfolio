
(function($){

$('form').on('submit', function(){
    
     var email = $("#email");
     var name = $(".name");
     var errors = false;
     var emailReg = /^([a-zA-Z0-9\\.]+)@([a-zA-Z0-9\\-\\_\\.]+)\.([a-zA-Z0-9]+)$/i;
     var error_dialog =  $('.error-message').load("error.html");
    var success_dialog = $('.success-message').load("error.html")
  
      
    
  $(".errors").remove();
  //refresh error messages on submit
    
    
  if (!emailReg.test(email.val()) || name.val() === ""){
    error_dialog;
    errors = true;
  } 

   
  return !errors;
  success_dialog;
    
});


})(jQuery);

    




