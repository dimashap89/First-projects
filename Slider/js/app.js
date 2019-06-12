let img = document.createElement('img');
img.className = 'image';
img.src = 'images/1.jpg';
document.body.appendChild(img);
let btnBwd = document.querySelector('.btn-prev');
let btnFwd = document.querySelector('.btn-next');
let arr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
let i = 0;

btnFwd.onclick = function() {
	btnBwd.style.display = 'inline-block';
	i++;
	img.src = 'images/' + arr[i];
	document.body.appendChild(img);
	if (i === arr.length -1) {
		btnFwd.style.display = 'none';
	}
}

btnBwd.onclick = function() {
	btnFwd.style.display = 'inline-block';
	i--;
	if (i < 0) {
		i = arr.length - 1;
	}
	img.src = 'images/' + arr[i];
	document.body.appendChild(img);
	if (i === 0) {
		btnBwd.style.display = 'none';
	} 
}