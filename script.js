let userScore = 0;
let cpuScore = 0;

const playRound = (playerChoice,computerChoice) => {

    let player = playerChoice.toLowerCase()
    let cpu = computerChoice.toLowerCase()

    if (player === 'rock') {
        if (cpu === 'rock') {
            return {
                result: 'tie',
                msg: 'Cpu chose Rock, you tied!'
            }
        } else if (cpu === 'paper') {
            cpuScore = cpuScore + 1
            return {
                result: 'loss',
                msg: 'Cpu chose Paper, you lost!'
            }
        } else {
            userScore = userScore + 1
            return {
                result: 'win',
                msg: 'Cpu chose Scissors, you win!'
            }
        }
    } else if (player === 'paper') {
        if (cpu === 'rock') {
            userScore = userScore + 1
            return {
                result: 'win',
                msg: 'Cpu chose Rock, you win!'
            }
        } else if (cpu === 'paper') {
            return {
                result: 'tie',
                msg: 'Cpu chose Paper, you tied!'
            }
        } else {
            cpuScore = cpuScore + 1
            return {
                result: 'loss',
                msg: 'Cpu chose Scissors, you lost!'
            }
        }
    } else if (player === 'scissors') {
        if (cpu === 'rock') {
            cpuScore = cpuScore + 1
            return {
                result: 'loss',
                msg: 'Cpu chose Rock, you lost!'
            }
        } else if (cpu === 'paper') {
            userScore = userScore + 1
            return {
                result: 'win',
                msg: 'Cpu chose Paper, you win!'
            }
        } else {
            return {
                result: 'tie',
                msg: 'Cpu chose Scissors, you tied!'
            }
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

const resultContainer = document.querySelector('#RoundResult')
const buttons = document.querySelectorAll('.btn')
const cpuScoreEle = document.querySelector('#CPUScore')
const userScoreEle = document.querySelector('#YourScore')

buttons.forEach(button => button.addEventListener('click', () => {
    let activeBtn = document.querySelector('.btnActive')
    if (activeBtn) {
        activeBtn.classList.remove('btnActive')
    }
    button.classList.add('btnActive');
    let userGuess = button.getAttribute('data-choice')
    let cpuGuess = getComputerChoice()
    let round = playRound(userGuess, cpuGuess)
    resultContainer.classList.remove("win", "loss", "tie")
    resultContainer.innerText = round.msg
    resultContainer.classList.add(round.result)
    cpuScoreEle.innerText = cpuScore;
    userScoreEle.innerText = userScore;
    if (cpuScore === 5|| userScore === 5) {
        alert(cpuScore === 5 ? 'Unlucky, you lost!' : 'Yay you won!')
        let activeBtn = document.querySelector('.btnActive')
        if (activeBtn) {
            activeBtn.classList.remove('btnActive')
        }
        userScore = 0;
        cpuScore = 0;
        resultContainer.innerText = '';
        resultContainer.classList.remove("win", "loss", "tie")
        cpuScoreEle.innerText = cpuScore;
        userScoreEle.innerText = userScore;
    }
}))
