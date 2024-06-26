// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (const potion of this.potions) {
      console.log("removePotion >> potion:::", potion);

      if (potion.name === potionName) {
        console.log("removePotion >> potion.name === potionName:::", potion.name === potionName);

        this.potions.splice(this.potions.indexOf(potion), 1);

        return "видалили";
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        return;
      }
    }

    return `Potion ${oldName} is not in inventory!`;
  },
};

const a = atTheOldToad.removePotion("Dragon breath");
console.log("a:::", a);

// check
// Виклик методу `atTheOldToad.getPotions()` для вихідного об'єкта повертає `[ { name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 } ]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })`, в масиві `potions` останнім елементом буде цей об'єкт
// Для вихідного об'єкта після виклику методу `atTheOldToad.addPotion({ name: 'Power potion', price: 270 })`, в масиві `potions` останнім елементом буде цей об'єкт
// Якщо зілля, що додається, вже є в масиві `potions`, метод `addPotion` повертає рядок з текстом з вихідного коду.
// Для вихідного об'єкта виклик `atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })`, повертає рядок `'Error! Potion Stone skin is already in your inventory!'`.
// Для вихідного об'єкта виклик `atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })`, повертає рядок `'Error! Potion Dragon breath is already in your inventory!'`.
// Якщо зілля, що додається, вже є в масиві `potions`, метод `addPotion` не додає в нього переданий об'єкт.
// Для вихідного об'єкта після виклику `atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })`, массив `potions` не змінюється.
// Для вихідного об'єкта після виклику методу `atTheOldToad.removePotion('Dragon breath')`, у властивості `potions` буде масив `[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.removePotion('Speed potion')`, у властивості `potions` буде масив `[ { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')`, у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')`, у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Invulnerability potion', price: 520 } ]`

// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів(властивість balance), стать яких(властивість gender) збігається зі значенням параметра gender.

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

const getTotalBalanceByGender = (users, gender) =>
  users.filter(user => user.gender === gender).reduce((acc, el) => (acc += el.balance), 0);

const res = getTotalBalanceByGender(users, "male");
console.log("res:::", res);
