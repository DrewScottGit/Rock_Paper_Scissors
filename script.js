
const computerChoiceView = document.getElementById('computer-choice')
const userChoiceView = document.getElementById('user-choice')
const viewResult = document.getElementById('result')

const potentialChoices = document.querySelectorAll('.action')

let userChoice 
let computerChoice
let result

//we have created all of the buttons and now we need to grab the buttons when the user selects them

//syntax: array.forEach(function(currentValue)
// for each potential choice -> create a function that takes the potential choices and the user choice -> add a event listener that listens for a click -> on the click a function will -> take the clicked ID and assign it to the user choice -> the user choice view inner HTML is the .action class -> we also want the computer choice to be slected when this function runs
  potentialChoices.forEach(
    function potentialChoices(potentialChoices){
     potentialChoices.addEventListener('click',function(e){
        userChoice = e.target.id
        userChoiceView.innerHTML = userChoice
        createComputerChoiceView()
        viewTheResults()
    })}
)

//create the function to generate the computer choice view
// this function generates a random number after the user picks something. there are 3 choices in the potentialChoices array (Rock, Paper, Scissors). 
// now lets set what to do if the computer lands on a number 1,2, or 3 and put the result in the computer choice field. 
function createComputerChoiceView(){
  const randomChoice = Math.floor(Math.random() * potentialChoices.length) + 1
  if(randomChoice === 1){
    computerChoice = 'Rock'
  }
  if(randomChoice === 2){
    computerChoice = 'Paper'
  }
  if(randomChoice === 3){
    computerChoice = 'Scissors'
  }

  computerChoiceView.innerHTML = computerChoice
}

function viewTheResults(){

  if(computerChoice === 'Rock' && userChoice === 'Rock'){
    result = 'Draw'
  }
  if(computerChoice === 'Rock' && userChoice === 'Paper'){
    result = 'You Win!'
  }
  if(computerChoice === 'Rock' && userChoice === 'Scissors'){
    result = 'You lose!'
  }
  if(computerChoice === 'Paper' && userChoice === 'Rock'){
    result = 'You Lose!'
  }
  if(computerChoice === 'Paper' && userChoice === 'Paper'){
    result = 'Draw!'
  }
  if(computerChoice === 'Paper' && userChoice === 'Scissors'){
    result = 'You Win!'
  }
  if(computerChoice === 'Scissors' && userChoice === 'Rock'){
    result = 'You Win!'
  }
  if(computerChoice === 'Scissors' && userChoice === 'Paper'){
    result = 'You Lose!'
  }
  if(computerChoice === 'Scissors' && userChoice === 'Scissors'){
    result = 'Draw!'
  }
  viewResult.innerHTML = result
}
