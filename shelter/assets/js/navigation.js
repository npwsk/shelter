const closeNav = (nav, overlay, burgerButton) => {
  document.documentElement.classList.remove('no-scroll');
  nav.classList.remove('active');
  burgerButton.classList.remove('active');
  overlay.classList.remove('visible');
};

const toggleNav = (nav, overlay, burgerButton) => {
  if (nav.classList.contains('active')) {
    closeNav(nav, overlay, burgerButton);
  } else {
    document.documentElement.classList.add('no-scroll');
    nav.classList.add('active');
    burgerButton.classList.add('active');
    overlay.classList.add('visible');
  }
};

const handleNav = (e, nav, overlay, burgerButton) => {
  if (e.target.closest('.nav__link') || e.target.closest('.logo')) {
    closeNav(nav, overlay, burgerButton);
    return;
  }
};

const handleNavOverLay = (nav, overlay, burgerButton) => {
  closeNav(nav, overlay, burgerButton);
};

const initNav = () => {
  const nav = document.querySelector('.header__nav');
  const navOverlay = document.querySelector('.nav-overlay');
  const burgerButton = document.querySelector('.header__burger');

  burgerButton.addEventListener('click', () => toggleNav(nav, navOverlay, burgerButton));
  nav.addEventListener('click', (e) => handleNav(e, nav, navOverlay, burgerButton));
  navOverlay.addEventListener('click', () => handleNavOverLay(nav, navOverlay, burgerButton));

  const notMobileQuery = window.matchMedia('(min-width: 768px)');

  const handleMediaQueryChange = (e) => {
    if (e.matches) {
      closeNav(nav, navOverlay, burgerButton);
    }
  };

  notMobileQuery.addEventListener('change', handleMediaQueryChange);
};

export { initNav };
