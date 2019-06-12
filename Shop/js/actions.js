'use strict';

divPhones.onclick = function() {
	document.querySelector('.phone-products').style.display = 'block';
	document.querySelector('.phone-info').style.display = 'block';
	document.querySelector('.laptop-products').style.display = 'none';
	document.querySelector('.tv-products').style.display = 'none';
	document.querySelector('.laptop-info').style.display = 'none';
	document.querySelector('.tv-info').style.display = 'none';
}
divLaptops.onclick = function() {
	document.querySelector('.laptop-products').style.display = 'block';
	document.querySelector('.laptop-info').style.display = 'block';
	document.querySelector('.phone-products').style.display = 'none';
	document.querySelector('.tv-products').style.display = 'none';
	document.querySelector('.phone-info').style.display = 'none';
	document.querySelector('.tv-info').style.display = 'none';
}
divTv.onclick = function() {
	document.querySelector('.tv-products').style.display = 'block';
	document.querySelector('.tv-info').style.display = 'block';
	document.querySelector('.phone-products').style.display = 'none';
	document.querySelector('.laptop-products').style.display = 'none';
	document.querySelector('.laptop-info').style.display = 'none';
	document.querySelector('.phone-info').style.display = 'none';
}

divSamsung.onclick = function() {
	document.querySelector('.samsung-info').style.display = 'block';
	document.querySelector('.iphone-info').style.display = 'none';
	document.querySelector('.xiaomi-info').style.display = 'none';
}
divIphone.onclick = function() {
	document.querySelector('.iphone-info').style.display = 'block';
	document.querySelector('.samsung-info').style.display = 'none';
	document.querySelector('.xiaomi-info').style.display = 'none';
}
divXiaomi.onclick = function() {
	document.querySelector('.xiaomi-info').style.display = 'block';
	document.querySelector('.samsung-info').style.display = 'none';
	document.querySelector('.iphone-info').style.display = 'none';
}

divMac.onclick = function() {
	document.querySelector('.mac-info').style.display = 'block';
	document.querySelector('.acer-info').style.display = 'none';
	document.querySelector('.dell-info').style.display = 'none';
}
divAcer.onclick = function() {
	document.querySelector('.acer-info').style.display = 'block';
	document.querySelector('.mac-info').style.display = 'none';
	document.querySelector('.dell-info').style.display = 'none';
}
divDell.onclick = function() {
	document.querySelector('.dell-info').style.display = 'block';
	document.querySelector('.mac-info').style.display = 'none';
	document.querySelector('.acer-info').style.display = 'none';
}

divLg.onclick = function() {
	document.querySelector('.lg-info').style.display = 'block';
	document.querySelector('.toshiba-info').style.display = 'none';
	document.querySelector('.panasonic-info').style.display = 'none';
}
divToshiba.onclick = function() {
	document.querySelector('.toshiba-info').style.display = 'block';
	document.querySelector('.lg-info').style.display = 'none';
	document.querySelector('.panasonic-info').style.display = 'none';
}
divPanasonic.onclick = function() {
	document.querySelector('.panasonic-info').style.display = 'block';
	document.querySelector('.lg-info').style.display = 'none';
	document.querySelector('.toshiba-info').style.display = 'none';
}