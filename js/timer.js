function saveGrade() {
  let grade = 0;
  let userAnswers = JSON.parse(localStorage.getItem("userAnswers"));
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] == questions[i].correctAnswerId) {
      grade++;
    }
  }
  localStorage.setItem("userGrade", grade);
}

(function () {
  var timerContainer = document.getElementById("timer");
  var timerElement = document.getElementById("time");
  var timerIcon = document.getElementById("timer-icon");
  var duration = 1* 60;
  function startTimer(duration, display) {
    var timer = duration;
    let minutes, seconds;
    var interval = setInterval(function () {
      minutes = Math.floor(timer / 60);
      seconds = timer % 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      console.log(timer);
      if (--timer < 0) {
          clearInterval(interval);
          display.textContent = "Time's up!";
          endQuiz();
      }
      if(timer<60){ //less than 1 min
        timerContainer.classList.remove("bg-surface-soft");
            timerContainer.classList.add("bg-red-400", "text-white");
            timerIcon.classList.add("text-white");
      }
    }, 1000);
  }

    function endQuiz() {
        /**
         * Handle quiz end logic here
         */

        saveGrade();


        var alertDiv = document.createElement('div');
        alertDiv.className = 'mt-2 bg-teal-500 text-sm text-white rounded-lg p-4 fixed top-[12%] right-[45%] opacity-0 transition-opacity duration-500';
        alertDiv.setAttribute('role','alert')
        alertDiv.setAttribute('tabindex','-1')
        alertDiv.setAttribute('aria-labelledby','hs-solid-color-error-label')
        alertDiv.innerHTML='<span id="hs-solid-color-error-label" class="font-bold text-lg text-center">Time\'s up! The quiz has ended</span><br>Redirecting to grades page.';
        document.body.appendChild(alertDiv);
        document.body.style.pointerEvents = 'none'; // Disable further interactions
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

                /**
         * redirect to grades page after 3 seconds
         */
        setTimeout(function(){
            window.location.replace('grade.html');
        }, 3000);
    }
    startTimer(duration, timerElement);
})();



