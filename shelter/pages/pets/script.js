import 'normalize.css';
import './style.scss';
import { handleNav, toggleNav } from 'js/navigation';

const nav = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__burger');
const navLinks = nav.querySelectorAll('.link');

const handleMediaQuery = (e) => {
  console.log(e);
  if (e.matches) {
    burgerButton.addEventListener('click', () => toggleNav(nav, burgerButton));
    nav.addEventListener('click', (e) => handleNav(e, nav, burgerButton));

    navLinks.forEach((link) => {
      link.classList.remove('link--dark', 'link--active-dark');
    });
  } else {
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
  const mediaQuery = window.matchMedia('(max-width: 767px)');

  mediaQuery.addEventListener('change', handleMediaQuery);
  handleMediaQuery(mediaQuery);
  document.body.classList.remove('preload');
};

window.addEventListener('load', init);
