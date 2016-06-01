'use strict';

var rC = 0; //random card
var userScore = 0;
var computerScore = 0;
var riskIndex = 18; //до каких очков комп продолжает игру
var stopGame = false;

function addCard() {
    if (stopGame == false) {
		rC = Math.floor(Math.random() * 13) + 2;
		userScore += rC;
		document.getElementById('text_one').firstChild.nodeValue = "Your score: " + userScore;
		document.getElementById('left_card').src = "img/Cards/" + rC + "_pic.png";
    }
	
	setTimeout(computerStep, 1000);
	setTimeout(verification, 1010);
}

function computerStep() {
    if (computerScore < riskIndex) {
		rC = Math.floor(Math.random() * 13) + 2;
		computerScore += rC;
		document.getElementById('text_two').firstChild.nodeValue = "Your opponent`s score: " + computerScore;
		document.getElementById('right_card').src = "img/Cards/" + rC + "_pic.png";
	}
}

function verification() {
	var obj = document.getElementById('btnStr');
		
	if (userScore == 21 && computerScore == 21) {
		document.getElementById('text_win').firstChild.nodeValue = "Standoff!";
		endGame();
	}
	else if (userScore > 21 && computerScore > 21) {
		document.getElementById('text_win').firstChild.nodeValue = "Standoff!";
		endGame();
	}
	else if (userScore == 21 && computerScore < 21) {
		document.getElementById('text_win').firstChild.nodeValue = "BLACKJACK!";
		endGame();
    }
	else if (userScore > 21 && computerScore <= 21) {
		document.getElementById('text_win').firstChild.nodeValue = "You lost!";
		endGame();
    }
	else if (userScore < 21 && computerScore > 21) {
		document.getElementById('text_win').firstChild.nodeValue = "You won!";
		endGame();
	}
	else if (userScore < 21 && computerScore == 21) {
		document.getElementById('text_win').firstChild.nodeValue = "You lost!";
		endGame();
	}
	else if (stopGame == true && computerScore >= riskIndex) {
		if (userScore > computerScore) {
			document.getElementById('text_win').firstChild.nodeValue = "You won!";
			endGame();
		}
		else if (userScore < computerScore) {
			document.getElementById('text_win').firstChild.nodeValue = "You lost!";
			endGame();
		}
		else if (userScore == computerScore) {
			document.getElementById('text_win').firstChild.nodeValue = "Standoff!";
			endGame();
		}
		stopGame = false;
	}
}

function endGame() {
	stopGame = false;
	document.getElementById('text_win').style.display = "block";
	document.getElementById('btnAdd').disabled = true;
	document.getElementById('btnStop').disabled = true;
	document.getElementById('btnStr').style.display = "block";
}

function stop() {
    stopGame = true;
	addCard();
}

function start() {
    userScore = 0;
    computerScore = 0;
    
    document.getElementById('text_one').firstChild.nodeValue = "Your score: " + userScore;
    document.getElementById('left_card').src = "img/Cards/2_pic.png";
    
    document.getElementById('text_two').firstChild.nodeValue = "Your opponent`s score: " + computerScore;
    document.getElementById('right_card').src = "img/Cards/2_pic.png";
	
	document.getElementById('btnStr').style.display = "none";
	document.getElementById('text_win').style.display = "none";
	
	document.getElementById('btnAdd').disabled = false;
	document.getElementById('btnStop').disabled = false;
}

document.getElementById('btnAdd').onclick = addCard;
document.getElementById('btnStop').onclick = stop;
document.getElementById('btnStr').onclick = start;