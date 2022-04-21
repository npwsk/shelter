import pets from 'assets/pets';

const getRandomIndexes = (count, max, prev = []) => {
  const indexes = [];

  for (let i = 0; i < count; i += 1) {
    const random = Math.floor(Math.random() * (max + 1));
    if (prev.includes(random) || indexes.includes(random)) {
      i -= 1;
    } else {
      indexes.push(random);
    }
  }

  return indexes;
};

const createCard = ({ img, name }) => {
  const card = document.createElement('div');
  card.classList.add('pet-card');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('pet-card__image-container');

  const imageElem = new Image(270, 270);
  imageElem.alt = '';
  imageElem.src = img;
  imageElem.classList.add('pet-card__image');

  const title = document.createElement('h4');
  title.classList.add('pet-card__title', 'title');
  title.textContent = name;

  const btn = document.createElement('button');
  btn.classList.add('pet-card__button', 'button', 'button--outlined');
  btn.textContent = 'Learn more';

  imageContainer.appendChild(imageElem);
  card.append(imageContainer, title, btn);

  return card;
};

const renderCards = (item, ids) => {
  ids.forEach((id) => {
    const card = createCard(pets[id]);
    item.append(card);
  });
};

const renderItem = (indexes, parent, id) => {
  const item = document.createElement('div');
  item.classList.add('carousel__item');
  item.id = id;

  renderCards(item, indexes);

  parent.append(item);

  return item;
};

const renderCarousel = (carouselContent, cardsCount) => {
  let currentPets = getRandomIndexes(cardsCount, 7);
  let nextPets = getRandomIndexes(cardsCount, 7, currentPets);
  let prevPets = getRandomIndexes(cardsCount, 7, currentPets);

  // let itemsIndexes = [prevPets, currentPets, nextPets];
  // console.log(itemsIndexes);
  carouselContent.innerHTML = '';

  const prevItem = renderItem(prevPets, carouselContent, 'carousel-item-prev');
  const currentItem = renderItem(currentPets, carouselContent, 'carousel-item-current');
  const nextItem = renderItem(nextPets, carouselContent, 'carousel-item-next');
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

  let itemCardsCount = 3;

  const handleDesktopQueryChange = (e) => {
    if (e.matches) {
      itemCardsCount = 3;
      renderCarousel(carouselContent, itemCardsCount);
    }
  };

  const handleTabletQueryChange = (e) => {
    if (e.matches) {
      itemCardsCount = 2;
      renderCarousel(carouselContent, itemCardsCount);
    }
  };

  const handleMobileQueryChange = (e) => {
    if (e.matches) {
      itemCardsCount = 1;
      renderCarousel(carouselContent, itemCardsCount);
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
    btnPrev.removeEventListener('click', moveLeft);
    btnNext.removeEventListener('click', moveRight);
  };

  const moveRight = () => {
    carouselContent.classList.add('transition-right');
    btnPrev.removeEventListener('click', moveLeft);
    btnNext.removeEventListener('click', moveRight);
  };

  btnPrev.addEventListener('click', moveLeft);
  btnNext.addEventListener('click', moveRight);

  carousel.addEventListener('animationend', (e) => {
    const prevItem = document.querySelector('#carousel-item-prev');
    const currentItem = document.querySelector('#carousel-item-current');
    const nextItem = document.querySelector('#carousel-item-next');

    let changedItem;

    if (e.animationName === 'move-left') {
      changedItem = nextItem;
      // itemsIndexes.shift();
      // itemsIndexes.push('-');
    }
    if (e.animationName === 'move-right') {
      changedItem = prevItem;
      // itemsIndexes.unshift('-');
      // itemsIndexes.pop();
    }
    // console.log(itemsIndexes);

    carouselContent.classList.remove('transition-left', 'transition-right');
    currentItem.innerHTML = changedItem.innerHTML;
    changedItem.innerHTML = '';

    const newIndexes = getRandomIndexes(itemCardsCount, 7);

    // itemsIndexes.forEach((itemIndexes, i) => {
    //   if (itemIndexes === '-') {
    //     itemsIndexes[i] = newIndexes;
    //   }
    // });
    // console.log(itemsIndexes);

    renderCards(changedItem, newIndexes);

    btnNext.addEventListener('click', moveRight);
    btnPrev.addEventListener('click', moveLeft);
  });
};

export { initCarousel };
