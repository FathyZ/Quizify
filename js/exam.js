let questions = [
  {
    id: 1,
    text: "Which data structure follows the FIFO principle?",
    status: "none", //  none - Flagged
    selectedAnswerId: null,
    answers: [
      { id: 1, text: "Stack", isCorrect: false },
      { id: 2, text: "Queue", isCorrect: true },
      { id: 3, text: "Tree", isCorrect: false },
      { id: 4, text: "Graph", isCorrect: false },
    ],
  },
  {
    id: 2,
    text: "What is the time complexity of accessing an element in an array?",
    status: "none", //  none - Flagged
    selectedAnswerId: null,
    answers: [
      { id: 1, text: "O(1)", isCorrect: true },
      { id: 2, text: "O(n)", isCorrect: false },
      { id: 3, text: "O(log n)", isCorrect: false },
      { id: 4, text: "O(n²)", isCorrect: false },
    ],
  },
  {
    id: 3,
    text: "Which data structure is used for implementing recursion?",
    status: "none", // none - Flagged
    selectedAnswerId: null,
    answers: [
      { id: 1, text: "Queue", isCorrect: false },
      { id: 2, text: "Stack", isCorrect: true },
      { id: 3, text: "Heap", isCorrect: false },
      { id: 4, text: "Linked List", isCorrect: false },
    ],
  },
  {
    id: 4,
    text: "What is the worst-case time complexity of Binary Search?",
    status: "none", // none - Flagged
    selectedAnswerId: null,
    answers: [
      { id: 1, text: "O(n)", isCorrect: false },
      { id: 2, text: "O(log n)", isCorrect: true },
      { id: 3, text: "O(1)", isCorrect: false },
      { id: 4, text: "O(n log n)", isCorrect: false },
    ],
  },
  {
    id: 5,
    text: "What is the average time complexity of Merge Sort?",
    status: "none", // none - Flagged
    selectedAnswerId: null,
    answers: [
      { id: 1, text: "O(n log n)", isCorrect: false },
      { id: 2, text: "O(n²)", isCorrect: true },
      { id: 3, text: "O(n)", isCorrect: false },
      { id: 4, text: "O(log n)", isCorrect: false },
    ],
  },
  {
    id: 6,
    text: "What is the average time complexity of Quick Sort?",
    status: "none", // none - Flagged
    selectedAnswerId: null,
    answers: [
      { id: 1, text: "O(n²)", isCorrect: false },
      { id: 2, text: "O(n log n)", isCorrect: true },
      { id: 3, text: "O(log n)", isCorrect: false },
      { id: 4, text: "O(n)", isCorrect: false },
    ],
  },
  {
    id: 7,
    text: "Which data structure is used for implementing recursion?",
    status: "none", // none - Flagged
    selectedAnswerId: null,
    answers: [
      { id: 1, text: "Queue", isCorrect: false },
      { id: 2, text: "Stack", isCorrect: true },
      { id: 3, text: "Heap", isCorrect: false },
      { id: 4, text: "Linked List", isCorrect: false },
    ],
  },
  {
    id: 8,
    text: "What is the worst-case time complexity of Binary Search?",
    status: "none", // none - Flagged
    selectedAnswerId: null,
    answers: [
      { id: 1, text: "O(n)", isCorrect: false },
      { id: 2, text: "O(log n)", isCorrect: true },
      { id: 3, text: "O(1)", isCorrect: false },
      { id: 4, text: "O(n log n)", isCorrect: false },
    ],
  },
];
let userAnswers = [null, null, null, null, null, null, null, null];
let currentIndex = 0;
const flagBtn = document.getElementById("flagBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navigators = document.querySelectorAll(".navigator");
const flagIcon = document.getElementById("flagIcon");
const closeIcon = document.getElementById("closeIcon");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const questionNavigatorContainer =
  document.getElementById("navigatorContainer");
const questionContent = document.getElementById("questionContent");
const answersContainer = document.getElementById("answers");
// const flaggedQuestionsContainer = document.getElementById(
//   "flaggedQuestionsContainer"
// );
const progressBar = document.getElementById("progressBar");
let progressBarWidth = 10;

// Functions Must Run at the start of the Exam
updateProgressBar();
displayQuestions();
// displayFlaggedQuestions();
// if (localStorage.getItem("userAnswers") != null) {
//     userAnswers = JSON.parse(localStorage.getItem("userAnswers"));
//     displayQuestions(userAnswers);
// }
// updateTimer();
/////////////////////////////////////////////////////////////////////

// Update next/prev Buttons Status
function updateBtnsState() {
  // For Previous Btn
  if (currentIndex == 0) {
    prevBtn.setAttribute("disabled", "disabled");
  } else {
    prevBtn.removeAttribute("disabled");
  }
  // For Next Btn
  if (currentIndex === questions.length - 1) {
    nextBtn.setAttribute("disabled", "disabled");
  } else {
    nextBtn.removeAttribute("disabled");
  }
}

// Go For Next Question
nextBtn.addEventListener("click", function () {
  if (currentIndex == questions.length - 1) return; // no need to to complete if iam already at last question .
  currentIndex++;
  updateBtnsState();
  displayQuestions();
  updateProgressBar();
});
// Go For Previous Question
prevBtn.addEventListener("click", function () {
  if (currentIndex == 0) return; // no need to to complete if iam already at first question .
  currentIndex--;
  updateBtnsState();
  displayQuestions();
  updateProgressBar();
});

// Flag/unflag question
flagBtn.addEventListener("click", function () {
  if (questions[currentIndex].status == "none") {
    questions[currentIndex].status = "flagged";
  } else {
    questions[currentIndex].status = "none";
  }
  displayFlaggedQuestions();

  displayQuestions();
});

// Display Flagged Questions
function displayFlaggedQuestions() {
  console.log(navigators[currentIndex].innerText);
  if (questions[currentIndex].status == "flagged") {
    navigators[currentIndex].style.cssText = `
      color: var(--color-orange-400) ;
    border : 1px solid var(--color-orange-300) ;
    background-color: var(--color-orange-50)  ;`;
  } else if (questions[currentIndex].status == "none") {
    navigators[currentIndex].style.cssText = `
      color: var(--color-gray-900) ;
    border : 1px solid var(--color-gray-300) ;
    background-color: var(--color-gray-50)  ;
    `;
    displayAnsweredQuestions(); //if it is unflagged check if it is already answered to make it green
  }

  // questions.forEach((question) => {
  //   if (question.status == "flagged") {
  //     navigators[question.id - 1].style.cssText = `
  //     color: var(--color-orange-400) ;
  //   border : 1px solid var(--color-orange-300) ;
  //   background-color: var(--color-orange-50)  ;`;
  //   }
  //   else if (question.status == "none") {
  //     navigators[question.id - 1].style.cssText = `
  //     color: var(--color-gray-900) ;
  //   border : 1px solid var(--color-gray-300) ;
  //   background-color: var(--color-gray-50)  ;
  //   `;
  //   }
  // });
}

// Display Questions And its Answers
function displayQuestions() {
  // toggle flag icon to indicate if question is flagged or not
  if (questions[currentIndex].status == "flagged") {
    flagIcon.classList.replace("fa-regular", "fa-solid");
  } else if (questions[currentIndex].status == "none") {
    flagIcon.classList.replace("fa-solid", "fa-regular");
  }
  questionContent.innerText = questions[currentIndex].text;
  // see if user choose an answer for this question so make it checked
  const selectedAnswerId = userAnswers[currentIndex];

  answersContainer.innerHTML = `<!-- First Answer -->
            <label
              for="q${currentIndex + 1}-answer1"
              class="flex items-center gap-4 my-2 bg-gray-100 rounded-lg border border-gray-300 lg:p-4 p-3 lg:text-sm text-xs shadow-sm transition-colors hover:bg-gray-50 has-checked:text-secondary has-checked:border-primary has-checked:ring-1 has-checked:ring-primary"
            >
              <input
                type="radio"
                name="q${currentIndex + 1}"
                value="0"
                id="q${currentIndex + 1}-answer1"
                class="lg:size-5 size-3 border-gray-300"
                ${selectedAnswerId === "0" ? "checked" : ""}
              />
              <p id="answerContent1">${
                questions[currentIndex].answers[0].text
              }</p>
            </label>

            <!-- Second Answer -->
            <label
              for="q${currentIndex + 1}-answer2"
              class="flex items-center gap-4 my-2 bg-gray-100 rounded-lg border border-gray-300 lg:p-4 p-3 lg:text-sm text-xs shadow-sm transition-colors hover:bg-gray-50 has-checked:text-secondary has-checked:border-primary has-checked:ring-1 has-checked:ring-primary"
            >
              <input
                type="radio"
                name="q${currentIndex + 1}"
                value="1"
                id="q${currentIndex + 1}-answer2"
                class="lg:size-5 size-3 border-gray-300"
                ${selectedAnswerId === "1" ? "checked" : ""}
              />
              <p id="answerContent2">${
                questions[currentIndex].answers[1].text
              }</p>
            </label>

            <!-- Third Answer -->
            <label
              for="q${currentIndex + 1}-answer3"
              class="flex items-center gap-4 my-2 bg-gray-100 rounded-lg border border-gray-300 lg:p-4 p-3 lg:text-sm text-xs shadow-sm transition-colors hover:bg-gray-50 has-checked:text-secondary has-checked:border-primary has-checked:ring-1 has-checked:ring-primary"
            >
              <input
                type="radio"
                name="q${currentIndex + 1}"
                value="2"
                id="q${currentIndex + 1}-answer3"
                class="lg:size-5 size-3 border-gray-300"
                ${selectedAnswerId === "2" ? "checked" : ""}
              />
              <p id="answerContent3">${
                questions[currentIndex].answers[2].text
              }</p>
            </label>

            <!-- Fourth Answer -->
            <label
              for="q${currentIndex + 1}-answer4"
              class="flex items-center gap-4 my-2 bg-gray-100 rounded-lg border border-gray-300 lg:p-4 p-3 lg:text-sm text-xs shadow-sm transition-colors hover:bg-gray-50 has-checked:text-secondary has-checked:border-primary has-checked:ring-1 has-checked:ring-primary"
            >
              <input
                type="radio"
                name="q${currentIndex + 1}"
                value="3"
                id="q${currentIndex + 1}-answer4"
                class="lg:size-5 size-3 border-gray-300"
                ${selectedAnswerId === "3" ? "checked" : ""}
              />
              <p id="answerContent4">${
                questions[currentIndex].answers[3].text
              }</p>
            </label>`;
}

// Update Progress Bar Width
function updateProgressBar() {
  progressBarWidth = currentIndex * 10;
  progressBar.style.width = progressBarWidth + "%";
}

// Using Event Bubbling on the Answers Container--> if any thing inside the container changed get what changed
answersContainer.addEventListener("change", function (e) {
  let answer = e.target; // to get the radio that has been changed
  console.log(answer.value);
  userAnswers[currentIndex] = answer.value;
  saveAnswers();
  displayAnsweredQuestions();
});

// Update user answers in local storage
function saveAnswers() {
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
}

// Using Event Bubbling on the Navigator Container -> if question Pressed inside the container go to that question
questionNavigatorContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    currentIndex = e.target.innerText - 1;
    updateBtnsState();
    updateProgressBar();
    displayQuestions();
    // close sidebar if opened
    sidebar.classList.add("hidden");
    closeIcon.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

// Coloring answered question in the question navigator
function displayAnsweredQuestions() {
  if (questions[currentIndex].status != "flagged") {
    if (userAnswers[currentIndex] != null) {
      navigators[currentIndex].style.cssText = `
        color: var(--color-green-900) ;
        border : 1px solid var(--color-green-300) ;
        background-color: var(--color-green-100)  ;
        `;
    }
  }
}

// Open sidebar
hamburgerBtn.addEventListener("click", function () {
  sidebar.classList.remove("hidden");
  closeIcon.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Close Sidebar
closeIcon.addEventListener("click", function () {
  sidebar.classList.add("hidden");
  closeIcon.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  sidebar.classList.add("hidden");
  closeIcon.classList.add("hidden");
  overlay.classList.add("hidden");
});
