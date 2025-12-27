var userWelcome = document.getElementById('user-welcome');
var currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

userWelcome.innerHTML="Welcome " + currentUser.username +"!";

function logout(){
    localStorage.removeItem('loggedInUser');
    window.location.replace('index.html');
}