var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');
var ball3 = document.getElementById('ball3');
var ball;
var a1 = document.getElementById('a1');
var bx;
var by;
var ax=500;
var ay=400;
var ax2=800;
var ay2=400;
var ax3=800;
var ay3=100;
var c=0;

ball1.onmousedown = listen;
ball2.onmousedown = listen;
ball3.onmousedown = listen;

function listen(e) { // 1. отследить нажатие
  ball = this;
  // подготовить к перемещению
  // 2. разместить на том же месте, но в абсолютных координатах
  ball.style.position = 'absolute';
  moveAt(e);
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.appendChild(ball);

  ball.style.zIndex = 1000; // показывать мяч над другими элементами

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    bx= e.pageX - ball.offsetWidth / 2;
	 ball.style.left =bx+ 'px';
	 
   by= e.pageY - ball.offsetHeight / 2 ;
	ball.style.top = by+ 'px';
  }

  // 3, перемещать по экрану
  document.onmousemove = function(e) {
    moveAt(e);
	non()
  }

  // 4. отследить окончание переноса
  ball1.onmouseup = stopListen;
  ball2.onmouseup = stopListen;
  ball3.onmouseup = stopListen;
  
  function stopListen() {
	document.onmousemove = null;
    ball.onmouseup = null;
	if(c==1){
		ball.style="left:500px;top:400px";
		ball.style.background="blue";
		ball.style.width="200px";
		ball.style.height="200px";	
	}
	else if(c==2){
		ball.style="left:800px;top:400px";
		ball.style.background="blue";
		ball.style.width="200px";
		ball.style.height="200px";	
	}
	else if(c==3){
		ball.style="left:800px;top:100px";
		ball.style.background="blue";
		ball.style.width="200px";
		ball.style.height="200px";	
	}
  }
}

ball1.ondragstart = function() {
  return false;
};
ball2.ondragstart = function() {
  return false;
};
ball3.ondragstart = function() {
  return false;
};

function non(){
	if(Math.abs(bx-ax)<=80 &&  Math.abs(by-ay)<=80){
		ball.style.background="blue";
		c=1;
	}
	else if(Math.abs(bx-ax2)<=80 &&  Math.abs(by-ay2)<=80){
		ball.style.background="blue";
		c=2
	}
	else if(Math.abs(bx-ax3)<=80 &&  Math.abs(by-ay3)<=80){
		ball.style.background="blue";
		c=3
	}
	else{
		c=0;
		ball.style.background="red";
		ball.style.width="100px";
		ball.style.height="100px";	
	}
}











