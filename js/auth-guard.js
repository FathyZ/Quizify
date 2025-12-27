(function(){
    var loggedIn = localStorage.getItem('loggedInUser');
    var publicPages = [ 'index.html','login.html'];
    var privatePages = ['landing.html','question.html'];
    var currentPage = window.location.pathname.split('/').pop();
    console.log('Current Page:', currentPage);  
    console.log(window.location.href);
    if(!loggedIn && privatePages.includes(currentPage)){
        window.location.replace('index.html');
    
    }
    if(loggedIn && publicPages.includes(currentPage)){ 
        window.location.replace('landing.html');
    }
})();