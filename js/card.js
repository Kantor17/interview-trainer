import allLevels from './levels.js';
export default class {
  constructor(cardE) {
    this.levelCounter = 0;
    this.currentLevels = allLevels;
    this.allLevels = allLevels;
    this.htmlCssLevels = allLevels.filter(level => level.topic === 'HTML&CSS');
    this.jsLevels = allLevels.filter(level => level.topic === 'JS');
    this.dsAlgsLevels = allLevels.filter(level => level.topic === 'DS&ALGS');
    this.oopLevels = allLevels.filter(level => level.topic === 'OOP');
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
    switch(level.topic) {
      case 'HTML&CSS':
        this.questionE.className = 'card__question _text-glow-blue';
        break;
      case 'JS':
        this.questionE.className = 'card__question _text-glow-yellow';
        break;
      case 'DS&ALGS':
        this.questionE.className = 'card__question _text-glow-green';
        break;
      case 'OOP':
        this.questionE.className = 'card__question _text-glow-pink';
        break;
      default:
        this.questionE.className = 'card__question';
    }
    this.questionE.textContent = level.question;
    this.counterE.textContent = `${this.levelCounter + 1}/${this.currentLevels.length}`;
    this.hintE.textContent = level.answer;
    this.checkActivity();
  }

  checkActivity() {
    console.log(this.currentLevels);
    console.log(this.levelCounter);
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

  changeTopic(topic) {
    this.levelCounter = 0;
    switch(topic) {
      case 'ALL':
        this.currentLevels = this.allLevels;
        break;
      case 'HTML&CSS':
        this.currentLevels = this.htmlCssLevels;
        break;
      case 'JS':
        this.currentLevels = this.jsLevels;
        break;
      case 'DS&ALGS':
        this.currentLevels = this.dsAlgsLevels;
        break;
      case 'OOP':
        this.currentLevels = this.oopLevels;
        break;
      default:
        this.currentLevels = allLevels;
    }
    this.nextBtn.classList.remove('_inactive');
    this.changeLevel();
  }
}