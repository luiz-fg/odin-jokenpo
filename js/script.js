
const btnStart = document.querySelector('#btnStart');
const btnStop = document.querySelector('#btnStop');
let HumanHands = document.querySelectorAll('[data-hand]');

let humanChoice = document.querySelector('.humanChoice');
let computerChoice = document.querySelector('.computerChoice');


let [humanScore, computerScore, isPlaying] = [0, 0, false];

function getComputerChoice() {
    const hands = ['rock', 'paper', 'scissor'];
    return hands[Math.floor(Math.random() * hands.length)];
};

function getHumanChoice(playerChoice) {
    clearClassList();
    if(!isPlaying) {
        alert('Start Game First!');
    } else {
        whoWin(playerChoice);
    }
};

function whoWin(human) {
    let computer = getComputerChoice();

    humanChoice.classList.add(human);
    computerChoice.classList.add(computer);

    humanChoice.innerHTML = `<img src="./img/${human}.svg">`
    computerChoice.innerHTML = `<img src="./img/${computer}.svg">`


        if(human === computer) {
            document.querySelector('.winner').innerHTML = 'match draw';
        }
        else if(human === 'rock' && computer === 'scissor' || human === 'scissor' && computer === 'paper' ||  human === 'paper' && computer === 'rock') {
            humanScore++;
            document.querySelector('.humanScore').innerHTML = humanScore;
            document.querySelector('.winner').innerHTML = 'human win';
        } 
        else {

            computerScore++;
            document.querySelector('.computerScore').innerHTML = computerScore;
            document.querySelector('.winner').innerHTML = 'computer win';
        }
}


function reset() {
    [humanScore, computerScore] = [0,0];
    document.querySelector('.humanScore').innerHTML = '';
    document.querySelector('.computerScore').innerHTML = '';

    document.querySelector('.winner').innerHTML = '';

    humanChoice.innerHTML = ``
    computerChoice.innerHTML = ``
    clearClassList();


}


function clearClassList() {
    humanChoice.classList.forEach((cl) => {
        if(cl === 'rock' || cl === 'paper' || cl === 'scissor') {
            humanChoice.classList.remove(cl);
        }
    })

    computerChoice.classList.forEach((cl) => {
        if(cl === 'rock' || cl === 'paper' || cl === 'scissor') {
            computerChoice.classList.remove(cl);
        }
    })
}

function startGame() {
    isPlaying = true;
    reset()
    document.querySelector('.humanScore').innerHTML = humanScore;
    document.querySelector('.computerScore').innerHTML = computerScore;
}

function stopGame() {
    isPlaying = false;
    reset();

}


btnStart.addEventListener('click', startGame)
btnStop.addEventListener('click', stopGame)


document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        startGame();
    }
    else if(event.key === 'Escape') {
        stopGame()
    }
    else if(event.key === 'r') {
        getHumanChoice('rock')
    }
    else if(event.key === 'p') {
        getHumanChoice('paper')
    }
    else if(event.key === 's') {
        getHumanChoice('scissor')
    }
})

HumanHands = [...HumanHands];
HumanHands.forEach((HumanHand) => {

    HumanHand.addEventListener('click', () => {
        getHumanChoice(HumanHand.dataset.hand);
    })
  });



