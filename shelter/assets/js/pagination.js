import uniquePets from 'assets/pets';
import { renderCards } from './petCard';
import { getRandomIds } from './utils';

const UNIQUE_PETS_COUNT = 8;
const TARGET_CARDS_COUNT = 48;
const MIN_PAGES_COUNT = 6;
const CARDS_PER_PAGE_DESKTOP = 8;
const CARDS_PER_PAGE_TABLET = 6;
const CARDS_PER_PAGE_MOBILE = 3;

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
      console.group(`Found repeats checking subarrays with size ${subarrLength}`);
      console.warn(
        `Repeat: ${subarr}, from: ${subarrLength * i}, to: ${subarrLength * (i + 1) - 1}`
      );
      console.groupEnd();
      return true;
    }
    i += 1;
  }
  console.info(`No repeats found in subarrays with size ${subarrLength}`);
  return false;
};

const getPetsForPage = (pets, page, petsPerPage) => {
  const first = (page - 1) * petsPerPage;
  const last = first + petsPerPage - 1;
  return pets.slice(first, last + 1);
};

const renderPage = (container, allIds, pageNumber, cardsPerPage) => {
  container.innerHTML = '';
  container.setAttribute('data-page', pageNumber);
  const idsForPage = getPetsForPage(allIds, pageNumber, cardsPerPage);
  renderCards(container, idsForPage);
};

const updateButtons = (buttons, page, lastPage) => {
  const { current, prev, next, first, last } = buttons;

  current.textContent = page;

  if (page > 1) {
    first.classList.remove('button--disabled');
    prev.classList.remove('button--disabled');
  } else {
    first.classList.add('button--disabled');
    prev.classList.add('button--disabled');
  }

  if (page < lastPage) {
    last.classList.remove('button--disabled');
    next.classList.remove('button--disabled');
  } else {
    last.classList.add('button--disabled');
    next.classList.add('button--disabled');
  }
};

const getNewPageNumber = (button, currentPage, lastPage) => {
  switch (button.dataset.pageControl) {
    case 'first':
      return 1;
    case 'last':
      return lastPage;
    case 'prev':
      return currentPage - 1;
    case 'next':
      return currentPage + 1;
    default:
      return currentPage;
  }
};

const initPagination = () => {
  const petsIdsList = generatePetsIdsList(
    UNIQUE_PETS_COUNT,
    Math.round(TARGET_CARDS_COUNT / UNIQUE_PETS_COUNT)
  );

  /* Write to console for self-check */
  console.group(`Pets' ids array:`);
  console.log(petsIdsList);
  console.groupEnd();
  checkForSubarrRepeats(petsIdsList, 8);
  checkForSubarrRepeats(petsIdsList, 6);
  checkForSubarrRepeats(petsIdsList, 3);

  const cardsContainer = document.querySelector('.pets__cards-page');
  const btnsContainer = document.querySelector('.pagination');
  const buttons = {
    first: btnsContainer.querySelector('[data-page-control="first"]'),
    last: btnsContainer.querySelector('[data-page-control="last"]'),
    prev: btnsContainer.querySelector('[data-page-control="prev"]'),
    next: btnsContainer.querySelector('[data-page-control="next"]'),
    current: btnsContainer.querySelector('[data-page-control="current"]'),
  };

  let cardsPerPage;

  const desktopQuery = window.matchMedia('(min-width: 1280px)');
  const tabletQuery = window.matchMedia('(max-width: 1279px) and (min-width: 768px)');
  const mobileQuery = window.matchMedia('(max-width: 767px)');

  const handleDesktopQueryChange = (e) => {
    if (e.matches) {
      cardsPerPage = CARDS_PER_PAGE_DESKTOP;
      const page = Number(cardsContainer.dataset.page) || 1;
      renderPage(cardsContainer, petsIdsList, page, cardsPerPage);
    }
  };

  const handleTabletQueryChange = (e) => {
    if (e.matches) {
      cardsPerPage = CARDS_PER_PAGE_TABLET;
      const page = Number(cardsContainer.dataset.page) || 1;
      renderPage(cardsContainer, petsIdsList, page, cardsPerPage);
    }
  };

  const handleMobileQueryChange = (e) => {
    if (e.matches) {
      cardsPerPage = CARDS_PER_PAGE_MOBILE;
      const page = Number(cardsContainer.dataset.page) || 1;
      renderPage(cardsContainer, petsIdsList, page, cardsPerPage);
    }
  };

  desktopQuery.addEventListener('change', handleDesktopQueryChange);
  tabletQuery.addEventListener('change', handleTabletQueryChange);
  mobileQuery.addEventListener('change', handleMobileQueryChange);

  handleDesktopQueryChange(desktopQuery);
  handleTabletQueryChange(tabletQuery);
  handleMobileQueryChange(mobileQuery);

  const handleButtons = (e, petsIds, buttons, container) => {
    e.preventDefault();

    const button = e.target.closest('[data-page-control]');
    if (
      !button ||
      button.classList.contains('button--disabled') ||
      button.classList.contains('button--active')
    ) {
      return;
    }

    const currentPage = Number(container.dataset.page);
    const lastPage = Math.ceil(TARGET_CARDS_COUNT / cardsPerPage);
    const newPage = getNewPageNumber(button, currentPage, lastPage);

    renderPage(container, petsIds, newPage, cardsPerPage);
    updateButtons(buttons, newPage, lastPage);
  };

  btnsContainer.addEventListener('click', (e) =>
    handleButtons(e, petsIdsList, buttons, cardsContainer)
  );
};

export { initPagination };
