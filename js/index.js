import Card from './card.js';
const card = new Card(document.querySelector('.card'));
const topicButtons = document.querySelectorAll('.header__topic-btn');
topicButtons.forEach(button => {
  button.addEventListener('click', () => {
    card.changeTopic(button.dataset.topic);
    topicButtons.forEach(btn => {
      btn.classList.remove('_active');
    });
    button.classList.add('_active');
  });
});
