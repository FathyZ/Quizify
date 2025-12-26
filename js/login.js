
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
        alert("Login successful!");
        window.location.href = "Landing.html";
    } else {
        alert("Invalid username or password.");
    }}