let compchoice = ["rock", "paper", "scissors"]
let playerSelection
let playerScore = 0
let computerScore = 0
let para = document.getElementById('chosen-player') 
let para2 = document.getElementById('result')
let para3 = document.getElementById('chosen-comp')
let rockBtn = document.querySelectorAll('button')
let scoreEl1 = document.getElementById('score1')
let scoreEl2 = document.getElementById('score2')
let modal = document.querySelector('.modal')
let winEl = document.getElementById('modal-result')
let playAgain = document.getElementById('play')

rockBtn.forEach(button => {
  button.addEventListener('click', (e) => {
    playerSelection = e.target.id
    
    if (e.target.id === 'rock'){
      para.innerHTML = '✊'
    }
    if (e.target.id === 'paper'){
      para.innerHTML = '✋'
    }
    if (e.target.id === 'scissors'){
      para.innerHTML = '✌'
    }
    
    const computerSelection = getComputersChoice()
    playRound(playerSelection, computerSelection)

    displayCompChoice(computerSelection)
    endGame()
    announceWinner()

    button.classList.add('clicked')
   
    
  })
})


playAgain.addEventListener('click', restartGame)

function displayCompChoice(computerSelection){
   if (computerSelection === "rock"){
    //  para3.innerHTML = '<button> <i class="fa-solid fa-hand-back-fist"></i> </button>'
    para3.innerHTML = '✊'
   }
   if (computerSelection === "paper"){
    // para3.innerHTML = '<button> <i class="fa-solid fa-hand"></i> </button>'
    para3.innerHTML = '✋'
  }
  if (computerSelection === "scissors"){
    // para3.innerHTML = '<button>  <i class="fa-solid fa-hand-scissors"></i>  </button>'
    para3.innerHTML = '✌'
  } 
}

function getComputersChoice(){
    const randomIndex = Math.floor(Math.random() * compchoice.length)
    const item = compchoice[randomIndex]
    console.log(item)
    return item

}


function playRound(playerSelection, computerSelection){
    if (computerSelection === 'rock' && playerSelection === 'rock') {
        para2.innerHTML = "It's a tie. Two <strong>Rocks</strong>."
      } if (computerSelection === 'rock' && playerSelection === 'paper') {
        playerScore++;
        scoreEl1.innerHTML = playerScore
        para2.innerHTML =  '<strong>Paper</strong> covers <strong>Rock</strong>. You win!'
      } if (computerSelection === 'rock' && playerSelection === 'scissors') {
        para2.innerHTML =  '<strong>Rock</strong> breaks <strong>Scissors</strong>. You lose.'
        computerScore++;
        scoreEl2.innerHTML = computerScore
      } if (computerSelection === 'paper' && playerSelection === 'rock') {
        para2.innerHTML =  '<strong>Paper</strong> covers <strong>Rock</strong>. You lose.'
        computerScore++;
        scoreEl2.innerHTML = computerScore
      } if (computerSelection === 'paper' && playerSelection === 'paper') {
        para2.innerHTML =  'Two <strong>Papers</strong>. You tie.'
      } if (computerSelection === 'paper' && playerSelection === 'scissors') {
        playerScore++;
        scoreEl1.innerHTML = playerScore
        para2.innerHTML =  '<strong>Scissors</strong> cut <strong>Paper</strong>. You win!'
      } if (computerSelection === 'scissors' && playerSelection === 'rock') {
        playerScore++;
        scoreEl1.innerHTML = playerScore
        para2.innerHTML =  '<strong>Rock</strong> breaks <strong>Scissors</strong>. You win!'
      } if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        scoreEl2.innerHTML = computerScore
        para2.innerHTML =  '<strong>Scissors</strong> cut <strong>Paper</strong>. You lose.'
      } if (computerSelection === 'scissors' && playerSelection === 'scissors') {
        para2.innerHTML =  'Two <strong>Scissors</strong>. You tie.'
      }
      
}

function restartGame(){
  playerScore = 0
  computerScore = 0
  para.innerHTML = '🫠'
  para3.innerHTML = '🫠'
  para2.innerHTML = ''
  scoreEl1.innerHTML = playerScore
  scoreEl2.innerHTML = computerScore
  document.getElementById('rock').disabled = false
  document.getElementById('paper').disabled = false
  document.getElementById('scissors').disabled = false
  modal.style.display = 'none'

}

function announceWinner(){  
      if (playerScore === 5){
        winEl.innerHTML = "humans are the boss".toUpperCase()
      }else if(computerScore === 5){
        winEl.innerHTML = "humans are too dull".toUpperCase()
      }else {
         return "Gosh we both suck"
      }    
}


function endGame(){
  if (playerScore === 5 || computerScore === 5){
    document.getElementById('rock').disabled = true
    document.getElementById('paper').disabled = true
    document.getElementById('scissors').disabled = true
    modal.style.display = 'block'
  }

}