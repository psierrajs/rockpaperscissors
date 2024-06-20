console.log("Hello Again World");

function getComputerChoice(){
    return Math.floor( Math.random() * 3 ); 
}

for (let i = 0; i < 100; i++){
    console.log(getComputerChoice());
}