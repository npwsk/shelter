import pets from 'assets/pets';

const insertPetInfo = (modal, petId) => {
  const imageElem = modal.querySelector('.modal__photo');
  const titleElem = modal.querySelector('.modal__title');
  const typeElem = modal.querySelector('.modal__pet-type');
  const breedElem = modal.querySelector('.modal__breed');
  const descriptionElem = modal.querySelector('.modal__description');
  const ageElem = modal.querySelector('.modal__age');
  const inoculationsElem = modal.querySelector('.modal__inoculations');
  const deseasesElem = modal.querySelector('.modal__diseases');
  const parasitesElem = modal.querySelector('.modal__parasites');

  const pet = pets.find((pet) => pet.id == petId);

  imageElem.src = pet.img;
  titleElem.textContent = pet.name;
  typeElem.textContent = pet.type;
  breedElem.textContent = pet.breed;
  descriptionElem.textContent = pet.description;
  ageElem.textContent = pet.age;
  inoculationsElem.textContent = pet.inoculations.join(', ');
  deseasesElem.textContent = pet.diseases.join(', ');
  parasitesElem.textContent = pet.parasites.join(', ');
};

const handleCardClick = function () {
  const modalElem = document.querySelector('.modal');
  const petId = this.dataset.petId;

  insertPetInfo(modalElem, petId);

  modalElem.classList.add('visible');
};

const closeModal = (e, modal) => {
  if (!e.target.closest('.modal__content') || e.target.closest('.modal__close')) {
    modal.classList.remove('visible');
  }
};

const initModal = () => {
  const modalElem = document.querySelector('.modal');
  const closeBtn = modalElem.querySelector('.modal__button');

  modalElem.addEventListener('click', (e) => closeModal(e, modalElem));
};

export { handleCardClick, initModal };
