// var form = document.getElementsByClassName('login-signup-form');
// var inputs = document.querySelectorAll(''); 
// console.log(form);
// console.log(inputs)

// var validateForm = () => {
//     console.log('sicñor');
// }

// inputs.forEach((input) => {
//     input.addEventListener('blur', validateForm);
// });


function validateInputEmail(input){
    var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
     return validateEmail.test(input);
}

window.onload = function(){

  var errorMenssages = document.getElementsByClassName('error');
  var email = document.getElementsByClassName('email');
  var errorMail = errorMenssages[0];

  function showMailError(){
    if (validateInputEmail(email.value) == false){
      errorMail.style.visibility = 'visible';
      email.classList ='invalid-input';
    }
  }
email.addEventListener('blur', showMailError);

  function hideMailError(){
  errorMail.style.visibility ='hiden';
  email.classList = 'invalid-input'

  }
}