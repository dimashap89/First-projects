function Appartment(number, rooms, floor, square, persons) {
  this.number = prompt('Введите номер квартиры:');
  while (this.number.replace(/\s/g, '').length === 0 || isNaN(this.number)) {
          this.number = prompt('Введите номер квартиры:');
        } 
  this.rooms = prompt('Введите кол-во комнат:');
  while (this.rooms.replace(/\s/g, '').length === 0 || isNaN(this.rooms)) {
          this.rooms = prompt('Введите кол-во комнат:');
        }
  this.floor = prompt('Введите этаж:');
  while (this.floor.replace(/\s/g, '').length === 0 || isNaN(this.floor) || this.floor > this.floors) {
          this.floor = prompt('Введите этаж:');
        } 
  this.square = prompt('Введите площадь:');
  while (this.square.replace(/\s/g, '').length === 0 || isNaN(this.square)) {
          this.square = prompt('Введите площадь:');
        } 
  this.persons = prompt('Введите кол-во жильцов в квартире:');
  while (this.persons.replace(/\s/g, '').length === 0 || isNaN(this.persons)) {
          this.persons = prompt('Введите кол-во жильцов в квартире:');
        } 
}