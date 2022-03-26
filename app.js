let computerSelection, playerSelection, playerScore = 0, computerScore = 0;

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

rock.addEventListener('click',randomChoices)
paper.addEventListener('click',randomChoices)
scissors.addEventListener('click',randomChoices)

const results = document.querySelector('#results')
const final = document.querySelector('#final')

function randomChoices(){
    computerSelection = computerPlay()
    function computerPlay() {
        let randomNumber = Math.floor(Math.random() * 3)
        switch (randomNumber){
            case 0:
                return 'rock'
            case 1:
                return 'scissors'
            case 2:
                return 'paper'
        }
    }
    roundPlay (computerSelection, this.id)
}

function roundPlay(a, b){
    if (b==a){
        results.textContent = `It's a tie! The score right now is: Computer: ${computerScore} , You: ${playerScore} .`
        final.textContent = ` `
    }
    else if ((b=='rock' && a=='scissors')||(b=='paper' && a=='rock')||(b=='scissors' && a=='paper')){
        playerScore = playerScore + 1
        results.textContent = `You win! ${b} beats ${a}! The score right now is: Computer: ${computerScore} , You: ${playerScore} .`
        final.textContent = ` `
    }
    else {
        computerScore = computerScore + 1
        results.textContent = `You lose! ${a} beats ${b}! The score right now is: Computer: ${computerScore} , You: ${playerScore} .`
        final.textContent = ` `
    }
    if (playerScore == 5){
        final.textContent = `You win the game! With a total of: ${playerScore} points! The computer had: ${computerScore} points!`
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore == 5){
        final.textContent = `You lose the game! The computer beat you with a total of: ${computerScore} points! You had: ${playerScore} points!`
        playerScore = 0
        computerScore = 0
    }
}