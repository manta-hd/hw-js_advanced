'use strict'

// 6.8 'Until the end of the year...' timer

function updateTimer() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const targetDate = new Date(nextYear, 0, 1, 0, 0, 0);
    const diffrence = targetDate - now;

    const totalSeconds = Math.floor(diffrence / 1000);
    const secondsLeft = totalSeconds % 60;

    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutesLeft = totalMinutes % 60;

    const totalHours = Math.floor(totalMinutes / 60);
    const hoursLeft = totalHours % 24;

    const daysLeft = Math.floor(totalHours / 24);
    const timerEl = document.getElementById("timer");
    timerEl.textContent = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
};
setInterval(updateTimer, 1000);
updateTimer();

//7.9 ООП

const Character = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
};

Character.prototype.speak = function () {
    return `Имя: ${this.name} Язык: ${this.language}`;
};

const Ork = function (name, language, weapon) {
    Character.call(this, 'Ork', name, language);
    this.weapon = weapon;
};

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.hit = function () {
    return 'I have hit the target';
};

const Elf = function (name, language, spell) {
    Character.call(this, 'Elf', name, language);
    this.spell = spell;
};
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.cast = function () {
    return 'Spell reached the target'
};

const elf1 = new Elf('Elfy', 'Elvish', 'Heal');

console.log(elf1);
console.log(elf1.cast());

// 8.9 Классы

class Car {
    #make;
    #model;
    #run;
    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }
    get run() {
        return `Пробег: ${this.#run}`;
    }
    set run(runUpdated) {
        if (runUpdated < this.#run) {
            console.log('Пробег не может быть меньше настоящего');
            return;
        }
        this.#run = runUpdated;
        console.log(`Пробег обновлён: ${runUpdated}`);
    }
    info() {
        return `Марка: ${this.#make}, Модель: ${this.#model}, Пробег: ${this.#run}`;
    }
};

const car1 = new Car('Mazda', '6', 1000);
console.log(car1);
console.log(car1.info());
console.log(car1.run);
car1.run = 500;
console.log(car1.run);
car1.run = 5000;
console.log(car1.run);


