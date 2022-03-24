let computerSelection, playerSelection, playerScore = 0, computerScore = 0;

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

function randomChoices(){
    computerSelection = computerPlay()
    let playerSelection2 = prompt('What will you use?')
    playerSelection = playerSelection2.toLowerCase()
    roundPlay (computerSelection, playerSelection)
}

function roundPlay(a, b){
    console.log(a)
    console.log(b)
    if (a==b){
        console.log('Its a tie!')
        playerScore = playerScore + 1
        computerScore = computerScore + 1
        console.log(playerScore,computerScore)
    }
    else if ((b=='rock' && a=='scissors')||(b=='paper' && a=='rock')||(b=='scissors' && a=='paper')){
        console.log('You win!')
        playerScore = playerScore + 1
        console.log(playerScore,computerScore)
    }
    else {
        console.log('You lose!')
        computerScore = computerScore + 1
        console.log(playerScore,computerScore)
    }
}

function game(){
    for (let i=1; i<=5; i++){
        randomChoices()
    }
    if (playerScore==computerScore){console.log('Nobody wins!')}
    else if (playerScore>computerScore){console.log('You are the winner of the game!')}
    else {console.log('You lost to the computer!')}
}

game();