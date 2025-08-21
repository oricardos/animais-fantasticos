import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = this.events;
    }

    this.classList = "active";
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(evt) {
    evt.preventDefault(); 
    this.menuList.classList.add(this.classList);
    this.menuButton.classList.add(this.classList);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.classList);
      this.menuButton.classList.remove(this.classList);
    });
  }

  addMenuMobileEvents(){
    this.events.forEach((userEvent) => {
        this.menuButton.addEventListener(userEvent, this.openMenu);
      });
  }

  init(){
    if(this.menuButton && this.menuList){
      this.addMenuMobileEvents();
    }
    return this;
  }

}
