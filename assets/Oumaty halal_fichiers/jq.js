 (function($,W,D)
   { 
       var JQUERY4U = { };
   
       JQUERY4U.UTIL =
       { 
           setupFormValidation: function()
           { 
               //form validation rules
               $("#contactForm").validate({ 
              rules: {
                    nom: {
                        required: true
                    },

                 
                    email: {
                        required: true,
                        email: true
                    },
                 
                },
                messages: {
               
                    email: "",
                    nom: "",
                    
                },
                 
   
               submitHandler: function(form) {
               $("#sub").fadeOut("slow");
               $('.form-message-c').html('Encours d\'envoi...').fadeIn("slow");
   
   
               $("#contactForm").ajaxSubmit({
                   type:"POST",
                   data: $(form).serialize(),
                   url:base_url+"contact/send",
                  
                 success: function(res) {
                   if(res!= 1){
                     $('.form-message-c').html("error , Actualiser cette page!!"); 
                     $("#sub").fadeIn("slow");
   
                   }else{
                 $('.form-message-c').html("Email a été Envoyer").fadeIn("slow"); 
               
                   
               
                    setTimeout( "$('#sub').fadeIn('slow');",2000 );
                    clear_Inputs();
                  
                     }
                   },
   
                   error: function() {
                     
                       $('#email_form').fadeTo( "slow", 0.15, function() {
                           $('#error').fadeIn();
                       });
                   }
               });
           }
               });
           }
       }
   
       //when the dom has loaded setup form validation rules
       $(D).ready(function($) { 
           JQUERY4U.UTIL.setupFormValidation();
       });
   
   })(jQuery, window, document);
   
 
    function clear_Inputs(data){
   $("#contactForm :input").each(function(){
   $(this).val('');
   $('#sub').attr('value',"Envoyer")
   });
   }




   $(function() {
    $('#newsletter').validate({

        rules: {  
      

      
            email_news: {
                required: true,
                email: true
            },

           
        
        },

         

        messages: {
               
            email_news:  "",
               
                  
        },
           submitHandler: function(form) {
               $("#subc").fadeOut("slow");
               $('.form-message-cc').html('Encours d\'envoi...').fadeIn("slow");
   
   
               $("#newsletter").ajaxSubmit({
                   type:"POST",
                   data: $(form).serialize(),
                   url:base_url+"contact/sendletter",
                  
                 success: function(res) {
                   if(res!= 1){
                     $('.form-message-cc').html("error , Actualiser cette page!!"); 
                     $("#subc").fadeIn("slow");
   
                   }else{

                 $('.form-message-cc').html("Email a été Envoyer").fadeIn("slow"); 
               
                   
               
                    setTimeout( "$('#subc').fadeIn('slow');",2000 );
                    $("#email_news").val('');
                    
                  
                     }
                   },
   
                   error: function() {
                     
                       $('#newsletter').fadeTo( "slow", 0.15, function() {
                           $('#error').fadeIn();
                       });
                   }
               });
           }
    });
});