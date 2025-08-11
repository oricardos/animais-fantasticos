export default function funcionamento() {}

const daysOfOperation = document.querySelector('[data-semana]');
const daysOfTheWeek = daysOfOperation.dataset.semana.split(',').map(Number);
const openingHours = daysOfOperation.dataset.horario.split(',').map(Number);

const dateNow = new Date();
const today = dateNow.getDay();
const timeNow = dateNow.getHours();

const openDay = daysOfTheWeek.indexOf(today) !== -1;
const openHours = timeNow >= openingHours[0] && timeNow < openingHours[1];

if (openDay && openHours) {
  daysOfOperation.classList.add('isOpen');
}
