import levels from './levels.js'

const hintBtn = document.querySelector('.card__hint-btn');
const hint = document.querySelector('.card__hint');
hintBtn.addEventListener('click', () => {
  hint.classList.toggle('_active');
});

let currentLevel = 0;

const nextBtn = document.querySelector('.card__next-btn');
const prevBtn = document.querySelector('.card__prev-btn');

function changeLevel(source) {
  const question = document.querySelector('.card__question');
  const hint = document.querySelector('.card__hint');
  const levelCounter = document.querySelector('.card__counter');
  question.textContent = source[currentLevel].question;
  hint.textContent = source[currentLevel].answer;
  levelCounter.textContent = `${currentLevel + 1}/${source.length}`;
  if(currentLevel + 1 === source.length) {
    nextBtn.classList.add('_inactive');
  }else if(currentLevel < 1) {
    prevBtn.classList.add('_inactive');
  }else {
    nextBtn.classList.remove('_inactive');
    prevBtn.classList.remove('_inactive');
  }
}

nextBtn.addEventListener('click', () => {
    currentLevel++;
    changeLevel(levels);
});
prevBtn.addEventListener('click', () => {
  currentLevel--;
  changeLevel(levels);
});

changeLevel(levels);