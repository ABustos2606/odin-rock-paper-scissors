var compChoice = 0;
var playerChoice = "";
var compScore = 0;
var playerScore = 0;

const options = document.querySelectorAll(".options");
const buttonPlayAgain = document.querySelector('.play-again');

options.forEach((option) => {
    option.addEventListener("click", function () {
        playerChoice = this.id;

        if (compScore < 5 && playerScore < 5){
            game();
        } else {
            
        }
        

    });
});


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

function game() {
    getComputerChoice();

    document.getElementById("details").textContent = "you chose "+playerChoice+
        " & the computer chose "+compChoice;

   
    if (playerChoice == "paper"){
        if (compChoice == "paper") {
            document.getElementById("result").textContent = "it's a draw";
        } else if (compChoice == "scissors") {
            document.getElementById("result").textContent = "the computer won";
            compScore += 1;
        } else {
            document.getElementById("result").textContent = "you won!";
            playerScore += 1;
        }
    } else if (playerChoice == "rock") {
        if (compChoice == "rock") {
            document.getElementById("result").textContent = "it's a draw";
        } else if (compChoice == "paper") {
            document.getElementById("result").textContent = "the computer won";
            compScore += 1;
        } else {
            document.getElementById("result").textContent = "you won!";
            playerScore += 1;
        }
    } else {
        if (compChoice == "scissors") {
            document.getElementById("result").textContent = "it's a draw";
        } else if (compChoice == "rock") {
            document.getElementById("result").textContent = "the computer won";
            compScore += 1;
        } else {
            document.getElementById("result").textContent = "you won!";
            playerScore += 1;
        }
    }

    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = compScore;
    
    if (compScore < 5 && playerScore < 5){
        
    } else {
        result();
    }

    
                
}



function result() {
    if (playerScore == 5) {
        document.getElementById("message").textContent = "You won the match!";
    } else {
        document.getElementById("message").textContent = "The computer won the match";
    }
    buttonPlayAgain.style.visibility = 'visible';
    
}

buttonPlayAgain.addEventListener('click', () => {
    window.location.reload();
  });

