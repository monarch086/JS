var menu, box1, box2,
	fishes = [],
	currentPosition = 0;

window.onload = start;
function start() {
	menu = document.getElementById("menu");
	box1 = document.getElementById("box1");
	box2 = document.getElementById("box2");
	
	menu.onclick = slot1;
	box1.onclick = slot2;
}

function slot1(event) {
	var item = event.srcElement;
	var category = item.innerText;
	console.log(item);
	console.log(category);
	if (category === "Котята") {
		loadKittens();
	} else if (category === "Щеночки") {
		loadPuppies();
	} else {
		loadFishes();
	}
}

function slot2(event) {
	var x = event.srcElement;
	console.log(x);
	var p = x.src;
	if(x == document.getElementById("left")) {
		moveLeft();
	}
	else if(x == document.getElementById("right")) {
		moveRight();
	}
	else{
		box2.innerHTML = '<img src="' + p + '">';
		restorePics();
		x.style.width = '220px';
		x.style.height = '170px';
	}
}

function restorePics() {
	var elems = document.getElementsByClassName("fishes");
	for (var i = 0; i < elems.length; i++) {
		elems[i].style.width = '200px';
		elems[i].style.height = '150px';
	}
}

function moveLeft() {
	if(currentPosition > 0) {
		currentPosition--;
		var code = '<img src="images/navigate-left.png" id="left"/>';
		for (var i = currentPosition; i < currentPosition + 4; i++) {
			code += '<img src="images/fishes/' + (i+1) + '.jpg" class="fishes"/>';
		}
		code += '<img src="images/navigate-right.png" id="right"/>';
		box1.innerHTML = code;
	}
}

function moveRight() {
	if(currentPosition < fishes.length - 4) {
		currentPosition++;
		var code = '<img src="images/navigate-left.png" id="left"/>';
		for (var i = currentPosition; i < currentPosition + 4; i++) {
			code += '<img src="images/fishes/' + (i+1) + '.jpg" class="fishes"/>';
		}
		code += '<img src="images/navigate-right.png" id="right"/>';
		box1.innerHTML = code;
	}
}

function loadKittens() {
	var code = "";
	for (var i = 0; i < 10; i++) {
		code += '<img src="images/kittens/' + (i+1) + '.jpg" />';
	}
	box1.innerHTML = code;
}

function loadPuppies() {
	var code = "";
	for (var i = 0; i < 10; i++) {
		code += '<img src="images/puppies/' + (i+1) + '.jpg" />';
	}
	box1.innerHTML = code;
}

function loadFishes() {
	var code = '<img src="images/navigate-left.png" id="left"/>';
	for (var i = 0; i < 10; i++) {
		fishes[i] = '<img src="images/fishes/' + (i+1) + '.jpg" class="fishes"/>';
		if(i < 4) {
			code += '<img src="images/fishes/' + (i+1) + '.jpg" class="fishes"/>';
		}
	}
	code += '<img src="images/navigate-right.png" id="right"/>';
	box1.innerHTML = code;
	currentPosition = 0;
}