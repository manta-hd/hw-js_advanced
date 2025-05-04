// 3.12 Уникализация массива объектов с помощью Set

let arr = [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Ken' },
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Ken' },
    { id: 3, name: 'Seth' }
];

function uniqueArray(array) {
    let set = new Set();
    let newArr = [];
    array.forEach((el) => {
        if (!set.has(el.id)) {
            set.add(el.id);
            newArr.push(el);
        };
    });
    return newArr;
};

console.log(uniqueArray(arr));

//4.12 Dice function

const d4 = 4;
const d6 = 6;
const d8 = 8;
const d10 = 10;
const d12 = 12;
const d16 = 16;
const d20 = 20;

function randomDiceNumber(dice) {
    let arr = [];
    for (i = 1; i <= dice; i++) {
        arr.push(i);
    };
    return Math.floor(Math.random() * (dice - arr[0] + 1) + arr[0]);
};

console.log(randomDiceNumber(d20));


//5.8 Валидация возраста пользователя

function ageValidation(birthDate) {
    let birthday = new Date(birthDate);
    let today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    let monthDifference = today.getMonth() - birthday.getMonth();
    let dateDifference = today.getDate() - birthday.getDate();
    if (monthDifference < 0 || (monthDifference === 0 && dateDifference < 0)) {
        age--;
    };
    return age >= 14
};

console.log(ageValidation('2020-04-14'));
console.log(ageValidation('2005-02-19'));