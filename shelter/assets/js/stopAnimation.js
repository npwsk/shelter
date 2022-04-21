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

export { stopAnimationOnResize, stopAnimationOnLoad };
