import { handleNav, toggleNav, handleNavOverLay } from './navigation';

const initNav = () => {
  const nav = document.querySelector('.header__nav');
  const navOverlay = document.querySelector('.nav-overlay');
  const burgerButton = document.querySelector('.header__burger');

  burgerButton.addEventListener('click', () => toggleNav(nav, navOverlay, burgerButton));
  nav.addEventListener('click', (e) => handleNav(e, nav, navOverlay, burgerButton));
  navOverlay.addEventListener('click', () => handleNavOverLay(nav, navOverlay, burgerButton));
};

const stopAnimationOnResize = () => {
  let resizeTimer;

  window.addEventListener('resize', () => {
    document.body.classList.add('stop-animation');

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      document.body.classList.remove('stop-animation');
    }, 400);
  });
};

const stopAnimationOnLoad = () => {
  window.addEventListener('load', () => {
    document.body.classList.remove('stop-animation');
  });
};

export { initNav, stopAnimationOnResize, stopAnimationOnLoad };
