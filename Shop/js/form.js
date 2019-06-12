'use strict';

let form = document.querySelector('.form');
let name = form.querySelector('.name');
let city = form.querySelector('.city');
let storage = form.querySelector('.storage');
let payment = form.querySelectorAll('.payment');
let quantity = form.querySelector('.quantity');
let comments = form.querySelector('.comments');


form.addEventListener('submit', function(event) {
	event.preventDefault();

	if(!sendForm()) {
		return
	}

	document.write('name: ', name.value + '</br>');
	document.write('city: ', city.value + '</br>');
	document.write('storage: ', storage.value + '</br>');
	
	for (let i = 0; i < payment.length; i++) {
		if (payment[i].checked) {
			document.write('payment: ', payment[i].value + '</br>');
		}
	}
	
	document.write('quantity: ', quantity.value + '</br>');
	document.write('comments: ', comments.value + '</br>');	
})

document.querySelector('.information').addEventListener('click', function(event) {
	if (event.target.classList.contains('btn-buy')) {
		form.style.display = 'block';
	}
})

let btnCancel = form.querySelector('.cancel');
btnCancel.onclick = function() {
	form.style.display = 'none';
}
