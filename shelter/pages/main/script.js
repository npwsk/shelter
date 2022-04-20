import 'normalize.css';
import './style.scss';
import { handleNav, toggleNav, handleNavOverLay } from 'assets/js/navigation';

const nav = document.querySelector('.header__nav');
const navOverlay = document.querySelector('.nav-overlay');
const burgerButton = document.querySelector('.header__burger');

const init = () => {
  burgerButton.addEventListener('click', () => toggleNav(nav, navOverlay, burgerButton));
  nav.addEventListener('click', (e) => handleNav(e, nav, navOverlay, burgerButton));
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
