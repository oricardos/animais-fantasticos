// import initSmoothScroll from './modules/scroll-suave.js';
import AnimateScroll from "./modules/initiAnimateScroll.js";
import Accordion from "./modules/initAccordion.js";
import TabNav from "./modules/initTabNav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import Dropdown from "./modules/dropdown.js";
import MenuMobile from "./modules/menuMobile.js";
import OpeningHours from "./modules/openingHours.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";

const animateScroll = new AnimateScroll('[data-anime="scroll"]');
animateScroll.init();

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

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const dropdown = new Dropdown("[data-dropdown]");
dropdown.init();

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="list"]'
);
menuMobile.init();

const openingHours = new OpeningHours('[data-semana]');
openingHours.init();

fetchAnimais();
// fetchBitcoin();
