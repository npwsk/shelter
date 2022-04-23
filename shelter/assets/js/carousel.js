import { renderCards } from './petCard';

const PETS_COUNT = 8;
const CARDS_PER_ITEM_DESKTOP = 3;
const CARDS_PER_ITEM_TABLET = 2;
const CARDS_PER_ITEM_MOBILE = 1;

const getRandomIds = (count, max, prev = []) => {
  const ids = [];

  while (ids.length < count) {
    const randomId = Math.floor(Math.random() * (max + 1));
    if (!prev.includes(randomId) & !ids.includes(randomId)) {
      ids.push(randomId);
    }
  }

  return ids;
};

const renderItem = (petsIds, parent, elemId) => {
  const item = document.createElement('div');
  item.classList.add('carousel__item');
  item.id = elemId;

  renderCards(item, petsIds);

  parent.append(item);

  return item;
};

const renderCarousel = (carouselContent, currentIds, nextIds) => {
  carouselContent.innerHTML = '';

  renderItem(nextIds, carouselContent, 'carousel-item-prev');
  renderItem(currentIds, carouselContent, 'carousel-item-current');
  renderItem(nextIds, carouselContent, 'carousel-item-next');
};

const initCarousel = () => {
  const carousel = document.querySelector('.carousel');
  const carouselContent = document.querySelector('.carousel__content');
  carouselContent.innerHTML = '';

  const btnPrev = carousel.querySelector('[data-slide="prev"]');
  const btnNext = carousel.querySelector('[data-slide="next"]');

  const desktopQuery = window.matchMedia('(min-width: 1280px)');
  const tabletQuery = window.matchMedia('(max-width: 1279px) and (min-width: 768px)');
  const mobileQuery = window.matchMedia('(max-width: 767px)');

  let itemCardsCount;
  let currentIds;
  let nextIds;

  const generateNewIds = () => {
    currentIds = getRandomIds(itemCardsCount, PETS_COUNT - 1);
    nextIds = getRandomIds(itemCardsCount, PETS_COUNT - 1, currentIds);
  };

  const handleDesktopQueryChange = (e) => {
    if (e.matches) {
      itemCardsCount = CARDS_PER_ITEM_DESKTOP;
      generateNewIds();
      renderCarousel(carouselContent, currentIds, nextIds);
    }
  };

  const handleTabletQueryChange = (e) => {
    if (e.matches) {
      itemCardsCount = CARDS_PER_ITEM_TABLET;
      generateNewIds();
      renderCarousel(carouselContent, currentIds, nextIds);
    }
  };

  const handleMobileQueryChange = (e) => {
    if (e.matches) {
      itemCardsCount = CARDS_PER_ITEM_MOBILE;
      generateNewIds();
      renderCarousel(carouselContent, currentIds, nextIds);
    }
  };

  desktopQuery.addEventListener('change', handleDesktopQueryChange);
  tabletQuery.addEventListener('change', handleTabletQueryChange);
  mobileQuery.addEventListener('change', handleMobileQueryChange);

  handleDesktopQueryChange(desktopQuery);
  handleTabletQueryChange(tabletQuery);
  handleMobileQueryChange(mobileQuery);

  const moveLeft = () => {
    carouselContent.classList.add('transition-left');
    btnNext.removeEventListener('click', moveLeft);
    btnPrev.removeEventListener('click', moveRight);
  };

  const moveRight = () => {
    carouselContent.classList.add('transition-right');
    btnNext.removeEventListener('click', moveLeft);
    btnPrev.removeEventListener('click', moveRight);
  };

  btnNext.addEventListener('click', moveLeft);
  btnPrev.addEventListener('click', moveRight);

  carousel.addEventListener('animationend', (e) => {
    const prevItem = document.querySelector('#carousel-item-prev');
    const currentItem = document.querySelector('#carousel-item-current');
    const nextItem = document.querySelector('#carousel-item-next');

    carouselContent.classList.remove('transition-left', 'transition-right');

    currentItem.innerHTML = '';
    currentItem.append(...prevItem.children);
    nextItem.innerHTML = '';

    currentIds = nextIds;
    nextIds = getRandomIds(itemCardsCount, PETS_COUNT - 1, currentIds);

    renderCards(prevItem, nextIds);
    renderCards(nextItem, nextIds);

    btnNext.addEventListener('click', moveLeft);
    btnPrev.addEventListener('click', moveRight);
  });
};

export { initCarousel };
