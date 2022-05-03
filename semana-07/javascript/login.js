function emailValidation(email){
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return validateEmail.test(email);
}

function passwordValidation (string){
  var abc=false;
  var num=false;
  for (var index = 0; index < string.length; index++) {
      var element = string[index];  
       if (isNaN(element)==true) {
       abc=true;
       }
       if(isNaN(element)==false){
       num=true;
       } 
      return abc && num;
      }

} 

function validatePassword8(string){
  long = false;
  if (string.length>=8) {
      longEnough=true;      
  }      
  return long;
}  

window.onload = function(){

    // MESAJES DE ERROR PARA MAIL
  var email = document.getElementById('email');
  var errorEmail = document.getElementById('email-error');
  email.addEventListener("blur", emailmessge);
  function emailmessge(){
    if (!emailValidation(email.value)) {
      errorEmail.style.visibility = "visible";
    }
  }

  function emailMessageFocus (){
      errorEmail.style.visibility = "hidden"; 
    }
    email.addEventListener("focus", emailMessageFocus)

 // MESAJES DE ERROR PARA PASSWORD
  var password = document.getElementById('password');
  var errorPassword = document.getElementById('password-error');
  password.addEventListener("blur", passwordmessge);
  function passwordmessge(){
    if (!passwordValidation(password.value)) {
      errorPassword.style.visibility = "visible";
    }
  }
  function passwordMessageFocus (){
    errorPassword.style.visibility = "hidden"; 
  }
  email.addEventListener("focus", passwordMessageFocus)

  //***********AVISOS ERROR******************** */
  var loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', onSubmit);
  function onSubmit() {
    if ( emailValidation(email.value) && passwordValidation(password.value)){
      alert("funciona");
    } else {
        if (!emailValidation(email.value)) {
          alert("no funciona mail");
        }
        if (!passwordValidation(password.value)){
          alert("no funciona password");
        }
      }
  }
  
  var forgotPassword = document.getElementById('forgot-password');
function forgotYorPasword (){
  alert("New password has been sent to your email")
}
forgotPassword.addEventListener('click', forgotYorPasword);
}



