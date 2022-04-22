import { stopAnimationOnLoad, stopAnimationOnResize } from 'assets/js/stopAnimation';
import { initNav } from 'assets/js/navigation';
import { initCarousel } from '../../assets/js/carousel';
import { initModal } from '../../assets/js/modal';

import 'normalize.css';
import './style.scss';

const init = () => {
  stopAnimationOnLoad();
  stopAnimationOnResize();
  initNav();
  initCarousel();
  initModal();
};

document.addEventListener('DOMContentLoaded', init);
