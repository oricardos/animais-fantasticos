/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/dropdown.js":
/*!********************************!*\
  !*** ./js/modules/dropdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropdown)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\nfunction dropdown() {\n  var dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  dropdownMenus.forEach(function (dropdown) {\n    ['touchstart', 'click'].forEach(function (userEvent) {\n      dropdown.addEventListener(userEvent, handleClick);\n    });\n  });\n  function handleClick(evt) {\n    var _this = this;\n    evt.preventDefault();\n    this.classList.add('active');\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], function () {\n      _this.classList.remove('active');\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown.js?\n}");

/***/ }),

/***/ "./js/modules/fetchAnimais.js":
/*!************************************!*\
  !*** ./js/modules/fetchAnimais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _numeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./numeros.js */ \"./js/modules/numeros.js\");\n\n\n\nfunction fetchAnimais() {\n  function fetchAnimals(_x) {\n    return _fetchAnimals.apply(this, arguments);\n  }\n  function _fetchAnimals() {\n    _fetchAnimals = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var animals, animalsJSON, numerosGrid, _t;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function (_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 1;\n            return fetch(url);\n          case 1:\n            animals = _context.sent;\n            _context.next = 2;\n            return animals.json();\n          case 2:\n            animalsJSON = _context.sent;\n            numerosGrid = document.querySelector('.numeros-grid');\n            animalsJSON.forEach(function (animal) {\n              var divAnimal = createAnimal(animal);\n              numerosGrid.appendChild(divAnimal);\n            });\n            (0,_numeros_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            _context.next = 4;\n            break;\n          case 3:\n            _context.prev = 3;\n            _t = _context[\"catch\"](0);\n            console.error(_t);\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[0, 3]]);\n    }));\n    return _fetchAnimals.apply(this, arguments);\n  }\n  function createAnimal(animal) {\n    var div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = \"\\n    <h3>\".concat(animal.specie, \"</h3>\\n    <span data-numero>\").concat(animal.total, \"</span>\\n  \");\n    return div;\n  }\n  fetchAnimals('./animaisapi.json');\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetchAnimais.js?\n}");

/***/ }),

/***/ "./js/modules/fetchBitcoin.js":
/*!************************************!*\
  !*** ./js/modules/fetchBitcoin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin() {\n  fetch('https://blockchain.info/ticker').then(function (response) {\n    return response.json();\n  }).then(function (bitcoin) {\n    var btc = document.querySelector('.btc');\n    btc.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\n  })[\"catch\"](function (erro) {\n    console.error(erro);\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetchBitcoin.js?\n}");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ funcionamento)\n/* harmony export */ });\nfunction funcionamento() {}\nvar daysOfOperation = document.querySelector('[data-semana]');\nvar daysOfTheWeek = daysOfOperation.dataset.semana.split(',').map(Number);\nvar openingHours = daysOfOperation.dataset.horario.split(',').map(Number);\nvar dateNow = new Date();\nvar today = dateNow.getDay();\nvar timeNow = dateNow.getHours();\nvar openDay = daysOfTheWeek.indexOf(today) !== -1;\nvar openHours = timeNow >= openingHours[0] && timeNow < openingHours[1];\nif (openDay && openHours) {\n  daysOfOperation.classList.add('isOpen');\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?\n}");

/***/ }),

/***/ "./js/modules/initAccordion.js":
/*!*************************************!*\
  !*** ./js/modules/initAccordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  var accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n  function activeAccordion() {\n    this.classList.toggle('ativo');\n    this.nextElementSibling.classList.toggle('ativo');\n  }\n  if (accordionList.length) {\n    accordionList[0].classList.add('ativo');\n    accordionList[0].nextElementSibling.classList.add('ativo');\n    accordionList.forEach(function (item) {\n      item.addEventListener('click', activeAccordion);\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/initAccordion.js?\n}");

/***/ }),

/***/ "./js/modules/initTabNav.js":
/*!**********************************!*\
  !*** ./js/modules/initTabNav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  var tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  var tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n  function activeTab(index) {\n    tabContent.forEach(function (secion) {\n      secion.classList.remove('ativo');\n    });\n    var direction = tabContent[index].dataset.anime;\n    tabContent[index].classList.add('ativo', direction);\n  }\n  if (tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add('ativo');\n    tabMenu.forEach(function (itemMenu, index) {\n      itemMenu.addEventListener('click', function () {\n        return activeTab(index);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/initTabNav.js?\n}");

/***/ }),

/***/ "./js/modules/initiAnimateScroll.js":
/*!******************************************!*\
  !*** ./js/modules/initiAnimateScroll.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initiAnimateScroll)\n/* harmony export */ });\nfunction initiAnimateScroll() {\n  var sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  function animateScroll() {\n    var halfScreen = window.innerHeight * 0.5;\n    sections.forEach(function (section) {\n      var sectionTop = section.getBoundingClientRect().top;\n      var isSectionVisible = sectionTop - halfScreen < 0;\n      if (isSectionVisible) {\n        section.classList.add('ativo');\n      } else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativo');\n      }\n    });\n  }\n  if (sections.length) {\n    animateScroll();\n    window.addEventListener('scroll', animateScroll);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/initiAnimateScroll.js?\n}");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\nfunction menuMobile() {\n  var menuButton = document.querySelector('[data-menu=\"button\"]');\n  var menuList = document.querySelector('[data-menu=\"list\"]');\n  var events = ['click', 'touchstart'];\n  function openMenu(evt) {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, events, function () {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n  if (menuButton) {\n    events.forEach(function (userEvent) {\n      menuButton.addEventListener(userEvent, openMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menuMobile.js?\n}");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  var openModalBtn = document.querySelector('[data-modal=\"open\"]');\n  var closeModalBtn = document.querySelector('[data-modal=\"close\"]');\n  var containerModal = document.querySelector('[data-modal=\"container\"]');\n  function toggleModal(evt) {\n    evt.preventDefault();\n    containerModal.classList.toggle('ativo');\n  }\n  function clickOutside(evt) {\n    if (evt.target === this) {\n      toggleModal(evt);\n    }\n  }\n  if (openModalBtn && closeModalBtn && containerModal) {\n    openModalBtn.addEventListener('click', toggleModal);\n    closeModalBtn.addEventListener('click', toggleModal);\n    containerModal.addEventListener('click', clickOutside);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?\n}");

/***/ }),

/***/ "./js/modules/numeros.js":
/*!*******************************!*\
  !*** ./js/modules/numeros.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ numeros)\n/* harmony export */ });\nfunction numeros() {\n  function animateNumbers() {\n    var numbers = document.querySelectorAll('[data-numero]');\n    numbers.forEach(function (number) {\n      var value = Number(number.innerText);\n      var incremento = Math.floor(value / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += incremento;\n        number.innerText = start;\n        if (start > value) {\n          number.innerText = value;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect();\n      animateNumbers();\n    }\n  }\n  var observerTarget = document.querySelector('.numeros');\n  var observer = new MutationObserver(handleMutation);\n  observer.observe(observerTarget, {\n    attributes: true\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/numeros.js?\n}");

/***/ }),

/***/ "./js/modules/outsideClick.js":
/*!************************************!*\
  !*** ./js/modules/outsideClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n  function handleOutsideClick(evt) {\n    if (!element.contains(evt.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideClick.js?\n}");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  var tooltips = document.querySelectorAll('[data-tooltip]');\n  tooltips.forEach(function (tooltip) {\n    tooltip.addEventListener('mouseover', onMouseOver);\n  });\n  function onMouseOver(evt) {\n    var tooltipBox = createTooltipBox(this);\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n  var onMouseLeave = {\n    handleEvent: function handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    }\n  };\n  var onMouseMove = {\n    handleEvent: function handleEvent(evt) {\n      this.tooltipBox.style.top = evt.pageY + 10 + 'px';\n      this.tooltipBox.style.left = evt.pageX + 10 + 'px';\n    }\n  };\n  function createTooltipBox(element) {\n    var tooltipBox = document.createElement('div');\n    var text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?\n}");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initiAnimateScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initiAnimateScroll.js */ \"./js/modules/initiAnimateScroll.js\");\n/* harmony import */ var _modules_initAccordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/initAccordion.js */ \"./js/modules/initAccordion.js\");\n/* harmony import */ var _modules_initTabNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initTabNav.js */ \"./js/modules/initTabNav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown.js */ \"./js/modules/dropdown.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetchAnimais.js */ \"./js/modules/fetchAnimais.js\");\n/* harmony import */ var _modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchBitcoin.js */ \"./js/modules/fetchBitcoin.js\");\n// import initSmoothScroll from './modules/scroll-suave.js';\n\n\n\n\n\n\n\n\n\n\n\n// initSmoothScroll();\n(0,_modules_initiAnimateScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_initAccordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_initTabNav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_dropdown_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n// fetchBitcoin();\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/OverloadYield.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/OverloadYield.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{function _OverloadYield(e, d) {\n  this.v = e, this.k = d;\n}\nmodule.exports = _OverloadYield, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/OverloadYield.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) {\n  try {\n    var i = n[a](c),\n      u = i.value;\n  } catch (n) {\n    return void e(n);\n  }\n  i.done ? t(u) : Promise.resolve(u).then(r, o);\n}\nfunction _asyncToGenerator(n) {\n  return function () {\n    var t = this,\n      e = arguments;\n    return new Promise(function (r, o) {\n      var a = n.apply(t, e);\n      function _next(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n);\n      }\n      function _throw(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n);\n      }\n      _next(void 0);\n    });\n  };\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regenerator.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regenerator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ \"./node_modules/@babel/runtime/helpers/regeneratorDefine.js\");\nfunction _regenerator() {\n  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */\n  var e,\n    t,\n    r = \"function\" == typeof Symbol ? Symbol : {},\n    n = r.iterator || \"@@iterator\",\n    o = r.toStringTag || \"@@toStringTag\";\n  function i(r, n, o, i) {\n    var c = n && n.prototype instanceof Generator ? n : Generator,\n      u = Object.create(c.prototype);\n    return regeneratorDefine(u, \"_invoke\", function (r, n, o) {\n      var i,\n        c,\n        u,\n        f = 0,\n        p = o || [],\n        y = !1,\n        G = {\n          p: 0,\n          n: 0,\n          v: e,\n          a: d,\n          f: d.bind(e, 4),\n          d: function d(t, r) {\n            return i = t, c = 0, u = e, G.n = r, a;\n          }\n        };\n      function d(r, n) {\n        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {\n          var o,\n            i = p[t],\n            d = G.p,\n            l = i[2];\n          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));\n        }\n        if (o || r > 1) return a;\n        throw y = !0, n;\n      }\n      return function (o, p, l) {\n        if (f > 1) throw TypeError(\"Generator is already running\");\n        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {\n          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);\n          try {\n            if (f = 2, i) {\n              if (c || (o = \"next\"), t = i[o]) {\n                if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\");\n                if (!t.done) return t;\n                u = t.value, c < 2 && (c = 0);\n              } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1);\n              i = e;\n            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;\n          } catch (t) {\n            i = e, c = 1, u = t;\n          } finally {\n            f = 1;\n          }\n        }\n        return {\n          value: t,\n          done: y\n        };\n      };\n    }(r, o, i), !0), u;\n  }\n  var a = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  t = Object.getPrototypeOf;\n  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {\n      return this;\n    }), t),\n    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);\n  function f(e) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e;\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, \"constructor\", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", regeneratorDefine(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), regeneratorDefine(u), regeneratorDefine(u, o, \"Generator\"), regeneratorDefine(u, n, function () {\n    return this;\n  }), regeneratorDefine(u, \"toString\", function () {\n    return \"[object Generator]\";\n  }), (module.exports = _regenerator = function _regenerator() {\n    return {\n      w: i,\n      m: f\n    };\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports)();\n}\nmodule.exports = _regenerator, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/regenerator.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsync.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsync.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js\");\nfunction _regeneratorAsync(n, e, r, t, o) {\n  var a = regeneratorAsyncGen(n, e, r, t, o);\n  return a.next().then(function (n) {\n    return n.done ? n.value : a.next();\n  });\n}\nmodule.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorAsync.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var regenerator = __webpack_require__(/*! ./regenerator.js */ \"./node_modules/@babel/runtime/helpers/regenerator.js\");\nvar regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js\");\nfunction _regeneratorAsyncGen(r, e, t, o, n) {\n  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);\n}\nmodule.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ \"./node_modules/@babel/runtime/helpers/OverloadYield.js\");\nvar regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ \"./node_modules/@babel/runtime/helpers/regeneratorDefine.js\");\nfunction AsyncIterator(t, e) {\n  function n(r, o, i, f) {\n    try {\n      var c = t[r](o),\n        u = c.value;\n      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {\n        n(\"next\", t, i, f);\n      }, function (t) {\n        n(\"throw\", t, i, f);\n      }) : e.resolve(u).then(function (t) {\n        c.value = t, i(c);\n      }, function (t) {\n        return n(\"throw\", t, i, f);\n      });\n    } catch (t) {\n      f(t);\n    }\n  }\n  var r;\n  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, \"function\" == typeof Symbol && Symbol.asyncIterator || \"@asyncIterator\", function () {\n    return this;\n  })), regeneratorDefine(this, \"_invoke\", function (t, o, i) {\n    function f() {\n      return new e(function (e, r) {\n        n(t, i, e, r);\n      });\n    }\n    return r = r ? r.then(f, f) : f();\n  }, !0);\n}\nmodule.exports = AsyncIterator, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorDefine.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorDefine.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("{function _regeneratorDefine(e, r, n, t) {\n  var i = Object.defineProperty;\n  try {\n    i({}, \"\", {});\n  } catch (e) {\n    i = 0;\n  }\n  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {\n    function o(r, n) {\n      _regeneratorDefine(e, r, function (e) {\n        return this._invoke(r, n, e);\n      });\n    }\n    r ? i ? i(e, r, {\n      value: n,\n      enumerable: !t,\n      configurable: !t,\n      writable: !t\n    }) : e[r] = n : (o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2));\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _regeneratorDefine(e, r, n, t);\n}\nmodule.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorDefine.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorKeys.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorKeys.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("{function _regeneratorKeys(e) {\n  var n = Object(e),\n    r = [];\n  for (var t in n) r.unshift(t);\n  return function e() {\n    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;\n    return e.done = !0, e;\n  };\n}\nmodule.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorKeys.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ \"./node_modules/@babel/runtime/helpers/OverloadYield.js\");\nvar regenerator = __webpack_require__(/*! ./regenerator.js */ \"./node_modules/@babel/runtime/helpers/regenerator.js\");\nvar regeneratorAsync = __webpack_require__(/*! ./regeneratorAsync.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsync.js\");\nvar regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js\");\nvar regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js\");\nvar regeneratorKeys = __webpack_require__(/*! ./regeneratorKeys.js */ \"./node_modules/@babel/runtime/helpers/regeneratorKeys.js\");\nvar regeneratorValues = __webpack_require__(/*! ./regeneratorValues.js */ \"./node_modules/@babel/runtime/helpers/regeneratorValues.js\");\nfunction _regeneratorRuntime() {\n  \"use strict\";\n\n  var r = regenerator(),\n    e = r.m(_regeneratorRuntime),\n    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;\n  function n(r) {\n    var e = \"function\" == typeof r && r.constructor;\n    return !!e && (e === t || \"GeneratorFunction\" === (e.displayName || e.name));\n  }\n  var o = {\n    \"throw\": 1,\n    \"return\": 2,\n    \"break\": 3,\n    \"continue\": 3\n  };\n  function a(r) {\n    var e, t;\n    return function (n) {\n      e || (e = {\n        stop: function stop() {\n          return t(n.a, 2);\n        },\n        \"catch\": function _catch() {\n          return n.v;\n        },\n        abrupt: function abrupt(r, e) {\n          return t(n.a, o[r], e);\n        },\n        delegateYield: function delegateYield(r, o, a) {\n          return e.resultName = o, t(n.d, regeneratorValues(r), a);\n        },\n        finish: function finish(r) {\n          return t(n.f, r);\n        }\n      }, t = function t(r, _t, o) {\n        n.p = e.prev, n.n = e.next;\n        try {\n          return r(_t, o);\n        } finally {\n          e.next = n.n;\n        }\n      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;\n      try {\n        return r.call(this, e);\n      } finally {\n        n.p = e.prev, n.n = e.next;\n      }\n    };\n  }\n  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return {\n      wrap: function wrap(e, t, n, o) {\n        return r.w(a(e), t, n, o && o.reverse());\n      },\n      isGeneratorFunction: n,\n      mark: r.m,\n      awrap: function awrap(r, e) {\n        return new OverloadYield(r, e);\n      },\n      AsyncIterator: regeneratorAsyncIterator,\n      async: function async(r, e, t, o, u) {\n        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);\n      },\n      keys: regeneratorKeys,\n      values: regeneratorValues\n    };\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports)();\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorValues.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorValues.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorValues(e) {\n  if (null != e) {\n    var t = e[\"function\" == typeof Symbol && Symbol.iterator || \"@@iterator\"],\n      r = 0;\n    if (t) return t.call(e);\n    if (\"function\" == typeof e.next) return e;\n    if (!isNaN(e.length)) return {\n      next: function next() {\n        return e && r >= e.length && (e = void 0), {\n          value: e && e[r++],\n          done: !e\n        };\n      }\n    };\n  }\n  throw new TypeError(_typeof(e) + \" is not iterable\");\n}\nmodule.exports = _regeneratorValues, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorValues.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("{function _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _typeof(o);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/typeof.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/regenerator/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;