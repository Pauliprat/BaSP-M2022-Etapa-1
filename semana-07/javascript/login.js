function emailValidation(email){
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return validateEmail.test(email);
}

function passwordValidation (password){
  return validateHasNumber(password) && validateHasLetter(password) && validateLength(password);
} 

function validateHasNumber(password){
  for (var i = 0; i < password.length; i++){
    if (isNaN(password[i])){
      return true;
    }
  }
  return false;
}

function validateHasLetter(password){
  for (var i = 0; i < password.length; i++){
    if (!isNaN(password[i])){
      return true;
    }
  }
  return false;
}

function validateLength(password){
  return password.length>=8;
}

function login(email, password){
  var loginURL = "https://basp-m2022-api-rest-server.herokuapp.com/login";
  fetch(loginURL + "?email=" + email + "&password=" + password)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      alert(data.msg);
    });  
}

window.onload = function(){

  // MESAJES DE ERROR PARA MAIL
  var email = document.getElementById('email');
  var errorEmail = document.getElementById('email-error');

  email.addEventListener("blur", function(){
    if (!emailValidation(email.value)) {
      errorEmail.style.visibility = "visible";
    }
  });
  email.addEventListener("focus", function(){
    errorEmail.style.visibility = "hidden"; 
  })

  // MESAJES DE ERROR PARA PASSWORD
  var password = document.getElementById('password');
  var errorPassword = document.getElementById('password-error');
  
  password.addEventListener("blur", function(){
    if (!passwordValidation(password.value)) {
      errorPassword.style.visibility = "visible";
    }
  });
  password.addEventListener("focus", function(){
    errorPassword.style.visibility = "hidden"; 
  })

  // AVISOS ERROR
  var loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', function() {
    if (emailValidation(email.value) && passwordValidation(password.value)){
      login(email.value, password.value);
    } else {
      if (!emailValidation(email.value)) {
        alert("Invalid email");
      }
      if (!passwordValidation(password.value)){
        alert("Invalid password");
      }
    }
  });

  var forgotPassword = document.getElementById('forgot-password');
  forgotPassword.addEventListener('click', function(){
    alert("New password has been sent to your email")
  });

}