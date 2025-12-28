var usernameSpan = document.getElementById('username-span');
var emailSpan = document.getElementById('email-span');
var passwordSpan = document.getElementById('password-span');
var confirmPasswordSpan = document.getElementById('confirm-password-span');
var agreeButton = document.getElementById('agree-button');




function validateUsername() {
    var username = document.getElementById('username').value;
    if(username.length < 5) {
        usernameSpan.classList.remove('opacity-0');
         usernameFlag=false;

    }
else{
    usernameSpan.classList.add('opacity-0');
}
}
function validateEmail() {
    var email = document.getElementById('email').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)) {
        emailSpan.classList.remove('opacity-0');
    }
    else{
        emailSpan.classList.add('opacity-0');
}
}
function validatePassword() {
    var password = document.getElementById('password').value;
    if(password.length < 8) {
        passwordSpan.classList.remove('opacity-0');
    }
    else{
        passwordSpan.classList.add('opacity-0');
}}
function validateConfirmPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    if(password !== confirmPassword) {
        confirmPasswordSpan.classList.remove('opacity-0');
    }
    else{
        confirmPasswordSpan.classList.add('opacity-0');
}
}







function submitForm(event) {

    event.preventDefault();
    var users = JSON.parse(localStorage.getItem("users")) || [];

    //check username
    var usernameFlag=true;
    var username = document.getElementById('username').value;
    if(username.length < 5 ) {
        usernameSpan.classList.remove('opacity-0');
         usernameFlag=false;
         
    }
else{
    usernameSpan.classList.add('opacity-0');
}
//check email
    var email = document.getElementById('email').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailFlag=true;
    if(!emailPattern.test(email)) {
        emailSpan.classList.remove('opacity-0');
        emailFlag=false;
    }
    else{
        emailSpan.classList.add('opacity-0');
}

//check password
  var password = document.getElementById('password').value;
    var passwordFlag=true;
    if(password.length < 8) {
        passwordSpan.classList.remove('opacity-0');
        passwordFlag=false;
    }
    else{
        passwordSpan.classList.add('opacity-0');
}

//check confirm password
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var confirmPasswordFlag=true;
    if(password !== confirmPassword) {
        confirmPasswordSpan.classList.remove('opacity-0');
        confirmPasswordFlag=false;
    }
    else{
        confirmPasswordSpan.classList.add('opacity-0');
}

for(var i=0;i<users.length;i++){
    if(users[i].username===username){
        usernameSpan.classList.remove('opacity-0');
        usernameFlag=false;
        usernameSpan.innerText="Username already taken";
    }
    if(users[i].email===email){
        emailSpan.classList.remove('opacity-0');
        emailFlag=false;
        emailSpan.innerText="Email already registered";
    }}



//submit if all valid
    if(usernameFlag && emailFlag && passwordFlag && confirmPasswordFlag && agreeButton.checked) {
        users.push({username: username, email: email, password: password});
        localStorage.setItem("users", JSON.stringify(users));


        // document.body.appendChild(document.createElement('div')).innerHTML = '<div class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"><div class="bg-white p-6 rounded shadow-md"><h2 class="text-2xl font-bold mb-4">Registration Successful</h2><p class="mb-4">You have been registered successfully!</p><button id="close-modal" class="bg-blue-500 text-white px-4 py-2 rounded">Close</button></div></div>';
        // document.getElementById('close-modal').addEventListener('click', function() {
        //     document.body.removeChild(document.body.lastChild);
        // });

        var alertDiv = document.createElement('div');
        alertDiv.className = 'mt-2 bg-teal-500 text-sm text-white rounded-lg p-4 fixed top-[12%] right-[5%] opacity-0 transition-opacity duration-500';
        alertDiv.setAttribute('role','alert')
        alertDiv.setAttribute('tabindex','-1')
        alertDiv.setAttribute('aria-labelledby','hs-solid-color-success-label')
        alertDiv.innerHTML='<span id="hs-solid-color-success-label" class="font-bold">Registered ! Your account was successfully created.</span><br>You will be redirected to the login page in a few seconds.';
        document.body.appendChild(alertDiv);
        //fade in
        requestAnimationFrame(function() {
            alertDiv.classList.remove('opacity-0');
        });
        //fade out after 3 seconds
        setTimeout(function() {
            alertDiv.classList.add('opacity-0');
            setTimeout(function() {
                document.body.removeChild(alertDiv);
            }, 500);
        }, 3000);

        setTimeout(function(){
            window.location.replace('login.html');

        }, 3000);


    }
    else{
        var alertDiv = document.createElement('div');
        alertDiv.className = 'mt-2 bg-red-400 text-sm text-white rounded-lg p-4 fixed top-[12%] right-[5%] opacity-0 transition-opacity duration-500';
        alertDiv.setAttribute('role','alert')
        alertDiv.setAttribute('tabindex','-1')
        alertDiv.setAttribute('aria-labelledby','hs-solid-color-error-label')
        alertDiv.innerHTML='<span id="hs-solid-color-error-label" class="font-bold">Registration Failed!</span><br>Please correct the errors in the form before submitting.';
        document.body.appendChild(alertDiv);
        //fade in
        requestAnimationFrame(function() {
            alertDiv.classList.remove('opacity-0');
        });
        //fade out after 3 seconds
        setTimeout(function() {
            alertDiv.classList.add('opacity-0');
            setTimeout(function() {
                document.body.removeChild(alertDiv);
            }, 500);
        }, 3000);
}
}