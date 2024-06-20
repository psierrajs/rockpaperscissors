let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    switch (Math.floor( Math.random() * 3 )){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    } 
}

function getHumanChoice(){
    message = "Rock, paper or scissors?";
    choice = prompt(message).toLowerCase();
    return choice;
}

function playRound(humanChoice,computerChoice){
    if (humanChoice == computerChoice){
        console.log("It's a tie!");
        console.log("Human: " + humanScore + " | " + "Computer: " +  computerScore);
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("Human looses, rock is beaten by paper!");
        computerScore++;
        console.log("Human: " + humanScore + " | " + "Computer: " +  computerScore);
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Human wins, rock beats scissors");
        humanScore++;
        console.log("Human: " + humanScore + " | " + "Computer: " +  computerScore);
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human wins, paper beats rock");
        humanScore++;
        console.log("Human: " + humanScore + " | " + "Computer: " +  computerScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Human looses, paper is beaten by scissors!");
        computerScore++;
        console.log("Human: " + humanScore + " | " + "Computer: " +  computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("Human looses, scissors are beaten by rock!");
        computerScore++;
        console.log("Human: " + humanScore + " | " + "Computer: " +  computerScore);
    } else if (humanChoice === "scissors" + computerScore === "paper"){
        console.log("Human wins, scissors beat paper!");
        humanScore++;
        console.log("Human: " + humanScore + " | " + "Computer: " +  computerScore);
    }

}

function playGame(){
    for (let i = 0; i <= 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();



//console.log(getHumanChoice());

// for (let i = 0; i < 100; i++) {   console.log(getComputerChoice());
//  }