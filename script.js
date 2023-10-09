const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const scoreText = document.querySelector("#scoreText");
const choice = document.querySelectorAll(".val");

let player;
let computer;
let score;

choice.forEach(button => button.addEventListener("click", () =>{

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    scoreText.textContent = checkWinner();
    

}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
}
}

function checkWinner(){
    if(player == computer){
        return "DRAW!!"
    }
    else if(computer == "ROCK"){
        return(player == "PAPER") ? "YOU WIN" : "YOU LOSE"
    }
    else if(computer == "PAPER"){
        return(player == "SCISSORS") ? "YOU WIN" : "YOU LOSE"
    }
    else if(computer == "SCISSORS"){
        return(player == "ROCK") ? "YOU WIN" : "YOU LOSE"
    }
    
}