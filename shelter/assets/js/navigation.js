const closeNav = (nav, overlay, burgerButton) => {
  nav.classList.remove('active');
  burgerButton.classList.remove('active');
  overlay.classList.remove('visible');
};

const toggleNav = (nav, overlay, burgerButton) => {
  if (nav.classList.contains('active')) {
    // const scrollY = document.body.style.top;
    // document.body.style.position = '';
    // document.body.style.top = '';
    // window.scrollTo(0, parseInt(scrollY || '0') * -1);

    // document.body.classList.remove('no-scroll');
    closeNav(nav, overlay, burgerButton);
  } else {
    // document.body.style.top = `-${window.scrollY}px`;
    // nav.style.height = `${document.documentElement.clientHeight}px`;

    // document.body.classList.add('no-scroll');
    nav.classList.add('active');
    burgerButton.classList.add('active');
    overlay.classList.add('visible');
  }
};

const handleNav = (e, nav, overlay, burgerButton) => {
  if (e.target.closest('.link') || e.target.closest('.logo')) {
    closeNav(nav, overlay, burgerButton);
    return;
  }
};

const handleNavOverLay = (nav, overlay, burgerButton) => {
  closeNav(nav, overlay, burgerButton);
};

export { handleNav, toggleNav, handleNavOverLay };
