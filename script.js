let compchoice = ["rock", "paper", "scissors"]
// const playerSelection = "scissors";
// let computerSelection = getComputersChoice();
let playerScore = 0
let computerScore = 0



function getComputersChoice(){
    const randomIndex = Math.floor(Math.random() * compchoice.length)
    const item = compchoice[randomIndex]
    // console.log(item)
    return item

}
// getComputersChoice()
function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Choose Your Weapon', 'Rock, Paper, Scissors').toLowerCase()
        const computerSelection = getComputersChoice()
        playRound(playerSelection, computerSelection)
    }

    if (playerScore > computerScore){
        return "humans are the boss"
    }else if(computerScore > playerScore){
        return "humans are too dull"
    }else {
        return "Gosh we both suck"
    }
}
console.log(game())



function playRound(playerSelection, computerSelection){
    // console.log(1, playerSelection, 2, computerSelection)
    if (playerSelection == 'scissors' && computerSelection == 'paper' 
             || playerSelection == 'paper' && computerSelection == 'rock' 
             || playerSelection == 'rock' && computerSelection == 'scissors'){
                playerScore++
                // console.log(playerScore)
                // return "Player Wins"
        }else if (computerSelection == 'scissors' && playerSelection == 'paper' 
            || computerSelection == 'paper' && playerSelection == 'rock' 
            || computerSelection == 'rock' && playerSelection == 'scissors'){
                computerScore++
                // console.log(computerScore)
            return "Computer Wins"
        }else {
            return "it's a tie"
        } 
}

