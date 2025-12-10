console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
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
}

function playRound (humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("It was a draw!");
    }else if(humanChoice == "Rock" && computerChoice == "Paper"){
        console.log("Loss.  Paper covers rock.");
        computerScore++;
    }else if(humanChoice == "Rock" && computerChoice == "Scissors"){
        console.log("You win!  Rock breaks scissors.");
        humanScore++;
    }else if(humanChoice == "Paper" && computerChoice == "Rock"){
        console.log("You win!  Paper covers rock.");
        humanScore++;
    }else if(humanChoice == "Paper" && computerChoice == "Scissors"){
        console.log("Loss.  Scissors cut paper.");
        computerScore++;
    }else if(humanChoice == "Scissors" && computerChoice == "Rock"){
        console.log("Loss.  Rock breaks scissors.");
        computerScore++;
    }else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        console.log("You win!  Scissors cut paper.");
        humanScore++;
    }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (let index = 0; index < 5; index++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log('The computer chose ' + computerSelection);
        console.log("Your score: " + humanScore + "\nComputer score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You win!");        
    }else{
        console.log("Better luck next time.")
    }
}

playGame();