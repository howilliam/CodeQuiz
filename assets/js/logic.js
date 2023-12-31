// Variables
let currentQuestionIndex = 0;
let time = 60; // Set time limit
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

let score = 0; // Initialize the score variable

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const feedback = document.getElementById("feedback");

    if (answer === correctAnswer) {
        // Correct answer
        score += 10
        feedback.textContent = "Correct!";
        feedback.classList.remove('hide');
    } else {
        // Incorrect answer
        score -= 5
        time -= 10;
        feedback.textContent = "Incorrect!";
        feedback.classList.remove('hide');
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
    finalScoreSpan.textContent = score;

    // Allow the user to save initials and score
    document.getElementById("submit").addEventListener("click", function () {
        const initials = document.getElementById("initials").value;

        // Save the score and initials to localStorage
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        highScores.push({ initials, score: score });
        localStorage.setItem("highScores", JSON.stringify(highScores));

        // Redirect to the high scores page
        window.location.href = "highscores.html";

    });
}

function startTimer() {
    // Update timer display every second
    timerInterval = setInterval(function () {
        const timerSpan = document.getElementById("time");
        timerSpan.textContent = time;

        // Check if the time has run out
        if (time <= 0) {
            endQuiz();
        } else {
            time--;
        }
    }, 1000);
}

// Event listeners
document.getElementById("start").addEventListener("click", startQuiz);
document.getElementById("choices").addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        checkAnswer(event.target.textContent);
    }
});