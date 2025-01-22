const cardElement = document.querySelector('.card');
const textSection = document.querySelector('.wrapper__text-section');
const shareContainer = document.querySelector('.wrapper__share');
const activateShare = document.getElementById('share-activate');
const closeShare = document.getElementById('share-close');
const desktopShareContainer = document.querySelector('.wrapper__share-desktop');

//utiltity functions
const hideElement = (element) => {
  element.classList.add('hidden');
};

const showElement = (element) => {
  element.classList.remove('hidden');
};

const toggleElement = (element, className) => {
  element.classList.toggle(className);
};

//initialize visibility based on viewport
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 800) {
    hideElement(desktopShareContainer);
  } else {
    hideElement(shareContainer);
  }
});

//register evenet listeners for showing/hiding the share-menu
activateShare.addEventListener('click', () => {
  toggleElement(shareContainer, 'transformed-translate');
  toggleElement(desktopShareContainer, 'transformed-scale');
});

closeShare.addEventListener('click', () => {
  toggleElement(shareContainer, 'transformed-translate');
  toggleElement(desktopShareContainer, 'transformed-scale');
});

// hide or show 'hidden' elements based on screen size
window.addEventListener('resize', () => {
  if (window.innerWidth >= 800) {
    hideElement(shareContainer);
    showElement(desktopShareContainer);
  } else {
    hideElement(desktopShareContainer);
    showElement(shareContainer);
  }
});
