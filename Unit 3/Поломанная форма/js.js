/*jslint node: true */
'use strict';

var gun;

function write() {
    document.getElementById('out').innerHTML = document.form.login.value;
}

function f() {
    var lan = document.form.login.value;
        	
	//проверка на заполняемость имени
	if (lan === "") {
        alert("Введите имя");
        return false;
	}
	if (lan < 3) {
		alert("Длина имени должна быть не менее 3 символов");
		return false;
	}
	
	//проверка на заполняемость пароля
	if (document.form.pass.value === "") {
        alert("Введите пароль");
        return false;
	}
	if (document.form.gun[1].checked === false) {
		alert("Выбирете оружие - меч");
		return false;
	}
	
	//вывод информации и отображение меча
	if (document.form.gun[1].checked) {
        document.getElementById('out').innerHTML = document.form.gun[1].value;
		document.getElementById('mech').style.display = "block";
	}
	
	return true;
}











