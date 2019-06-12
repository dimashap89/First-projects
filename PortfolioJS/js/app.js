'use strict';


let img = document.querySelector('.slider');
img.src = 'assets/image/1.jpg';
let btnBwd = document.querySelector('.left-arrow');
let btnFwd = document.querySelector('.right-arrow');
let arr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
let i = 0;


btnFwd.onclick = function () {
	i++;
	img.src = 'assets/image/' + arr[i];
	if (i === arr.length) {
		img.src = 'assets/image/1.jpg';
		i = 0;
	}
}

btnBwd.onclick = function() {
	i--;
	if (i < 0) {
		i = arr.length - 1;
	}
	img.src = 'assets/image/' + arr[i];
}

let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');
let circle3 = document.querySelector('.circle3');
let circle4 = document.querySelector('.circle4');
let circle5 = document.querySelector('.circle5');

circle1.onclick = function() {
	img.src = 'assets/image/1.jpg';
}
circle2.onclick = function() {
	img.src = 'assets/image/2.jpg';
}
circle3.onclick = function() {
	img.src = 'assets/image/3.jpg';
}
circle4.onclick = function() {
	img.src = 'assets/image/4.jpg';
}
circle5.onclick = function() {
	img.src = 'assets/image/5.jpg';
}

let date = moment().format('LL');
let spanDate = document.createElement('span');
document.body.appendChild(spanDate);
spanDate.className = 'spanDate';
spanDate.innerHTML = date;



let clock = document.createElement('div');
document.body.appendChild(clock);
clock.className = 'clock';

function time(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10) {
        hours = "0" + hours; 
    } 

    if (minutes < 10) {
        minutes = "0" + minutes;
    } 

    if (seconds < 10) {
        seconds = "0" + seconds;
    } 

    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(time, 1000);