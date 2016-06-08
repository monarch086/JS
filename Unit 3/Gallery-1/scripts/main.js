var menu, box1, box2,
	kittens = [],
	puppies = [],
	fishes = [],
	array,	//указатель на текущий масив 
	currentPosition = 0; //смещение слайдера относительно начала
	
window.onload = start;
function start() {
	menu = document.getElementById("menu");
	box1 = document.getElementById("box1");
	box2 = document.getElementById("box2");
	
	menu.onclick = slot1;
	box1.onclick = slot2;
	
	for (var i = 0; i < 10; i++) {
		kittens[i] = '<img src="images/kittens/' + (i+1) + '.jpg" class="kittens"/>';
		puppies[i] = '<img src="images/puppies/' + (i+1) + '.jpg" class="puppies"/>';
		fishes[i] = '<img src="images/fishes/' + (i+1) + '.jpg" class="fishes"/>';
	}
}

function slot1(event) { //отработка нажатий в меню
	var item = event.srcElement;
	var category = item.innerText;
	console.log(item);
	console.log(category);
	if (category === "Котята") {
		array = kittens;
		currentPosition = 0;
		
	} else if (category === "Щеночки") {
		array = puppies;
		currentPosition = 0;
		
	} else {
		array = fishes;
		currentPosition = 0;
		
	}
	clearBox2();
	loadSlider();
}

function slot2(event) { //отработка нажатий на элементы слайдера
	var x = event.srcElement;
	console.log(x);
	
	var p = x.src;
	if(x == document.getElementById("left")) 		
		moveLeft();
	
	else if(x == document.getElementById("right")) 
		moveRight();
			
	else{
		box2.innerHTML = '<img src="' + p + '">';
		restorePics(x.className);
		x.style.width = '220px';
		x.style.height = '170px';
	}
}

function clearBox2() { //очистить Box2 (поле с большой фотографией)
	var elems = box2.getElementsByTagName('img');
	if(elems.length > 0)
		box2.removeChild(elems[0]);
}

function restorePics(className) { //восстановить размер всех элементов слайдера до минимального
	var elems = document.getElementsByClassName(className);
	for (var i = 0; i < elems.length; i++) {
		elems[i].style.width = '200px';
		elems[i].style.height = '150px';
	}
}

function moveLeft() {
	if(currentPosition > 0) {
		currentPosition--;
		loadSlider();
	}
}

function moveRight() {
	if(currentPosition < array.length - 4) {
		currentPosition++;
		loadSlider();
	}
}

function loadSlider() { //загрузка картинок слайдера
	var code = '<img src="images/navigate-left.png" id="left"/>';
	for (var i = currentPosition; i < currentPosition + 4; i++) 
		code += array[i];
	code += '<img src="images/navigate-right.png" id="right"/>';
	box1.innerHTML = code;
}
