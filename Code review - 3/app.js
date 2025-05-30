// 9.10 Принципы ООП в классах

class Character {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    };
};

class Ork extends Character {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    };

    hit() {
        return `I have hit the target with my ${this.weapon}`;
    };

    talk() {
        return `My name is ${this.name}. Ready for battle!`
    }
};

class Elf extends Character {
    constructor(race, name, language, spell) {
        super(race, name, language);
        this.spell = spell;
    };

    cast() {
        return `Spell ${this.spell} reached the target`;
    };
    talk() {
        return `My name is ${this.name}. It is a pleasure to accompany you!`
    }
};

const myElf = new Elf('Elf', 'Elfy', 'Elvish', 'Heal');
const myOrk = new Ork('Ork', 'Borg', 'Orkish', 'Hammer');

console.log(myElf.cast());
console.log(myElf.talk());
console.log(myOrk.hit());
console.log(myOrk.talk());

// 10.9 SOLID

class Billing {
    constructor(amount) {
        this.amount = amount;
    };
    CalculateTotal() {
        return this.amount;
    }
};

class FixedBilling extends Billing {
    constructor(amount) {
        super(amount);
    };
    CalculateTotal() {
        return this.amount;
    }
};

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    };
    CalculateTotal() {
        return this.amount * this.hours;
    }
};

class ItemBilling extends Billing {
    constructor(amount, item) {
        super(amount);
        this.item = item;
    };
    CalculateTotal() {
        return this.amount * this.item;
    }
};

// 11.10 Ассинхронный JavaScript

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
    const { abilities } = JSON.parse(this.responseText);
    console.log(abilities);
    const urlAbility = abilities[0].ability.url;

    const request2 = new XMLHttpRequest();
    request2.open('GET', urlAbility);
    request2.send();
    request2.addEventListener('load', function () {
        const { effect_entries } = JSON.parse(this.responseText);
        console.log(effect_entries);
        console.log(effect_entries[1]);
    })
})