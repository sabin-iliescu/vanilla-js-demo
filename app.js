let playerScore = 0;
let computerScore = 0;

/**
 * Plays a game of rock-paper-scissors between the player and the computer.
 * Updates the scores and displays the result.
 *
 * @param {string} playerChoice - The player's choice ('rock', 'paper', or 'scissors').
 */
function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Create a dictionary to define the winning combinations
  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  // Determine the result
  let result;
  const resultElement = document.querySelector('#result');
  resultElement.classList.remove('win'); // Remove the win class initially

  if (playerChoice === computerChoice) {
    result = `It's a draw! Both chose ${playerChoice}.`;
  } else if (winConditions[playerChoice] === computerChoice) {
    playerScore++;
    result = `You win! ${playerChoice} beats ${computerChoice}.`;
    resultElement.classList.add('win'); // Add the win class when the player wins
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }

  // Check if someone has won the round
  if (playerScore === 3) {
    result += ' You have won the round!';
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 3) {
    result += ' The computer has won the round!';
    playerScore = 0;
    computerScore = 0;
  }

  // Display the result and scores
  resultElement.textContent = result;
  document.querySelector('#playerScore').textContent = `Player Score: ${playerScore}`;
  document.querySelector('#computerScore').textContent = `Computer Score: ${computerScore}`;
}
