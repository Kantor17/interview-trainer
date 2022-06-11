const hintBtn = document.querySelector('.card__hint-btn');
const hint = document.querySelector('.card__hint');
hintBtn.addEventListener('click', () => {
  hint.classList.toggle('_active');
});