
const computerChoiceView = document.getElementById('computer-choice')
const userChoiceView = document.getElementById('user-choice')
const viewResult = document.getElementById('result')

const potentialChoices = document.querySelectorAll('.action')

let userChoice 

//we have created all of the buttons and now we need to grab the buttons when the user selects them

//syntax: array.forEach(function(currentValue)
// for each potential choice -> create a function that takes the potential choices and the user choice -> add a event listener that listens for a click -> on the click a function will -> take the clicked ID and assign it to the user choice -> the user choice view will pu
  potentialChoices.forEach(
    function potentialChoices(potentialChoices,userChoice){
     potentialChoices.addEventListener('click',function(e){
        userChoice = e.target.id
        userChoiceView.innerHTML = userChoice
    })}
)