export default class OpeningHours {
  constructor(daysOfOperation){
    this.daysOfOperation = document.querySelector(daysOfOperation);
  }

  openingData(){
    this.daysOfTheWeek = this.daysOfOperation.dataset.semana.split(',').map(Number);
    this.openingHours = this.daysOfOperation.dataset.horario.split(',').map(Number);
  }

  dataNow(){
    this.dateNow = new Date();
    this.today = this.dateNow.getDay();
    this.timeNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen(){
    const openDay = this.daysOfTheWeek.indexOf(this.today) !== -1;
    const openHours = this.timeNow >= this.openingHours[0] && this.timeNow < this.openingHours[1];

    return openDay && openHours
  };

  activeOpen(){
    if (this.isOpen()){
      this.daysOfOperation.classList.add('isOpen');
    }
  }
  
  init(){
    if (this.daysOfOperation){
      this.dataNow();
      this.openingData();
      this.activeOpen();
    }
    return this;
  }
}

