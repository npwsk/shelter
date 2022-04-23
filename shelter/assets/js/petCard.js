import pets from 'assets/pets';
import { handleCardClick } from './modal';

const createCard = ({ img, name, id }) => {
  const card = document.createElement('div');
  card.classList.add('pet-card');
  card.setAttribute('data-pet-id', id);

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

  card.addEventListener('click', handleCardClick);

  return card;
};

const renderCards = (container, ids) => {
  ids.forEach((id) => {
    const card = createCard(pets[id]);
    container.append(card);
  });
};

export { createCard, renderCards };
