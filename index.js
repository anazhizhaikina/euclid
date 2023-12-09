// swiper
const swiper = document.querySelector('.swiper');

let slider = new Swiper(swiper, {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});

// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
});

// search
let searchOpen = document.querySelector('.header__btn');
let search = document.querySelector('.search__form');
let searchClose = document.querySelector('.search__close');

searchOpen.addEventListener('click', function () {
  search.classList.add('search__form--active');
  searchOpen.classList.add('header__btn--hidden');
});

searchClose.addEventListener('click', function () {
  search.classList.remove('search__form--active');
  searchOpen.classList.remove('header__btn--hidden');
});

// tabs
document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs__btn').forEach(function (btn) {
      btn.classList.remove('tabs__btn--active')
    });

    e.currentTarget.classList.add('tabs__btn--active');
    document.querySelectorAll('.tabs__item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs__item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
  });
});

// accordion
document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.querySelectorAll('.accordion__item');

  accordion.forEach((el) => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const accBtn = self.querySelector('.accordion__btn');
      const accPanel = self.querySelector('.accordion__panel');
      accBtn.classList.toggle('open');
      accPanel.classList.toggle('accordion__panel--active');

      if (accBtn.classList.contains('open')) {
        accBtn.setAttribute('aria-expanded', true);
        accPanel.setAttribute('aria-hidden', false);
      }
      else {
        accBtn.setAttribute('aria-expanded', false);
        accPanel.setAttribute('aria-hidden', true);
      }
    });
  });
});


