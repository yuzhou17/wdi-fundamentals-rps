
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getPlayerMove(move) {
    move || getInput();

    return move;
}

function getComputerMove(move) {
    move || randomPlay();

    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove===computerMove){
        winner = "tie";
    } else if (playerMove=scissors && computerMove=paper){
        winner = "player";
    } else if (playerMove=paper && computerMove=rock){
        winner = "player";
    } else if (playerMove=rock && computerMove=scissors){
        winner = "player";
    } else {
        winner = "computer";
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    if (winner = "player") {
        if (playerWins<5) {
            playerWins + 1;
            console.log('Player chose '+playerMove+' and Computer chose '+computerMove);
            console.log('The score is '+playerWins+' to '+computerWins);
        }
    }
    else if (winner = "computer") {
        if (computerWins<5) {
            computerWins + 1;
            console.log('Player chose '+playerMove+' and Computer chose '+computerMove);
            console.log('The score is '+playerWins+' to '+computerWins);
        }
    }
    else if (winner="tie") {
        console.log('Player chose '+playerMove+' and Computer chose '+computerMove);
        console.log('The score is '+playerWins+' to '+computerWins);
    }
 
    return [playerWins, computerWins];
}


