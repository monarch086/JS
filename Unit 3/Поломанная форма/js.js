/*jslint node: true */
'use strict';

var gun;

function write() {
    document.getElementById('out').innerHTML = document.form.login.value;
}

function f() {
    var lan = document.form.login.value,
        valid = true;
	
	//проверка на заполняемость имени
	if (lan === "") {
        document.alert("введите имя");
        valid = false;
	}
	if (lan < 3) {
		document.alert("короткое имя");
		valid = false;
	}
	
	//проверка на заполняемость пароля
	if (document.form.pass.value === "") {
        document.alert("введите pass");
        valid = false;
	}
	if (document.form.gun[1].checked === false) {
		document.alert("выбирете оружие");
		valid = false;
	}
	if (document.form.gun[1].checked) {
        document.getElementById('out').innerHTML = document.form.gun[1].value;
        document.getElementById('mech').style = "display: block";
	}
	
	return valid;
}











