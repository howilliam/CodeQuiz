// Variables
let currentQuestionIndex = 0;
let time = 60; // Set your desired time limit
let timerInterval;

// Functions
function startQuiz() {
    // Hide start screen
  document.getElementById("start-screen").classList.add("hide");

  // Show questions
  document.getElementById("questions").classList.remove("hide");

  // Start timer
  startTimer();

  // Display current question
  displayQuestion();
  }
  
  function displayQuestion() {
    // Show question
  const questionTitle = document.getElementById("question-title");
  questionTitle.textContent = questions[currentQuestionIndex].question;

  // Show choices
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";

  questions[currentQuestionIndex].choices.forEach((choice) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choicesContainer.appendChild(choiceButton);
  });
  }
  
  function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (answer === correctAnswer) {
    // Correct answer
    // Add your logic here if needed

  } else {
    // Incorrect answer
    // Subtract time from the clock
    time -= 10; // You can adjust the penalty time
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if the quiz is finished
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
  }
  
  function endQuiz() {
     // Stop the timer
  clearInterval(timerInterval);

  // Hide questions
  document.getElementById("questions").classList.add("hide");

  // Show end screen
  const endScreen = document.getElementById("end-screen");
  endScreen.classList.remove("hide");

  // Display final score
  const finalScoreSpan = document.getElementById("final-score");
  finalScoreSpan.textContent = time;

  // Allow the user to save initials and score
  document.getElementById("submit").addEventListener("click", function () {
    const initials = document.getElementById("initials").value;
    // Save the score and initials (You can implement this using localStorage)
    // Redirect to the high scores page or perform any other desired actions
  });
  }
  
  // Event listeners
  document.getElementById("start").addEventListener("click", startQuiz);
  document.getElementById("choices").addEventListener("click", function (event) {
    if (event.target.matches("button")) {
      checkAnswer(event.target.textContent);
    }
  });