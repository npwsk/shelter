import 'normalize.css';
import './style.scss';
import { handleNav, toggleNav, handleNavOverLay } from 'assets/js/navigation';

const nav = document.querySelector('.header__nav');
const navOverlay = document.querySelector('.nav-overlay');
const burgerButton = document.querySelector('.header__burger');
const navLinks = nav.querySelectorAll('.link');

const handleBurgerClick = () => toggleNav(nav, navOverlay, burgerButton);
const handleNavClick = (e) => handleNav(e, nav, navOverlay, burgerButton);

const handleMediaQuery = (e) => {
  console.log(e);
  if (e.matches) {
    burgerButton.addEventListener('click', handleBurgerClick);
    nav.addEventListener('click', handleNavClick);

    navLinks.forEach((link) => {
      link.classList.remove('link--dark', 'link--active-dark');
    });
  } else {
    burgerButton.removeEventListener('click', handleBurgerClick);
    nav.removeEventListener('click', handleNavClick);

    navLinks.forEach((link) => {
      if (link.classList.contains('link--active')) {
        link.classList.add('link--active-dark');
      } else {
        link.classList.add('link--dark');
      }
    });
  }
};

const init = () => {
  // const mediaQuery = window.matchMedia('(max-width: 767px)');

  // mediaQuery.addEventListener('change', handleMediaQuery);
  // handleMediaQuery(mediaQuery);

  burgerButton.addEventListener('click', handleBurgerClick);
  nav.addEventListener('click', handleNavClick);
  navOverlay.addEventListener('click', () => handleNavOverLay(nav, navOverlay, burgerButton));

  document.body.classList.remove('stop-animation');
};

window.addEventListener('load', init);

let resizeTimer;

window.addEventListener('resize', () => {
  document.body.classList.add('stop-animation');

  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    document.body.classList.remove('stop-animation');
  }, 400);
});
