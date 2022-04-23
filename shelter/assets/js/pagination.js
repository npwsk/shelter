import uniquePets from 'assets/pets';
import { renderCards } from './petCard';

const MIN_PAGES_COUNT = 6;
const CARDS_PER_PAGE = 8;

const getPermutation = (items) => {
  const permutation = [...items];
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
  }
  return permutation;
};

const renderPage = () => {};

const handleBtnFirst = (container, petsIds) => {
  // const currnetPage = document.querySelector('[data-page]').dataset.page
};

const getPetsForPage = (pets, page, petsPerPage) => {
  const first = page * (petsPerPage - 1) + 1;
  const last = first + petsPerPage - 1;
  return pets.slice(first, last + 1);
};

const initPagination = () => {
  const petsIds = [...new Array(MIN_PAGES_COUNT)].flatMap(() =>
    getPermutation([...new Array(CARDS_PER_PAGE)].map((_, i) => i))
  );

  const cardsContainer = document.querySelector('.pets__cards-page');
  const btnsContainer = document.querySelector('.pagination');
  const btnFirst = btnsContainer.querySelector('[data-page-control="first"]');
  const btnLast = btnsContainer.querySelector('[data-page-control="last"]');
  const btnPrev = btnsContainer.querySelector('[data-page-control="prev"]');
  const btnNext = btnsContainer.querySelector('[data-page-control="next"]');
  const btnCurrent = btnsContainer.querySelector('[data-page-control="current"]');

  cardsContainer.innerHTML = '';
  cardsContainer.setAttribute('data-page', 1);
  const idsForPage = getPetsForPage(petsIds, 1, CARDS_PER_PAGE);
  renderCards(cardsContainer, idsForPage);
};

export { initPagination };
