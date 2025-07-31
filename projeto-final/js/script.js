// import initSmoothScroll from './modules/scroll-suave.js';
import initiAnimateScroll from './modules/initiAnimateScroll.js';
import Accordion from './modules/initAccordion.js';
import TabNav from './modules/initTabNav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdown from './modules/dropdown.js';
import menuMobile from './modules/menuMobile.js';
import funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetchAnimais.js';
import fetchBitcoin from './modules/fetchBitcoin.js';

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

// initSmoothScroll();
initiAnimateScroll();
initDropdown();
menuMobile();
funcionamento();
fetchAnimais();
// fetchBitcoin();
