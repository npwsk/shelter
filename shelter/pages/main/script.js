import 'normalize.css';
import './style.scss';
import { initNav, stopAnimationOnLoad, stopAnimationOnResize } from 'assets/js';

const init = () => {
  stopAnimationOnLoad();
  stopAnimationOnResize();
  initNav();
};

document.addEventListener('DOMContentLoaded', init);
