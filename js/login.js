
var users = JSON.parse(localStorage.getItem("users"))
console.log(users);

function signUp(){
    window.location.href = "index.html";
}

function login(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loggedInUser = null;
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            loggedInUser = users[i];
            break;
        }
    }
    if (loggedInUser) {
        localStorage.setItem("loggedInUser", JSON.stringify({"username":loggedInUser.username,"email":loggedInUser.email}));
           var alertDiv = document.createElement('div');
        alertDiv.className = 'mt-2 bg-teal-500 text-sm text-white rounded-lg p-4 fixed top-[12%] right-[5%] opacity-0 transition-opacity duration-500';
        alertDiv.setAttribute('role','alert')
        alertDiv.setAttribute('tabindex','-1')
        alertDiv.setAttribute('aria-labelledby','hs-solid-color-success-label')
        alertDiv.innerHTML='<span id="hs-solid-color-success-label" class="font-bold">Logged In!</span><br>You will be redirected to the quiz page in a few seconds.';
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
            window.location.replace('question.html');

        }, 3000);
    } else {
        var alertDiv = document.createElement('div');
        alertDiv.className = 'mt-2 bg-red-400 text-sm text-white rounded-lg p-4 fixed top-[12%] right-[5%] opacity-0 transition-opacity duration-500';
        alertDiv.setAttribute('role','alert')
        alertDiv.setAttribute('tabindex','-1')
        alertDiv.setAttribute('aria-labelledby','hs-solid-color-error-label')
        alertDiv.innerHTML='<span id="hs-solid-color-error-label" class="font-bold">Login Failed!</span><br>Invalid username or password.';
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
    }}