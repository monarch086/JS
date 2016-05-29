'use strict';

var rC = 0; //random card
var userScore = 0;
var computerScore = 0;

function addCard() {
    rC = Math.floor(Math.random() * 13) + 2;
    userScore += rC;
    document.getElementById('text_one').firstChild.nodeValue = "Your score: " + userScore;
    document.getElementById('left_card').src = "img/Cards/" + rC + "_pic.png";
    
    setTimeout(computerStep, 1000);
    
    if (userScore == 21) {         document.getElementById('text_one').firstChild.nodeValue = "You won: BLACKJACK";
    }
    else if (userScore > 21) {
    document.getElementById('text_one').firstChild.nodeValue = "You lost";
    }
    
}

function computerStep() {
    rC = Math.floor(Math.random() * 13) + 2;
    computerScore += rC;
    document.getElementById('text_two').firstChild.nodeValue = "Your opponent`s score: " + computerScore;
    document.getElementById('right_card').src = "img/Cards/" + rC + "_pic.png";
}

function stop() {
    
}

function start() {
    userScore = 0;
    computerScore = 0;
    
    document.getElementById('text_one').firstChild.nodeValue = "Your score: " + userScore;
    document.getElementById('left_card').src = "img/Cards/2_pic.png";
    
    document.getElementById('text_two').firstChild.nodeValue = "Your opponent`s score: " + computerScore;
    document.getElementById('right_card').src = "img/Cards/2_pic.png";
}

document.getElementById('btnAdd').onclick = addCard;
document.getElementById('btnStop').onclick = stop;
document.getElementById('btnStr').onclick = start;