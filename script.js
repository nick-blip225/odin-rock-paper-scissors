let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const roundResultDiv = document.createElement("div");
const computerChoiceDiv = document.createElement("div");
const scoreDiv = document.createElement("div");
const endResultDiv = document.createElement("p");

body.append(rockBtn, paperBtn, scissorsBtn, computerChoiceDiv, roundResultDiv, 
    scoreDiv, endResultDiv);

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

rockBtn.setAttribute("data-answer", "Rock");
paperBtn.setAttribute("data-answer", "Paper");
scissorsBtn.setAttribute("data-answer", "Scissors");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.dataset.answer);
    })
});

/*function getHumanChoice(){
    answer = parseInt(prompt("Press 1 for Rock, 2 for Paper, or 3 for Scissors "));

    if (answer == 1) {
        return "Rock";
    } else if (answer == 2) {
        return "Paper";
    } else if (answer == 3){
        return "Scissors";
    }else {
        return "Invalid answer";
    }
}*/

function playRound (humanChoice){
    function getComputerChoice (){
        let randomNumber = Math.random() * 3;

        if (randomNumber <= 1) {
            return "Rock";        
        }else if (randomNumber <= 2){
            return "Paper";
        }else {
            return "Scissors"
        }
    }

    let computerChoice = getComputerChoice();


    if(humanChoice == computerChoice){
        roundResultDiv.textContent = "It was a draw!";
    }else if(humanChoice == "Rock" && computerChoice == "Paper"){
        roundResultDiv.textContent = "Loss.  Paper covers rock.";
        computerScore++;
    }else if(humanChoice == "Rock" && computerChoice == "Scissors"){
        roundResultDiv.textContent = "You win!  Rock breaks scissors.";
        humanScore++;
    }else if(humanChoice == "Paper" && computerChoice == "Rock"){
        roundResultDiv.textContent = "You win!  Paper covers rock.";
        humanScore++;
    }else if(humanChoice == "Paper" && computerChoice == "Scissors"){
        roundResultDiv.textContent = "Loss.  Scissors cut paper.";
        computerScore++;
    }else if(humanChoice == "Scissors" && computerChoice == "Rock"){
        roundResultDiv.textContent = "Loss.  Rock breaks scissors.";
        computerScore++;
    }else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        roundResultDiv.textContent = "You win!  Scissors cut paper.";
        humanScore++;
    }

    computerChoiceDiv.textContent = `The computer chose ${computerChoice}`;
    scoreDiv.textContent = `Your score: ${humanScore} \nComputer score: ${computerScore}`;

    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            endResultDiv.textContent = "You win!";
        }else{
            endResultDiv.textContent = "Better luck next time.";
        }
        buttons.forEach(button => {
            button.disabled = true;
        });
        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Click here to play again"
        body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener("click", () => {window.location.reload()});
    }
}