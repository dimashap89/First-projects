'use strict';

function sendForm() {

	if (document.forms[0].name.value === "") {
		alert('Пожалуйста, введите Ваше имя');
		name.focus();
		return false
	}

	if (document.forms[0].city.value === "0") {
		alert('Пожалуйста, выберите город');
		return false
	}

	if (document.forms[0].storage.value === "") {
		alert('Пожалуйста, введите номер склада');
		storage.focus();
		return false
	}

	if (document.forms[0].payment.value === "") {
		alert('Пожалуйста, введите вид оплаты');
		return false
	}

	if (document.forms[0].quantity.value === "") {
		alert('Пожалуйста, введите кол-во товара');
		quantity.focus();
		return false
	}

	if (document.forms[0].comments.value === "") {
		alert('Пожалуйста, введите комментарий к покупке');
		comments.focus();
		return false
	}
	return true
}