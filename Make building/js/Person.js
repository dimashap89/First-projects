function Person(fullName, age) {
  this.fullName = prompt('Введите ФИО жильца:');
  while (this.fullName.replace(/\s/g, '').length === 0 || !isNaN(this.fullName)) {
            this.fullName = prompt('Введите ФИО жильца:');
          } 
  this.age = prompt('Введите возраст жильца:');
  while (this.age.replace(/\s/g, '').length === 0 || isNaN(this.age)) {
            this.age = prompt('Введите возраст жильца:');
          } 
}