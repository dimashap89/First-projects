function House(address, floors, appartments) {
  this.address = prompt('Введите адрес дома:');
	  while (this.address.replace(/\s/g, '').length === 0) {
	        this.address = prompt('Введите адрес' + a + '-го' + ' дома:');
	      } 
  this.floors = prompt('Введите кол-во этажей:');
	  while (this.floors.replace(/\s/g, '').length === 0 || isNaN(this.floors)) {
	        this.floors = prompt('Введите кол-во этажей:');
	      } 
  this.appartments = prompt('Введите кол-во квартир на этаже:');
	  while (this.appartments.replace(/\s/g, '').length === 0 || isNaN(this.appartments)) {
	        this.appartments = prompt('Введите кол-во квартир на этаже:');
	      } 
}