// Magic game
// ^ Наслідування
class Hero {
  constructor({ name = "hero", xp = 0 } = {}) {
    this._name = name;
    this._xp = xp;
  }

  gainXp(amount) {
    console.log(`${this._name} отримав ${amount} досвіду`);
    this._xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...config }) {
    super(config); // якщо не викликати super, то this не буде доступний в дочірньому класі

    this._weapon = weapon;
    console.log("Warrior >> constructor >> config:::", config);
  }

  attack() {
    console.log(`Воїн ${this._name} атакує за допомогою ${this._weapon}`);
  }
}

const mango = new Warrior({ name: "Mango", xp: 1000, weapon: "Меч ⚔" });
console.log("mango:::", mango);
mango.attack();
mango.gainXp(1500);
console.log("mango:::", mango);

console.log("mango.__proto__ === Warrior.prototype:::", mango.__proto__ === Warrior.prototype);
// більш правильний запис:
console.log(
  "або більш правильний запис: Object.getPrototypeOf(mango) === Warrior.prototype;:::",
  Object.getPrototypeOf(mango) === Warrior.prototype,
);
console.log("Warrior.prototype.__proto__ === Hero.prototype:::", Warrior.prototype.__proto__ === Hero.prototype);
console.log("Hero.prototype.__proto__ === Object.prototype:::", Hero.prototype.__proto__ === Object.prototype);

console.log("mango.__proto__:::", mango.__proto__);
console.log("Warrior.prototype:::", Warrior.prototype);
console.log("Warrior.prototype.__proto__:::", Warrior.prototype.__proto__);

class Berserk extends Warrior {}

class Mage extends Hero {
  constructor({ spell = [], ...config }) {
    super(config);

    this._spell = spell;
    console.log("Mage >> constructor >> config:::", config);
  }

  cast() {
    console.log(`Маг ${this._name} чаклує ${this._spell[0]}`);
  }
}

const bravo = new Mage({ name: "Bravo", xp: 600, spell: ["Вогонь 🔥"] });
console.log("bravo:::", bravo);
bravo.cast();
bravo.gainXp(200);
console.log("bravo:::", bravo);
