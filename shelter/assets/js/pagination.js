import uniquePets from 'assets/pets';
import { renderCards } from './petCard';
import { getRandomIds } from './utils';

const MIN_PAGES_COUNT = 6;
const CARDS_PER_PAGE = 8;
const CARDS_PER_PAGE_TABLET = 6;
const CARDS_PER_PAGE_MOBILE = 3;

const shuffle = (items = []) => {
  const permutation = [...items];
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
  }
  return permutation;
};

const generatePetsIdsList = (uniqueCount, repeatsCount) => {
  const ids = [];
  for (let i = 0; i < repeatsCount; i += 1) {
    const a = ids.length % CARDS_PER_PAGE_TABLET;
    const idsToExclude = a !== 0 ? ids?.slice(-a) : [];
    const randomIds = getRandomIds(uniqueCount, uniqueCount - 1, {
      idsToExclude,
      excludeFrom: 0,
      excludeTo: CARDS_PER_PAGE_TABLET - a,
    });
    ids.push(...randomIds);
  }
  return ids;
};

const checkForSubarrRepeats = (arr, subarrLength) => {
  let i = 0;
  while (i < arr.length / subarrLength) {
    const subarr = arr.slice(subarrLength * i, subarrLength * (i + 1));
    if (new Set(subarr).size < subarrLength) {
      console.group(`Found repeats checking ${subarrLength}-subarrays`);
      console.warn(
        `Repeat: ${subarr}, from: ${subarrLength * i}, to: ${subarrLength * (i + 1) - 1}`
      );
      console.groupEnd();
      return true;
    }
    i += 1;
  }
  console.info(`No repeats found checking ${subarrLength}-subarrays`);
  return false;
};

const getPetsForPage = (pets, page, petsPerPage) => {
  const first = (page - 1) * petsPerPage;
  const last = first + petsPerPage - 1;
  console.log(first, last);
  return pets.slice(first, last + 1);
};

const renderPage = (container, allIds, pageNumber) => {
  container.innerHTML = '';
  container.setAttribute('data-page', pageNumber);
  const idsForPage = getPetsForPage(allIds, pageNumber, CARDS_PER_PAGE);
  console.log(idsForPage);
  renderCards(container, idsForPage);
};

const handleBtnFirst = (e, container, petsIds) => {
  // const currnetPage = document.querySelector('[data-page]').dataset.page
};

const handleBtnNext = (e, container, petsIds) => {
  e.preventDefault();
  const currentPage = Number(document.querySelector('[data-page]').dataset.page);
  renderPage(container, petsIds, currentPage + 1);
};

const initPagination = () => {
  const petsIdsList = generatePetsIdsList(8, MIN_PAGES_COUNT);

  /* Write to console for self-check */
  console.group(`Pets' ids array:`);
  console.log(petsIdsList);
  console.groupEnd();
  checkForSubarrRepeats(petsIdsList, 8);
  checkForSubarrRepeats(petsIdsList, 6);
  checkForSubarrRepeats(petsIdsList, 3);

  const cardsContainer = document.querySelector('.pets__cards-page');
  const btnsContainer = document.querySelector('.pagination');
  const btnFirst = btnsContainer.querySelector('[data-page-control="first"]');
  const btnLast = btnsContainer.querySelector('[data-page-control="last"]');
  const btnPrev = btnsContainer.querySelector('[data-page-control="prev"]');
  const btnNext = btnsContainer.querySelector('[data-page-control="next"]');
  const btnCurrent = btnsContainer.querySelector('[data-page-control="current"]');

  cardsContainer.innerHTML = '';
  cardsContainer.setAttribute('data-page', 1);
  const idsForPage = getPetsForPage(petsIdsList, 1, CARDS_PER_PAGE);
  renderCards(cardsContainer, idsForPage);

  btnNext.addEventListener('click', (e) => handleBtnNext(e, cardsContainer, petsIdsList));
};

export { initPagination };
