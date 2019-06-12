let quantityHouses = prompt('Введите кол-во домов:');
  while (quantityHouses.replace(/\s/g, '').length === 0 || isNaN(quantityHouses)) {
    quantityHouses = prompt('Введите кол-во домов:');
  }
document.write('Имеем ' + quantityHouses + ' дом(а)(ов)' + '<br />');
document.write(' ' + '<br />');

const house = new House();
const appartments = new Appartment();
const persons = new Person();

function showData(myHouse) {

  for (let a = 1; a <= quantityHouses; a++) {
    const house = new House();
    document.write(' ' + '<br />');
    document.write('Информация о ' + a + '-ом ' + ' доме');
    document.write(' ' + '<br />');
    document.write(' ' + '<br />');
    let allAppartments = myHouse.floors * myHouse.appartments;
    document.write('Адрес ' + a + '-го' + ' дома: ' + myHouse.address + '<br />');
    document.write('Кол-во этажей ' + a + '-го' + ' дома: ' + myHouse.floors + '<br />');
    document.write('Кол-во квартир на каждом этаже ' + myHouse.floors + '<br />');
    document.write('Общее кол-во квартир ' + a + '-го' + ' дома: ' + allAppartments + '<br />');
    document.write(' ' + '<br />');
    
    for (let i = 1; i <= allAppartments; i++) {
      const appartments = new Appartment();
      document.write(' ' + '<br />');
      document.write('Информация о ' + i + '-ой ' + 'квартире');
      document.write(' ' + '<br />');
      document.write(' ' + '<br />');
      document.write('Номер ' + i + '-ой ' + ' квартиры: ' + appartments.number + '<br />');
      document.write('Кол-во комнат: ' + appartments.rooms + '<br />');
      document.write('Этаж: ' + appartments.floor + '<br />');
      document.write('Площадь: ' + appartments.square + ' кв.м.' + '<br />');
      document.write('Кол-во жильцов в ' + i + '-ой ' + ' квартире: ' + appartments.persons + '<br />');
      document.write(' ' + '<br />');
      document.write('Информация о жильцах ' + i + '-ой ' +  'квартиры');
      document.write(' ' + '<br />');
      
      for (let j = 1; j <= appartments.persons; j++) {
        const persons = new Person();
        document.write(' ' + '<br />');
        document.write('ФИО жильца: ' + persons.fullName + '<br />'); 
        document.write('Возраст жильца: ' + persons.age + ' года(лет)' + '<br />'); 
      }
    }
  }
}

showData(house);