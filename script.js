$(document).ready(function() {
    $("#do_SignUp").click(function() { 
       closeLoginInfo();
       $(this).parent().find('span').css("display","none");
       $(this).parent().find('span').removeClass("i-save");
       $(this).parent().find('span').removeClass("i-warning");
       $(this).parent().find('span').removeClass("i-close");
       
        var proceed = true;
        $("#SignUp_form input").each(function(){
            
            if(!$.trim($(this).val())){
                $(this).parent().find('span').addClass("i-warning");
            	$(this).parent().find('span').css("display","block");  
                proceed = false;
            }
        });
       
        if(proceed)
        {
            $(this).parent().find('span').addClass("i-save");
            $(this).parent().find('span').css("display","block");
        }
    });
    
  
    $("#SignUp_form input").keyup(function() { 
        $(this).parent().find('span').css("display","none");
    });
 
  openSignUpInfo();
  setTimeout(closeSignUpInfo, 1000);
});

function openSignUpInfo() {
    $(document).ready(function(){ 
    	$('.b-form').css("opacity","0.01");
      $('.box-form').css("left","-37%");
      $('.box-info').css("right","-37%");
    });
}

function closeSignUpInfo() {
    $(document).ready(function(){ 
    	$('.b-form').css("opacity","1");
    	$('.box-form').css("left","0px");
      $('.box-info').css("right","-5px"); 
    });
}

$(window).on('resize', function(){
      closeSignUpInfo();
});

const userName =document.getElementById("user");
console.log(userName);

const passWord=document.getElementById("pass");
console.log(passWord);

const stateChoice=document.getElementById("stateInput");
console.log(stateChoice);

const submitBtn= document.getElementById("do_SignUp");
console.log(submitBtn);

const outPut= document.getElementById("output");
console.log(outPut);

submitBtn.addEventListener("click", function(){

 outPut.textContent = `Username: ${userName}, Password: ${passWord}, State: ${stateChoice}`;
});