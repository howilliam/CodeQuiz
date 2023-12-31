// Variables
let currentQuestionIndex = 0;
let time = 60; // Set your desired time limit
let timerInterval;

// Functions
function startQuiz() {
    // Hide start screen, show questions
    // Start timer
    // Display current question
  }
  
  function displayQuestion() {
    // Show question and choices
  }
  
  function checkAnswer(answer) {
    // Check if the answer is correct
    // Update score and move to the next question
  }
  
  function endQuiz() {
    // Stop the timer
    // Show end screen
    // Display final score
    // Allow the user to save initials and score
  }
  
  // Event listeners
  document.getElementById("start").addEventListener("click", startQuiz);
  document.getElementById("choices").addEventListener("click", function (event) {
    if (event.target.matches("button")) {
      checkAnswer(event.target.textContent);
    }
  });