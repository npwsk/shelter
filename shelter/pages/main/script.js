import 'normalize.css';
import './style.scss';
import { handleNav, toggleNav } from 'js/navigation';

const nav = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__burger');

const handleMediaQuery = (e) => {
  console.log(e);
  if (e.matches) {
    burgerButton.addEventListener('click', () => toggleNav(nav, burgerButton));
    nav.addEventListener('click', (e) => handleNav(e, nav, burgerButton));
  }
};

const init = () => {
  const mediaQuery = window.matchMedia('(max-width: 767px)');

  mediaQuery.addEventListener('change', handleMediaQuery);
  handleMediaQuery(mediaQuery);
  document.body.classList.remove('preload');
};

window.addEventListener('load', init);
