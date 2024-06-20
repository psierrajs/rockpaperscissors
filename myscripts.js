console.log("Hello Again World");
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    return Math.floor( Math.random() * 3 ); 
}

function getHumanChoice(){
    message = "Rock, paper or scissors?";
    choice = prompt(message).toLowerCase();
    return choice;
}

console.log(getHumanChoice());

// for (let i = 0; i < 100; i++){
//     console.log(getComputerChoice());
// }