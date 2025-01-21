const shareContainer = document.querySelector('.wrapper__share');
const activateShare = document.getElementById('share-activate');
const closeShare = document.getElementById('share-close');

activateShare.addEventListener('click', () => {
  shareContainer.classList.remove('transformed');
});

closeShare.addEventListener('click', () => {
  shareContainer.classList.add('transformed');
});
