'use strict';
var lRoom, wRoom, lLam, wLam, minLen, offset, laying,
	canvas = document.getElementById("canv"),
	context = canvas.getContext('2d');


function draw(){
	lRoom = document.getElementById("lRoom").value;
	wRoom = document.getElementById("wRoom").value;
	lLam = document.getElementById("lLam").value;
	wLam = document.getElementById("wLam").value;
	
	clear();
	canvas.width = wRoom;
	canvas.height = lRoom;
	context.strokeRect(0, 0, wRoom, lRoom);
	
	context.beginPath();
	var currentPosition = wLam;
	while (currentPosition <= wRoom) {
		context.moveTo(0, currentPosition);
		context.lineTo(wRoom, currentPosition);
		context.stroke();
		currentPosition += wLam;
		context.moveTo(0, currentPosition);
	}
	
}

function clear(){
	var hcanv = canvas.height,
		wcanv = canvas.width;
	context.clearRect(0, 0, wcanv, hcanv);
}

document.getElementById("btnCalculate").onclick = draw;