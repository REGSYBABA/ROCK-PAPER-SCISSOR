// let compchoice = ["rock", "paper", "scissors"]
// const playerSelection = "scissors";
// const computerSelection = getComputersChoice();
// let playerScore = 0
// let computerScore = 0
// let para = document.getElementById('chosen-player') 
// let para2 = document.getElementById('result')
// let para3 = document.getElementById('chosen-comp')
// let rockBtn = document.querySelectorAll('button')
// let scoreEl1 = document.getElementById('score1')
// let scoreEl2 = document.getElementById('score2')
// let modal = document.querySelector('.modal')
// let winEl = document.getElementById('modal-result')
// let playAgain = document.getElementById('play')


// function getComputersChoice(){
//          const randomIndex = Math.floor(Math.random() * compchoice.length)
//          const item = compchoice[randomIndex]
//          return item

// }
// getComputersChoice()


// function game(){
//     function playRound(playerSelection, computerSelection) {
//         if (computerSelection === 'rock' && playerSelection === 'rock') {
//             console.log("It's a tie. Two rocks.");
//           } if (computerSelection === 'rock' && playerSelection === 'paper') {
//             playerScore++;
//             console.log( 'Paper covers rock. You win!');
//             console.log(playerScore)
//           } if (computerSelection === 'rock' && playerSelection === 'scissors') {
//             console.log( 'Rock breaks scissors. You lose.');
//             computerScore++;
//           } if (computerSelection === 'paper' && playerSelection === 'rock') {
//             console.log( 'Paper covers rock. You lose.');
//             computerScore++;
//           } if (computerSelection === 'paper' && playerSelection === 'paper') {
//             console.log( 'Two papers. You tie.');
//           } if (computerSelection === 'paper' && playerSelection === 'scissors') {
//             playerScore++;
//             console.log(playerScore)
//             console.log( 'Scissors cut paper. You win!');
//           } if (computerSelection === 'scissors' && playerSelection === 'rock') {
//             playerScore++;
//             console.log(pl)
//             console.log( 'Rock breaks scissors. You win!');
//           } if (computerSelection === 'scissors' && playerSelection === 'paper') {
//             computerScore++;
//             console.log(computerScore)
//             console.log( 'Scissors cut paper. You los)e.');
//           } if (computerSelection === 'scissors' && playerSelection === 'scissors') {
//             console.log( 'Two scissors. You tie.');
//           }

//     }

//     console.log(playRound(playerSelection, computerSelection))
//     console.log(playRound(playerSelection, computerSelection))
//     console.log(playRound(playerSelection, computerSelection))
//     console.log(playRound(playerSelection, computerSelection))
//     console.log(playRound(playerSelection, computerSelection))
// }

// function getPlayerChoice(){
//     let validatedInput = false
//     while(validatedInput == false){
//         const userChoice = prompt('Choose Your Weapon', 'Rock, Paper, Scissors')
//         if(userChoice == null){
//             continue;
//         }
//         const choiceInLower = userChoice.toLowerCase()
//         if(options.includes(choiceInLower)){
//             validatedInput = true
//             return choiceInLower
//         }
//     }
// }


// game()

// function toUpper(string) {
//   return string.toUpperCase();
// }

// const removeFromArray = function(array, ...args) {
//   const newArray = [];
    
//      array.forEach((item) => {
       
//        if (!args.includes(item)) {
//          newArray.push(item);
//        }
//      });
     
//      return newArray;
  
// };

// console.log(removeFromArray([1,2,3,4],3))


// function sumAll(min, max){
//     let sum = 0
//     for (let i = min; i < max; i++){
//       sum += i
//     }
//     return sum
// }

// console.log(sumAll(1,4))

// // const btn = document.querySelector('#btn');
// // btn.onclick = () => alert("Hello World");
// // btn.addEventListener('click', function (e) {
// //   console.log(e.target);
// // });
// // btn.addEventListener('click', function (e) {
// //   e.target.style.background = 'blue';
// // });
// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {

//   // and for each one we add a 'click' listener
//   button.addEventListener('click', () => {
//     alert(button.id);
//   });
// })

// let balls = document.querySelectorAll('li:nth-child(odd)')

// // for (let i = 0; i < balls.length; i++){
// //   balls[i].style.backgroundColor = 'red'
// // }
// balls.forEach((idan) => {
//   idan.style.backgroundColor = 'blue'
// })

// getComputersChoice()
// function game(){
//     for (let i = 0; i < 5; i++){
//         let playerSelection = 'scissors'
//         const computerSelection = getComputersChoice()
//         playRound(playerSelection, computerSelection)
//     }

//     if (playerScore > computerScore){
//         return "humans are the boss"
//     }else if(computerScore > playerScore){
//         return "humans are too dull"
//     }else {
//         return "Gosh we both suck"
//     }
// }
// console.log(game())