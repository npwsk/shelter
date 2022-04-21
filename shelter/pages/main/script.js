import 'normalize.css';
import './style.scss';
import { initNav } from 'assets/js';

const init = () => {
  document.body.classList.remove('stop-animation');

  initNav();
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
