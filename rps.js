 //computer selection
 function start(){

                
    let playerScore = 0;
    let computerScore = 0;

    
    


        

//Best out of 3

function play() {       

    
   



const buttons = document.querySelectorAll("button");  


const results = ["rock", "paper", "scissors"];           

buttons.forEach(button => {
button.addEventListener("click", function() {
const randomResult = Math.floor(Math.random() * results.length);
const computerSelection = results[randomResult];
compareHands(this.textContent, computerSelection);
selections(this.textContent, computerSelection);
  





});

function selections (playerSelection, computerSelection) {
    const human = document.querySelector(".human");
    const machine = document.querySelector(".machine");
    human.textContent = "rock";
    machine.textContent = computerSelection;
};


const updateScore = () => {
const player = document.querySelector(".player-score p");
const computer = document.querySelector(".computer-score p");
player.textContent = playerScore;
computer.textContent = computerScore;

       
   




};  


 
       
        

function compareHands (playerSelection, computerSelection) {
    
    
    

    const human = document.querySelector("human");
    const machine = document.querySelector("machine");


//Update Text
        // const para = document.querySelector(".para");
//Checking for a tie
        if (playerSelection === computerSelection) {
            console.log(playerSelection);
            para.textContent = "It is a tie";
            return;
        }
//Check for Rock
        if (playerSelection === "Rock") {
        if (computerSelection === "scissors") {
            para.textContent = "Player Wins!";
            playerScore++;
            updateScore();
            return;
        } else {
            para.textContent = "Computer Wins";
            computerScore++;
            updateScore();
            
            return;
            }
        }
//Check for Paper
        if (playerSelection === "Paper") {
        if (computerSelection === "scissors") {
            para.textContent = "Computer Wins";
            computerScore++;
            updateScore();
            
            return;
        } else {
            para.textContent = "Player Wins";
            playerScore++;
            updateScore();
            
            return;
            }
        }
//Check for Scissors
        if (playerSelection === "Scissors") {
        if (computerSelection === "rock") {
            para.textContent = "Computer Wins";
            computerScore++;
            updateScore();
            return;
        } else {
            para.textContent = "Player Wins";
            playerScore++;
            updateScore();
            return;
        }
    } 
    
}
        
    
     

});

}

play();       

};




start();