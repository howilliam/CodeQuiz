document.addEventListener("DOMContentLoaded", function () {
    // Retrieve high scores from localStorage
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Sort high scores in descending order based on score
    highScores.sort((a, b) => b.score - a.score);

    // Limit the list to a maximum of 10 scores
    const limitedHighScores = highScores.slice(0, 10);

    // Display high scores
    const highScoresContainer = document.getElementById("highscores");

    if (limitedHighScores.length === 0) {
        highScoresContainer.textContent = "No high scores yet!";
    } else {
        limitedHighScores.forEach((score) => {
            const scoreItem = document.createElement("li");
            scoreItem.textContent = `${score.initials}: ${score.score}`;
            highScoresContainer.appendChild(scoreItem);
        });
    }

    // Add event listener to clear high scores
    document.getElementById("clear").addEventListener("click", function () {
        // Clear high scores in localStorage
        localStorage.removeItem("highScores");

        // Clear the displayed high scores
        highScoresContainer.innerHTML = "High scores cleared!";
    });

});