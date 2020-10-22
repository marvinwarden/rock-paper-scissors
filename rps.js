 

 document.getElementById("begin").addEventListener("click", function(){
    
    document.getElementById("begin").style.visibility = "hidden";
    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("btn2").style.visibility = "visible";
    document.getElementById("btn3").style.visibility = "visible";
    start();

 });

 document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("begin").style.visibility = "visible";
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "hidden";
    document.getElementById("btn3").style.visibility = "hidden";
    start();
 })
 


function start(){

                
    let playerScore = 0;
    let computerScore = 0;

   
function play() {       

const buttons = document.querySelectorAll("button");  
const results = ["Rock", "Paper", "Scissors"];           

buttons.forEach(button => {
button.addEventListener("click", function() {

    const randomResult = Math.floor(Math.random() * results.length);
    const computerSelection = results[randomResult];
    compareHands(this.textContent, computerSelection);

});



function restart () {
    const player = document.querySelector(".player-score p");
    const computer = document.querySelector(".computer-score p");
    const removeButtons = document.getElementById("btn");
    playerScore = 0;
    computerScore = 0;


}
 




const updateScore = () => {
const player = document.querySelector(".player-score p");
const computer = document.querySelector(".computer-score p");
player.textContent = playerScore;
computer.textContent = computerScore;
if (playerScore === 5) {
    document.getElementById("para").innerText = "Player wins!!!";
   
    restart();
    
} else if (computerScore === 5) {
    document.getElementById("para").innerText = "Computer wins!!!";
    
    restart();
   }
};  


  
       
        

function compareHands (playerSelection, computerSelection) {
    
    document.getElementById("phand").innerText = playerSelection;
    document.getElementById("chand").innerText = computerSelection;
    

//Check for a tie
        if (playerSelection === computerSelection) {
            
            para.textContent = "It is a tie";
            updateScore();
            return;
        }
//Check for Rock
        if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
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
        if (computerSelection === "Scissors") {
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
        if (computerSelection === "Rock") {
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





