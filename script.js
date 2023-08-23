let userScore = 0;
let cpuScore = 0;

const playRound = (playerChoice,computerChoice) => {

    let player = playerChoice.toLowerCase()
    let cpu = computerChoice.toLowerCase()

    if (player === 'rock') {
        if (cpu === 'rock') {
            return 'Tie - Rock drew with Rock'
        } else if (cpu = 'paper') {
            cpuScore = cpuScore + 1
            return 'You Lost - Paper beats Rock'
        } else {
            userScore = userScore + 1
            return 'You Won - Rock beats scissors'
        }
    } else if (player === 'paper') {
        if (cpu === 'rock') {
            userScore = userScore + 1
            return 'You won, Paper beats Rock'
        } else if (cpu === 'paper') {
            return 'Tie - Paper drew with Paper'
        } else {
            cpuScore = cpuScore + 1
            return 'You lost - Scissors beat Paper'
        }
    } else if (player === 'scissors') {
        if (cpu === 'rock') {
            cpuScore = cpuScore + 1
            return 'You lost - Rocks beat Scissors'
        } else if (cpu === 'paper') {
            userScore = userScore + 1
            return 'You won - Scissors beat paper'
        } else {
            return 'Tie - Scissors drew with Scissors'
        }
    } else {
        return 'You entered an invalid term'
    }
} 


const getComputerChoice = () => {
    let option = Math.floor(Math.random() * 3)
    switch(option) {
        case 0:
            return ('Rock')
            break;
        case 1:
            return ('Paper')
            break;
        case 2:
            return('Scissors')
            break;
    }
}

const game = () => {
    for(let i = 1; i <= 5; i++) {
        let userGuess = prompt('Rock,Paper,Scissors?')
        let cpuGuess = getComputerChoice()
        console.log('You: ' + userGuess + ' - Cpu guesses: ' + cpuGuess)
        playRound(userGuess, cpuGuess)
        if (i === 5) {
            if (userScore > cpuScore) {
                console.log('You won: ' + userScore + '-' + cpuScore)
            } else if (userScore < cpuScore) {
                console.log('You lost: ' + userScore + '-' + cpuScore)
            } else (
                console.log('You tied: ' + userScore + '-' + cpuScore)
            )
        }
    }
}

game()
