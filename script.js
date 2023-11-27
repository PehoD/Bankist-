'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

////////////////////////////////////////

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling

btnScrollTo.addEventListener('click', function (e) {
  //const s1coords = section1.getBoundingClientRect();
  //console.log(s1coords);

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

    console.log('LINK');
  });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('.nav__links')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
/// SELECTING ELEMENTS --------------------

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('section--1');
const allButton = document.getElementsByTagName('button');
console.log(allButton);

console.log(document.getElementsByClassName('btn'));

// CREATING AND INSERTING ELEMENTS ----------

const message = document.createElement('div');
message.classList.add('cookie--message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class= "btn btn--close--cookie"> Got it! </button>';
//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);
// DELETE ELEMENTS ------------------

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// STYLES -------------
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(getComputedStyle(message).width);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');
// ATTRIBUTE
const logo = document.querySelector('.nav__logo');
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
console.log(logo.alt);
console.log(logo.src);
console.log(logo.setAttribute('company', 'Bankist'));
console.log(logo.company);
console.log(logo.src);
console.log(logo.getAttribute('src'));

// HREF LINK

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
*/

/*
const h1 = document.querySelector('h1');

const h1alert = function (e) {
  alert('mouseenter: Great you are reading the heading :D');
};

h1.addEventListener('mouseenter', h1alert);
setTimeout(() => h1.removeEventListener('mouseenter', h1alert), 3000);

// event boobling
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `RGB (${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('LINK');
  this.style.backgroundColor = randomColor();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('LINK');
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('LINK');
  this.style.backgroundColor = randomColor();
});
randomColor(0, 255);
*/
/*
// Dom traversing

const h1 = document.querySelector('h1');

console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parent

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/
