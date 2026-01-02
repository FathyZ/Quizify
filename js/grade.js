let questions = [
  {
    id: 0,
    text: "Which data structure follows the FIFO principle?",
    status: "none", //  none - Flagged
    correctAnswerId: 1,
    answers: [
      { id: 0, text: "Stack" },
      { id: 1, text: "Queue" },
      { id: 2, text: "Tree" },
      { id: 3, text: "Graph" },
    ],
  },
  {
    id: 1,
    text: "What is the time complexity of accessing an element in an array?",
    status: "none", //  none - Flagged
    correctAnswerId: 0,
    answers: [
      { id: 0, text: "O(1)" },
      { id: 1, text: "O(n)" },
      { id: 2, text: "O(log n)" },
      { id: 3, text: "O(n²)" },
    ],
  },
  {
    id: 2,
    text: "Which data structure is used for implementing recursion?",
    status: "none", // none - Flagged
    correctAnswerId: 1,
    answers: [
      { id: 0, text: "Queue" },
      { id: 1, text: "Stack" },
      { id: 2, text: "Heap" },
      { id: 3, text: "Linked List" },
    ],
  },
  {
    id: 3,
    text: "What is the worst-case time complexity of Binary Search?",
    status: "none", // none - Flagged
    correctAnswerId: 1,
    answers: [
      { id: 0, text: "O(n)" },
      { id: 1, text: "O(log n)" },
      { id: 2, text: "O(1)" },
      { id: 3, text: "O(n log n)" },
    ],
  },
  {
    id: 4,
    text: "What is the average time complexity of Merge Sort?",
    status: "none", // none - Flagged
    correctAnswerId: 1,
    answers: [
      { id: 0, text: "O(n log n)" },
      { id: 1, text: "O(n²)" },
      { id: 2, text: "O(n)" },
      { id: 3, text: "O(log n)" },
    ],
  },
  {
    id: 5,
    text: "What is the average time complexity of Quick Sort?",
    status: "none", // none - Flagged
    correctAnswerId: 1,
    answers: [
      { id: 0, text: "O(n²)" },
      { id: 1, text: "O(n log n)" },
      { id: 2, text: "O(log n)" },
      { id: 3, text: "O(n)" },
    ],
  },
  {
    id: 6,
    text: "Which data structure is used for implementing recursion?",
    status: "none", // none - Flagged
    correctAnswerId: 1,
    answers: [
      { id: 0, text: "Queue" },
      { id: 1, text: "Stack" },
      { id: 2, text: "Heap" },
      { id: 4, text: "Linked List" },
    ],
  },
  {
    id: 7,
    text: "What is the worst-case time complexity of Binary Search?",
    status: "none", // none - Flagged
    correctAnswerId: 1,
    answers: [
      { id: 0, text: "O(n)" },
      { id: 1, text: "O(log n)" },
      { id: 2, text: "O(1)" },
      { id: 3, text: "O(n log n)" },
    ],
  },
  {
    id: 8,
    text: "Which data structure is used for implementing recursion?",
    status: "none", // none - Flagged
    correctAnswerId: 1,
    answers: [
      { id: 0, text: "Queue" },
      { id: 1, text: "Stack" },
      { id: 2, text: "Heap" },
      { id: 3, text: "Linked List" },
    ],
  },
  {
    id: 9,
    text: "What is the worst-case time complexity of Binary Search?",
    status: "none", // none - Flagged
    correctAnswerId: 1,
    answers: [
      { id: 0, text: "O(n)" },
      { id: 1, text: "O(log n)" },
      { id: 2, text: "O(1)" },
      { id: 3, text: "O(n log n)" },
    ],
  },
];
const userGrade = document.getElementById("userGrade");
const pageContainer = document.getElementById("pageContainer");
const questionContainer = document.querySelectorAll(".questionContainer");

// Functions Must Run at the start of the Exam
displayUserGrade();
displayExamReview();
coloringAnswers();


// display user Grade
function displayUserGrade() {
  userGrade.innerHTML = localStorage.getItem("userGrade");
}

// display questions with it's right answer and user answer
function displayExamReview() {
  var cartona = ``;
  // looping on the questions Array
  questions.forEach((question) => {
    cartona += `      <div
        class=" questionContainer w-[80%] bg-white p-8 mb-3 rounded-2xl border border-borderColor"
        id="grades-container"
      >
        <div class="py-3 flex justify-between gap-x-1.5 items-start w-full">
          <p class="lg:text-2xl text-md font-bold" id="questionContent">
            ${question.text}
          </p>
          <p class="lg:text-xl text-md font-bold text-primary">${getQuestionGrade(question.id)}/1*</p>
        </div>

        <!-- Answers -->
        <div id="answers" class="my-5">
          <!-- First Answer -->
          <label
            for="q1-answer1"
            class="flex items-center gap-4 my-2 bg-gray-100 rounded-lg border border-gray-300 lg:p-4 p-3 lg:text-sm text-xs shadow-sm transition-colors has-checked:text-secondary has-checked:border-primary has-checked:ring-1 has-checked:ring-primary"
          >
            <input
              type="radio"
              name="q1"
              value="0"
              id="q1-answer1"
              disabled
              class="lg:size-5 size-3 border-gray-300"
            />
            <p id="answerContent1">${question.answers[0].text}</p>
          </label>

          <!-- Second Answer -->
          <label
            for="q1-answer2"
            class="flex items-center gap-4 my-2 bg-gray-100 rounded-lg border border-gray-300 lg:p-4 p-3 lg:text-sm text-xs shadow-sm transition-colors has-checked:text-secondary has-checked:border-primary has-checked:ring-1 has-checked:ring-primary"
          >
            <input
              type="radio"
              name="q1"
              value="1"
              checked
              disabled
              id="q1-answer2"
              class="lg:size-5 size-3 border-gray-300"
            />
            <p id="answerContent2">${question.answers[1].text}</p>
          </label>

          <!-- Third Answer -->
          <label
            for="q1-answer3"
            class="flex items-center gap-4 my-2 bg-gray-100 rounded-lg border border-gray-300 lg:p-4 p-3 lg:text-sm text-xs shadow-sm transition-colors has-checked:text-secondary has-checked:border-primary has-checked:ring-1 has-checked:ring-primary"
          >
            <input
              type="radio"
              name="q1"
              value="2"
              disabled
              id="q1-answer3"
              class="lg:size-5 size-3 border-gray-300"
            />
            <p id="answerContent3">${question.answers[2].text}</p>
          </label>

          <!-- Fourth Answer -->
          <label
            for="q1-answer4"
            class="flex items-center gap-4 my-2 bg-gray-100 rounded-lg border border-gray-300 lg:p-4 p-3 lg:text-sm text-xs shadow-sm transition-colors has-checked:text-secondary has-checked:border-primary has-checked:ring-1 has-checked:ring-primary"
          >
            <input
              type="radio"
              name="q1"
              value="3"
              id="q1-answer4"
              disabled
              class="lg:size-5 size-3 border-gray-300"
            />
            <p id="answerContent4">${question.answers[3].text}</p>
          </label>
        </div>
      </div>`;
  });
  pageContainer.innerHTML = cartona;
}

function getQuestionGrade(questionID) {
  //   get the user answer from local storage using the id of the question  //////minus 1 because questions IDs starts from 1 not 0
  var userAnswer = +JSON.parse(localStorage.getItem("userAnswers"))[questionID];
  var rightAnswer = questions[questionID].correctAnswerId;
    // console.log("userAnswer from getQuestionGrade :", userAnswer);
    // console.log("rightAnswer from getQuestionGrade :", rightAnswer);
    
  if (userAnswer == rightAnswer) return 1;
  else return 0;
}

function coloringAnswers() {
  var allQuestions = pageContainer.children;
  for (
    let questionIndex = 0;
    questionIndex < allQuestions.length;
    questionIndex++
  ) {    
    var question = allQuestions[questionIndex];
    var questionAnswers = question.children[1].children;
    var userAnswerID = +JSON.parse(localStorage.getItem("userAnswers"))[questionIndex];
    var rightAnswer = questions[questionIndex].correctAnswerId;
    // console.log("questionAnswers : ",questionAnswers);
    console.log("userAnswerID : ",userAnswerID);
    console.log("rightAnswer : ",rightAnswer);  
    // console.log("question : ",question);
    
    if (getQuestionGrade(questionIndex) == 1) {
      questionAnswers[userAnswerID].classList.add("correctAnswer");
      console.log("correct");
      
    } else {
      console.log("wrongAnswer");
      questionAnswers[userAnswerID].classList.add("wrongAnswer");
      questionAnswers[rightAnswer].classList.add("correctAnswer");
    }
  }
}



