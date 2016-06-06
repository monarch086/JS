'use strict';
var lRoom, wRoom, lLam, wLam, minLen, offset, laying,
	canvas = document.getElementById("canv"),
	context = canvas.getContext('2d'),
	numberOfRows, //кол-во рядов ламината
	remainder = 0, //размер последнего оставшегося куска
	sumOfRemainder = 0, //кол-во оставшихся кусков
	arrOfRemainder, //массив остатков
	correctionOfMin = 0; //смещение ряда для избежания мелких остатков

function draw(){
	initializeVars();
	clear();
	
	canvas.width = wRoom;
	canvas.height = lRoom;
	context.strokeRect(0, 0, wRoom, lRoom);
	
	context.beginPath();
	var currentYPosition = wLam;
	var currentXPosition = lLam;
	
	for(var i = 0; i < numberOfRows; i++) {
		context.moveTo(0, currentYPosition);
		context.lineTo(wRoom, currentYPosition);
		context.stroke();
		currentYPosition += wLam;
	}
	
	currentYPosition = 0;
	
	for(var i = 0; i < numberOfRows - 1; i++) {
		//alert("i = " + i);
		setCorrectionOfMin();
		currentXPosition -= correctionOfMin;
		while(currentXPosition < wRoom) {
			context.moveTo(currentXPosition, currentYPosition);
			context.lineTo(currentXPosition, (currentYPosition + wLam));
			context.stroke();
			context.moveTo(currentXPosition, currentYPosition);
			currentXPosition += lLam;
		}
		correctionOfMin = 0;
		remainder = currentXPosition - wRoom;
		if(remainder < minLen) {
			remainder = 0;
			sumOfRemainder++;
			currentXPosition = lLam;
		}
		else {
			currentXPosition = remainder;
		}
		currentYPosition += wLam;
	}
}

function setCorrectionOfMin() {
	if(remainder > 0) {
		correctionOfMin = 0; //to do
	}
	else {
		if((wRoom%lLam) < minLen) {
			correctionOfMin = minLen - (wRoom%lLam);
		}
		if((lLam - correctionOfMin) < minLen) {
			correctionOfMin = lLam - Math.floor(((lLam - correctionOfMin) + minLen) / 2);
		}
	}
}

function initializeVars() {
	lRoom = document.getElementById("lRoom").value;
	wRoom = document.getElementById("wRoom").value;
	lLam = document.getElementById("lLam").value / 10;
	wLam = document.getElementById("wLam").value / 10;
	numberOfRows = Math.ceil(wRoom / wLam);
	minLen = document.getElementById("minLen").value / 10;
}

function clear() {
	var hcanv = canvas.height,
		wcanv = canvas.width;
	context.clearRect(0, 0, wcanv, hcanv);
}

document.getElementById("btnCalculate").onclick = draw;