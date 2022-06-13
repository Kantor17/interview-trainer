const hintBtn = document.querySelector('.card__hint-btn');
const hint = document.querySelector('.card__hint');
hintBtn.addEventListener('click', () => {
  hint.classList.toggle('_active');
});

const levels = [
  {
    question: 'Что такое DOCTYPE и для чего он нужен?',
    answer: 'DOCTYPE - специальный тег, который указывает тип документа и его стандарт. Он должен находится в начале каждого HTML-документа.',
    topic: 'HTML',
  },
  {
    question: 'С каких элементов состоит базовая разметка HTML-страницы?',
    answer: 'Первой строкой всегда должен идти DOCTYPE, потом корневой блок html, в который вложены блоки head(содержит основную информацию о странице) и body(в него помещаются все остальные элемнты страницы)',
    topic: 'HTML',
  },
  {
    question: 'Что такое семантические HTML-теги и для чего они нужны?',
    answer: 'Семантические теги - это теги, которые самостоятельно описывают своё предназначение. Они делают код более понятным для чтения другими разработчиками и поисковыми машинами, а так же улучшают доступность страницы для людей с ограничеными возможностями',
    topic: 'HTML',
  }
];
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