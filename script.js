'use strict'

/* 1) Написати код, який пропонує користувачу вгадати таємниче число. Кількість спроб необмежена!
Таємниче число створюєте самі і записуєте в константу.  const SECRET_NUMBER = 7;
Користувач вводить число, ви залежно від того, що ввів користувач пишете:
- таємне число більше                                       (userNumber = 3)
- таємне число менше                                       (userNumber = 30)
- ви ввели не число                                            (userNumber = null)
- вітаю, ви вгадали за .. (кількість) спроб     (userNumber = 7) */

const SECRET_NUMBER = 7;
let numberAttempts = 0;
while (true) {
    const userNumber = prompt('Вгадайте число: ');
   
    if (userNumber === null) {
        alert('Упс, число ще не вгадано. Вихід не можливий!');
        continue;
    }
    if (isNaN(userNumber) || !userNumber.trim() || userNumber === '') {
        alert('ви ввели не число'); 
        numberAttempts++;
    } else if (userNumber > SECRET_NUMBER) {
        alert('таємне число менше');
        numberAttempts++;
    } else if (userNumber < SECRET_NUMBER) {
        alert('таємне число більше');
        numberAttempts++;
    } else {
        numberAttempts++;
        alert(`Вітаю, ви вгадали за ${numberAttempts} спроб`);
        break;
    }
}

/* 2) Написати скрипт, який виводить парні і кратні 9 числа з діапазону від 0 до 100 в зворотньому порядку */

const minValueRange = 0;
const maxValueRange = 100;

for (let i = maxValueRange; i >= minValueRange; i--) {
    if (i % 2 === 0 && i % 9 === 0) {
       console.log(i); 
    }
}

/*Створити об'єкт country двома способами: літерально та за допомогою функції конструктора
властивості:
- name (рядок)
- population (число)
- area (число)
метод:
- getDensity() - повертає число 45.78 */

const countryL = {
    name:'Main',
    population: 1000000,
    area: 60,
    getDensity: function(){
        return this.population / this.area;
    }
}


function Country(name, population, area ){
    this.name = name;
    this.population = population;
    this.area = area;
    this.getDensity = function(){
        return this.population / this.area;
    }
}
const countryF = new Country('Main', 1000000, 60);
console.log(countryF.getDensity());
console.log(countryL.getDensity());

/*Створити об'єкт country двома способами: літерально та за допомогою функції конструктора
властивості:
- name (рядок)
- population (число)
- area (число)
методи покласти в прототип
- getDensity() - повертає число яке є результатом обчислення популяція поділена на площу

- getInfo() - повертає рядок з повною інформацією про країну (назва, популяція та площа) з описом що виводить і одиницями вимірювання */

const СountryPrototype = {
    getDensity: function(){
        return this.population / this.area;
    },
    getInfo: function(){
        return console.log(`Повна Інформація: \n назва країни: ${this.name} \n популяція країни: ${this.population} осіб \n площа країни: ${this.area} м²`);
    }
}

const countryLiteral = {
    name:'Main',
    population: 1000000,
    area: 60,
    __proto__: СountryPrototype
}


function CountryConstr(name, population, area ){
    this.name = name;
    this.population = population;
    this.area = area;
}
CountryConstr.prototype = СountryPrototype;

const countryСonstructor = new CountryConstr('Ukr',4000000000, 4582);

console.log(countryСonstructor.getInfo());
console.log(countryLiteral.getInfo());