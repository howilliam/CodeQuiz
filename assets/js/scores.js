document.addEventListener("DOMContentLoaded", function () {
  // Retrieve high scores from localStorage
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Display high scores
  const highScoresContainer = document.getElementById("highscores");

  if (highScores.length === 0) {
    highScoresContainer.textContent = "No high scores yet!";
  } else {
    highScores.forEach((score) => {
      const scoreItem = document.createElement("li");
      scoreItem.textContent = `${score.initials}: ${score.score}`;
      highScoresContainer.appendChild(scoreItem);
    });
  }
});