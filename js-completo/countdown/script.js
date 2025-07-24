import Countdown from './countdown.js';

const timeUntilChristmas = new Countdown('24 December 2025 23:59:59 GMT-0300');
console.log(timeUntilChristmas.total);

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

setInterval(() => {
  days.innerText = timeUntilChristmas.total.days + ' dia(s) ';
  hours.innerText = timeUntilChristmas.total.hours + ' hora(s)';
  minutes.innerText = timeUntilChristmas.total.minutes + ' minuto(s)';
  seconds.innerText = timeUntilChristmas.total.seconds + ' segundo(s)';
}, 1000);
