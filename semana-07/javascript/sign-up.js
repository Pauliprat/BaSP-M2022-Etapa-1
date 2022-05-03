function validateLetters(string) {
    var letters = false;
    for (var i = 0; i < string.length; i++ ) {
        var element = string[i];
        if (!isNaN(element)) {
            letters = true;
        }
    }  return letters
        
}
function validateNoLetters(string){
    var noletters = true;
    for (var i = 0; i < string.length; i++) {
        var element = string[i];  
         if (!isNaN(element)) {
         noletters  = false;
         }
    }     
    return noletters;
} 

function validateLenght3(string) {
    long = false;
    if (string.length>=3) {
        long = true;
    }
    return long;
}

function validateLenght7(string) {
    long = false;
    if (string.length>=7) {
        long = true;
    }
    return long;
}

function validateLenght8(string) {
    long = false;
    if (string.length>=8) {
        long = true;
    }
    return long;
}

function validateLenght10(string) {
    long = false;
    if (string.length == 10) {
        long = true;
    }
    return long;
}
function validateLenght4Or5 (string) {
    long = false;
    if (string.length == 4 || string.length == 5) {
        long = true;
    }
    return long;
}

function emailValidation(email){
    var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return validateEmail.test(email);
}

function validatePasword(string) {
    var letters = false;
    var num = false;
    for (var i = 0; i > string.length; i++) {
        var element = string[i];
        if (!isNaN(element)){
            letters++;
        }
         else if (!isNaN(element)){
            num++;
        }
    }
    return letters && num;
}

window.onload = function(){

    var userName = document.getElementById("name");
    var nameError = document.getElementById("name_error");
    
    userName.addEventListener("blur", validateName)
    function validateName() {
        if (validateLetters(userName.value) || !validateLenght3(userName.value)){
            nameError.style.visibility = "visible";
        }
        nameError = userName.value;
    }

    userName.addEventListener("focus", validateNameFocus)
    function validateNameFocus(){
        nameError.style.visibility = "hidden";
    }

    var lastName = document.getElementById("last_name");
    var lastNameError = document.getElementById("last_name_error");

    lastName.addEventListener("blur", validateLastName)
    function validateLastName(){
        if(validateLetters(lastName.value) || !validateLenght3(lastName.value)){
            lastNameError.style.visibility ="visible";
        }
        lastNameError = lastName.value;
    }
    lastName.addEventListener("focus",validateLastNameFocus)
    function validateLastNameFocus (){
        lastNameError.style.visibility ="hidden";
    }

    var idNumber = document.getElementById("ID");
    var idNumberError = document.getElementById("Id_error");

    idNumber.addEventListener("blur", validateId)
    function validateId(){
        if(validateNoLetters(idNumber.value) || !validateLenght7(idNumber.value)){
            idNumberError.style.visibility ="visible";
        }
        idNumberError = idNumber.value;
    }
    idNumber.addEventListener("focus",validateIdFocus)
    function validateIdFocus (){
        idNumberError.style.visibility ="hidden";
    }

    var phoneNumber = document.getElementById("phone_number");
    var phoneNumberError = document.getElementById("phone_error");

    phoneNumber.addEventListener("blur", validatePhone)
    function validatePhone(){
        if(validateNoLetters(phoneNumber.value) || !validateLenght10(phoneNumber.value)){
            phoneNumberError.style.visibility ="visible";
        }
        phoneNumberError = phoneNumber.value;
    }
    phoneNumber.addEventListener("focus", validateLattersFocus)
    function validateLattersFocus (){
        phoneNumberError.style.visibility ="hidden";
    }

    var location = document.getElementById("location");
    var locationError = document.getElementById("location_error");

    location.addEventListener("blur", validateLocation)
    function validateLocation(){
        if(!validateLenght3(location.value)){
            locationError.style.visibility ="visible";
        }
        locationError = location.value;
    }
    location.addEventListener("focus", validateLocationFocus)
    function validateLocationFocus (){
        locationError.style.visibility ="hidden";
    }

    var postalCode = document.getElementById("postal");
    var postalCodeError = document.getElementById("postal_error");

    postalCode.addEventListener("blur", validatepostalCode)
    function validatepostalCode(){
        if(validateNoLetters(postalCode.value) || !validateLenght4Or5(postalCode.value)){
            postalCodeError.style.visibility ="visible";
        }
        postalCodeError = postalCode.value
    }
    postalCode.addEventListener("focus", validatepostalCodeFocus)
    function validatepostalCodeFocus (){
        postalCodeError.style.visibility ="hidden";
    }

    var email = document.getElementById('email');
    var errorEmail = document.getElementById('email_error');

    email.addEventListener("blur", validateEmail)
    function validateEmail(){
        if(!emailValidation(email.value)){
            errorEmail.style.visibility ="visible";
        }
        errorEmail = email.value;
    }
    email.addEventListener("focus", validateEmailFocus)
    function validateEmailFocus (){
        errorEmail.style.visibility ="hidden";
    }

    var password = document.getElementById('password');
    var errorPassword = document.getElementById('password_error');

    password.addEventListener("blur", passwordmessge);
    function passwordmessge(){
        if (!validatePasword(password.value) || !validateLenght8(password.value)) {
        errorPassword.style.visibility = "visible";
        }
    }
    email.addEventListener("focus", passwordMessageFocus)
    function passwordMessageFocus (){
        errorPassword.style.visibility = "hidden"; 
    }

    var confirmPassword = document.getElementById("confirm_password")
    var errorConfirmPassword = document.getElementById("confirm_password_error")
    
    confirmPassword.addEventListener("blur", validateConfirmPassword)
    function validateConfirmPassword() {
        if (confirmPassword.value !== password.value){
            errorConfirmPassword.style.visibility = "visible";
        }

    }
    confirmPassword.addEventListener("focus", validateConfirmPasswordFocus)
    function validateConfirmPasswordFocus(){
        errorConfirmPassword.style.visibility = "hidden";
    }

    var buttonConfirm = document.getElementById("create_button");
    buttonConfirm.addEventListener("click", confirm);
    function confirm (){
        alert("Name: " + nameError + "\nLast Name: " + lastNameError + "\nId Number: " + idNumberError
        + "\nPhone Number" + phoneNumberError + "\nLocation: " + locationError + 
        "\nPostal code: " + postalCodeError +  + "\nE-mail: " + errorEmail );
    }
}

