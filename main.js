var compChoice = 0;
var playerChoice = "";
var compScore = 0;
var playerScore = 0;

function getComputerChoice() {
    compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
        compChoice = "paper";
    } else if (compChoice == 1) {
        compChoice = "rock";
    } else {
        compChoice = "scissors";
    }
    return compChoice;
}

function getPlayerChoice() {
    playerChoice = prompt("Select your weapon between rock, paper and  scissors:").toLowerCase();
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return playerChoice;
    } else {
        badAnswer();
    }
}

function badAnswer() {
    alert("You didn't choose your weapon correctly.");
    getPlayerChoice();
}

function game() {
    getComputerChoice();
    getPlayerChoice();
    console.log("you chose "+playerChoice);
    console.log("the computer chose "+compChoice);
    
    if (playerChoice == "paper"){
        if (compChoice == "paper") {
            console.log("draw");
        } else if (compChoice == "scissors") {
            console.log("computer won!");
            compScore += 1;
        } else {
            console.log("you won!");
            playerScore += 1;
        }
    } else if (playerChoice == "rock") {
        if (compChoice == "rock") {
            console.log("draw");
        } else if (compChoice == "paper") {
            console.log("computer won!");
            compScore += 1;
        } else {
            console.log("you won!");
            playerScore += 1;
        }
    } else {
        if (compChoice == "scissors") {
            console.log("draw");
        } else if (compChoice == "rock") {
            console.log("computer won!");
            compScore += 1;
        } else {
            console.log("you won!");
            playerScore += 1;
        }
    }

    console.log("player score = " +playerScore);
    console.log("computer score = " +compScore);

    if (compScore < 5 && playerScore < 5){
        game();
    } else {
        result();
    }

    
                
}

function result() {
    if (playerScore == 5) {
        console.log("You won the match!");
    } else {
        console.log("The computer won the match");
    }
    console.log("Final results: You = "+playerScore+" - Computer = "+compScore);
}


game();