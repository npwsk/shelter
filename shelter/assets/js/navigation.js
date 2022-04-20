const toggleNav = (nav, burgerButton) => {
  if (nav.classList.contains('active')) {
    // const scrollY = document.body.style.top;
    // document.body.style.position = '';
    // document.body.style.top = '';
    // window.scrollTo(0, parseInt(scrollY || '0') * -1);

    // document.body.classList.remove('no-scroll');
    nav.classList.remove('active');
    burgerButton.classList.remove('active');
  } else {
    // document.body.style.top = `-${window.scrollY}px`;
    // nav.style.height = `${document.documentElement.clientHeight}px`;

    // document.body.classList.add('no-scroll');
    nav.classList.add('active');
    burgerButton.classList.add('active');
  }
};

const handleNav = (e, nav, burgerButton) => {
  if (nav.classList.contains('active') && e.target.classList.contains('link')) {
    nav.classList.remove('active');
    burgerButton.classList.remove('active');
    return;
  }
  if (nav.classList.contains('active') && e.target.classList.contains('nav__burger')) {
    nav.classList.remove('active');
    burgerButton.classList.remove('active');
    return;
  }
  if (!nav.classList.contains('active') && e.target.classList.contains('nav__burger')) {
    nav.classList.add('active');
    burgerButton.classList.add('active');
    return;
  }
};

export { handleNav, toggleNav };
