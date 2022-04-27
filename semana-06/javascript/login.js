function emailValidation(email){
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return validateEmail.test(email);
}

function passwordValidation (password){
  var validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
  return  validatePassword.test(password);
}

window.onload = function(){
var email = document.getElementById('email');
var errorEmail = document.getElementById('email-error');
  email.addEventListener("blur", emailMenssage);
  function emailMenssage(){
    if (emailValidation(email.value) == false) {
      return errorEmail.style.visibility = "visible";
   }
  }
  email.addEventListener("focus", function() {
  errorEmail.style.visibility = "hidden";
})

var password = document.getElementById('password');
var errorPassword = document.getElementById('password-error');
  password.addEventListener("blur", passwordMenssage);
  function passwordMenssage(){
    if (passwordValidation(password.value) == false) {
      return errorPassword.style.visibility = "visible";
   }
  }
  password.addEventListener("focus", function() {
  errorPassword.style.visibility = "hidden";
})

var loginButton = document.getElementById('login-button');
function login() {
  alert ("Emai or password are invalid")
}
loginButton.addEventListener('click', login);

var forgotPassword = document.getElementById('forgot-password');
function forgotYorPasword (){
  alert("New password has been sent to your email")
}
forgotPassword.addEventListener('click', forgotYorPasword);
}

