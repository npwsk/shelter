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

export { handleNav, toggleNav, handleNavOverLay };
