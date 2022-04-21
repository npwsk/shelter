import 'normalize.css';
import './style.scss';
import { stopAnimationOnLoad, stopAnimationOnResize } from 'assets/js/stopAnimation';
import { initNav } from 'assets/js/navigation';

const init = () => {
  stopAnimationOnLoad();
  stopAnimationOnResize();
  initNav();
};

document.addEventListener('DOMContentLoaded', init);
