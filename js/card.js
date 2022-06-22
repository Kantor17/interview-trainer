import allLevels from './levels.js';
export default class {
  constructor(cardE) {
    this.levelCounter = 0;
    this.currentLevels = allLevels;

    this.questionE = cardE.querySelector('.card__question');
    this.counterE = cardE.querySelector('.card__counter');

    this.prevBtn = cardE.querySelector('.card__prev-btn');
    this.nextBtn = cardE.querySelector('.card__next-btn');
    [this.prevBtn, this.nextBtn].forEach(button => {
      button.addEventListener('click', (event) => {
        if(event.target.closest('.card__prev-btn')) {
          this.levelCounter--;
        }else {
          this.levelCounter++;
        }
        
        this.changeLevel();
      });
    });

    this.hintE = cardE.querySelector('.card__hint');
    cardE.querySelector('.card__hint-btn').addEventListener('click', () => {
      this.hintE.classList.toggle('_active');
    });

    this.changeLevel();
  }

  changeLevel() {
    const level = this.currentLevels[this.levelCounter];
    this.questionE.textContent = level.question;
    this.counterE.textContent = `${this.levelCounter + 1}/${this.currentLevels.length}`;
    this.hintE.textContent = level.answer;
    this.checkActivity();
  }

  checkActivity() {
    if(this.levelCounter + 1 >= this.currentLevels.length) {
      this.nextBtn.classList.add('_inactive');
    }else if(this.levelCounter < 1) {
      this.prevBtn.classList.add('_inactive');
    }else {
      [this.prevBtn, this.nextBtn].forEach(button => {
        button.classList.remove('_inactive');
      });
    }
  }


}