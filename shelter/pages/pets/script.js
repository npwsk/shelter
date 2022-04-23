import 'normalize.css';
import './style.scss';
import { stopAnimationOnLoad, stopAnimationOnResize } from 'assets/js/stopAnimation';
import { initNav } from 'assets/js/navigation';
import { initModal } from '../../assets/js/modal';
import { initPagination } from '../../assets/js/pagination';

const init = () => {
  stopAnimationOnLoad();
  stopAnimationOnResize();
  initNav();
  initModal();
  initPagination();
};

document.addEventListener('DOMContentLoaded', init);
