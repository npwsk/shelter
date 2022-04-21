import { stopAnimationOnLoad, stopAnimationOnResize } from 'assets/js/stopAnimation';
import { initNav } from 'assets/js/navigation';
import { initCarousel } from '../../assets/js/carousel';

import 'normalize.css';
import './style.scss';

const init = () => {
  stopAnimationOnLoad();
  stopAnimationOnResize();
  initNav();
  initCarousel();
};

document.addEventListener('DOMContentLoaded', init);
