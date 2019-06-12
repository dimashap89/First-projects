'use strict';

let divPhones = document.createElement('div');
divPhones.className = 'phones';
document.querySelector('.categories').appendChild(divPhones);
let btnPhones = document.createElement('button');
btnPhones.appendChild(document.createTextNode('Мобильные телефоны'));
divPhones.appendChild(btnPhones);

let divLaptops = document.createElement('div');
divLaptops.className = 'laptops';
document.querySelector('.categories').appendChild(divLaptops);
let btnLaptops = document.createElement('button');
btnLaptops.appendChild(document.createTextNode('Ноутбуки'));
divLaptops.appendChild(btnLaptops);

let divTv = document.createElement('div');
divTv.className = 'tv';
document.querySelector('.categories').appendChild(divTv);
let btnTv = document.createElement('button');
btnTv.appendChild(document.createTextNode('Телевизоры'));
divTv.appendChild(btnTv);


let divPhoneProducts = document.createElement('div');
divPhoneProducts.className = 'phone-products position';
document.querySelector('.products').appendChild(divPhoneProducts);

let divSamsung = document.createElement('div');
divSamsung.className = 'samsung';
divPhoneProducts.appendChild(divSamsung);
let btnSamsung = document.createElement('button');
btnSamsung.appendChild(document.createTextNode('Samsung'));
divSamsung.appendChild(btnSamsung);

let divIphone = document.createElement('div');
divIphone.className = 'iphone';
divPhoneProducts.appendChild(divIphone);
let btnIphone = document.createElement('button');
btnIphone.appendChild(document.createTextNode('Iphone'));
divIphone.appendChild(btnIphone);

let divXiaomi = document.createElement('div');
divXiaomi.className = 'xiaomi';
divPhoneProducts.appendChild(divXiaomi);
let btnXiaomi = document.createElement('button');
btnXiaomi.appendChild(document.createTextNode('Xiaomi'));
divXiaomi.appendChild(btnXiaomi);


let divLaptopProducts = document.createElement('div');
divLaptopProducts.className = 'laptop-products position';
document.querySelector('.products').appendChild(divLaptopProducts);

let divMac = document.createElement('div');
divMac.className = 'mac';
divLaptopProducts.appendChild(divMac);
let btnMac = document.createElement('button');
btnMac.appendChild(document.createTextNode('Mac'));
divMac.appendChild(btnMac);

let divAcer = document.createElement('div');
divAcer.className = 'acer';
divLaptopProducts.appendChild(divAcer);
let btnAcer = document.createElement('button');
btnAcer.appendChild(document.createTextNode('Acer'));
divAcer.appendChild(btnAcer);

let divDell = document.createElement('div');
divDell.className = 'dell';
divLaptopProducts.appendChild(divDell);
let btnDell = document.createElement('button');
btnDell.appendChild(document.createTextNode('Dell'));
divDell.appendChild(btnDell);


let divTvProducts = document.createElement('div');
divTvProducts.className = 'tv-products position';
document.querySelector('.products').appendChild(divTvProducts);

let divLg = document.createElement('div');
divLg.className = 'lg';
divTvProducts.appendChild(divLg);
let btnLg = document.createElement('button');
btnLg.appendChild(document.createTextNode('LG'));
divLg.appendChild(btnLg);

let divToshiba = document.createElement('div');
divToshiba.className = 'toshiba';
divTvProducts.appendChild(divToshiba);
let btnToshiba = document.createElement('button');
btnToshiba.appendChild(document.createTextNode('Toshiba'));
divToshiba.appendChild(btnToshiba);

let divPanasonic = document.createElement('div');
divPanasonic.className = 'panasonic';
divTvProducts.appendChild(divPanasonic);
let btnPanasonic = document.createElement('button');
btnPanasonic.appendChild(document.createTextNode('Panasonic'));
divPanasonic.appendChild(btnPanasonic);


let divPhoneInfo = document.createElement('div');
divPhoneInfo.className = 'phone-info';
document.querySelector('.information').appendChild(divPhoneInfo);

let divSamsungInfo = document.createElement('div');
divSamsungInfo.className = 'samsung-info position';
divPhoneInfo.appendChild(divSamsungInfo);
let divSamsungDescription = document.createElement('div');
divSamsungDescription.appendChild(document.createTextNode('Смартфон SAMSUNG Galaxy M20 4/64 GB'));
divSamsungInfo.appendChild(divSamsungDescription);
let btnBuy = document.createElement('button');
btnBuy.className = 'btn-buy';
btnBuy.innerHTML = 'Купить';
divSamsungInfo.appendChild(btnBuy);

let divIphoneInfo = document.createElement('div');
divIphoneInfo.className = 'iphone-info position';
divPhoneInfo.appendChild(divIphoneInfo);
let divIphoneDescription = document.createElement('div');
divIphoneDescription.appendChild(document.createTextNode('Смартфон APPLE iPhone 7 256Gb Black (CPO)'));
divIphoneInfo.appendChild(divIphoneDescription);
let btn2 = btnBuy.cloneNode(true);
divIphoneInfo.appendChild(btn2);

let divXiaomiInfo = document.createElement('div');
divXiaomiInfo.className = 'xiaomi-info position';
divPhoneInfo.appendChild(divXiaomiInfo);
let divXiaomiDescription = document.createElement('div');
divXiaomiDescription.appendChild(document.createTextNode('Смартфон XIAOMI Redmi 6A 2/16Gb Black'));
divXiaomiInfo.appendChild(divXiaomiDescription);
let btn3 = btnBuy.cloneNode(true);
divXiaomiInfo.appendChild(btn3);


let divLaptopInfo = document.createElement('div');
divLaptopInfo.className = 'laptop-info';
document.querySelector('.information').appendChild(divLaptopInfo);

let divMacInfo = document.createElement('div');
divMacInfo.className = 'mac-info position';
divLaptopInfo.appendChild(divMacInfo);
let divMacDescription = document.createElement('div');
divMacDescription.appendChild(document.createTextNode('Ноутбук APPLE A1466 MacBook Air (MQD32UA/A)'));
divMacInfo.appendChild(divMacDescription);
let btn4 = btnBuy.cloneNode(true);
divMacInfo.appendChild(btn4);

let divAcerInfo = document.createElement('div');
divAcerInfo.className = 'acer-info position';
divLaptopInfo.appendChild(divAcerInfo);
let divAcerDescription = document.createElement('div');
divAcerDescription.appendChild(document.createTextNode('Ноутбук ACER Aspire 5 A515-51G-34U8'));
divAcerInfo.appendChild(divAcerDescription);
let btn5 = btnBuy.cloneNode(true);
divAcerInfo.appendChild(btn5);

let divDellInfo = document.createElement('div');
divDellInfo.className = 'dell-info position';
divLaptopInfo.appendChild(divDellInfo);
let divDellDescription = document.createElement('div');
divDellDescription.appendChild(document.createTextNode('Ноутбук DELL Inspiron 5767 (I575810DDL-48S)'));
divDellInfo.appendChild(divDellDescription);
let btn6 = btnBuy.cloneNode(true);
divDellInfo.appendChild(btn6);


let divTvInfo = document.createElement('div');
divTvInfo.className = 'tv-info';
document.querySelector('.information').appendChild(divTvInfo);

let divLgInfo = document.createElement('div');
divLgInfo.className = 'lg-info position';
divTvInfo.appendChild(divLgInfo);
let divLgDescription = document.createElement('div');
divLgDescription.appendChild(document.createTextNode('Телевизор LG 43UK6300PLB'));
divLgInfo.appendChild(divLgDescription);
let btn7 = btnBuy.cloneNode(true);
divLgInfo.appendChild(btn7);

let divToshibaInfo = document.createElement('div');
divToshibaInfo.className = 'toshiba-info position';
divTvInfo.appendChild(divToshibaInfo);
let divToshibaDescription = document.createElement('div');
divToshibaDescription.appendChild(document.createTextNode('Телевизор TOSHIBA 40L2863DG'));
divToshibaInfo.appendChild(divToshibaDescription);
let btn8 = btnBuy.cloneNode(true);
divToshibaInfo.appendChild(btn8);

let divPanasonicInfo = document.createElement('div');
divPanasonicInfo.className = 'panasonic-info position';
divTvInfo.appendChild(divPanasonicInfo);
let divPanasonicDescription = document.createElement('div');
divPanasonicDescription.appendChild(document.createTextNode('Телевизор PANASONIC TX-49FXR600'));
divPanasonicInfo.appendChild(divPanasonicDescription);
let btn9 = btnBuy.cloneNode(true);
divPanasonicInfo.appendChild(btn9);