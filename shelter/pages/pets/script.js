import 'normalize.css';
import './style.scss';
import { stopAnimationOnLoad, stopAnimationOnResize } from 'assets/js/stopAnimation';
import { initNav } from 'assets/js/navigation';
import { initPagination } from '../../assets/js/pagination';

const init = () => {
  stopAnimationOnLoad();
  stopAnimationOnResize();
  initNav();
  initPagination();
};

document.addEventListener('DOMContentLoaded', init);
