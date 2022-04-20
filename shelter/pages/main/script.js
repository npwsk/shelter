import 'normalize.css';
import './style.scss';
import { handleNav, toggleNav } from 'assets/js/navigation';

const nav = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__burger');

const handleBurgerClick = () => toggleNav(nav, burgerButton);
const handleNavClick = (e) => handleNav(e, nav, burgerButton);

const handleMediaQuery = (e) => {
  console.log(e);
  if (e.matches) {
    burgerButton.addEventListener('click', handleBurgerClick);
    nav.addEventListener('click', handleNavClick);
  } else {
    burgerButton.removeEventListener('click', handleBurgerClick);
    nav.removeEventListener('click', handleNavClick);
  }
};

const init = () => {
  const mediaQuery = window.matchMedia('(max-width: 767px)');

  mediaQuery.addEventListener('change', handleMediaQuery);
  handleMediaQuery(mediaQuery);

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
