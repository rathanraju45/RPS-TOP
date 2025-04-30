let totalRounds = 5;
let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function humanChoice(){
    const choices = ['rock', 'paper', 'scissors', 'quit'];
    let choice;
    do {
        choice = prompt("Enter your choice (rock, paper, scissors) or 'quit' to exit: ").toLowerCase();
        if(choice === 'quit') {
            console.log("Thanks for playing!");
            return null;
        }
    } while (!choices.includes(choice));
    return choice;
}

function playRound(){
    const human = humanChoice();
    console.log(`You chose: ${human}`);
    const computer = computerChoice();
    console.log(`Computer chose: ${computer}`);
    if (human === computer) {
        console.log("It's a tie!");
    } else if (
        (human === 'rock' && computer === 'scissors') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissors' && computer === 'paper')
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
    roundsPlayed++;
}

function restartGame(){
    roundsPlayed = 0;
    humanScore = 0;
    computerScore = 0;
    let answer;
    do {
        answer = prompt("Do you want to play again? (yes/no): ").toLowerCase();
    } while (answer !== 'yes' && answer !== 'no');
    
    answer === 'yes' ? game() : console.log("Thanks for playing!");
}

function game(){
    while (roundsPlayed < totalRounds) {
        playRound();
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }
    if (humanScore === computerScore) {
        console.log("It's a tie game!");
        restartGame();
    } else if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
        restartGame();
    } else {
        console.log("Sorry, you lost the game.");
        restartGame();
    }
}

game();