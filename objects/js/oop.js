// ^ Old entry:
// This constructor function may be converted to a class declaration. Convert function to an ES2015 class...
const OldCar = function (value) {
  // & ця функція і є конструктором
  // У value можна передавати значення, чи об'єкт налаштувань - усе як у звичайній функції
  console.log(this);
  this.price = value;
  console.log("Виконується конструктор OldCar");
};

console.log("OldCar:::", OldCar); // OldCar::: function OldCar(value)
//    arguments: null
//​    caller: null
//    length: 1
//    name: "OldCar"
//    prototype: Object {
//       constructor: function Car(value) {...}
//       [[Prototype]]: Object { ... }
//    }
//    [[Prototype]]: function () ...

// & Додавання в прототип цього класу додаткового методу:
OldCar.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

// & Додавання в конструктор цього класу статичної властивості "description":
OldCar.description = "Це клас, що описує автівку";
// & Додавання в конструктор цього класу статичного методу "logInfo":
OldCar.logInfo = function (carObj) {
  console.log("OldCar.logInfo -> carObj:::", carObj);
};

const myOldCar = new OldCar(111);
console.log("myOldCar:::", myOldCar);

console.log(OldCar.__prototype__ === myOldCar.__prototype__); // true

OldCar.logInfo(myOldCar);

const myOldCar2 = new OldCar(10);
console.log("myOldCar2:::", myOldCar2);
myOldCar2.changePrice(100);
console.log("myOldCar2:::", myOldCar2);

// ^ New entry - ES2015 class
class ModernCar {
  // & Додавання в конструктор цього класу статичної властивості "description":
  static description = "Це статична властивість класу, що описує автівку";
  // & Додавання в конструктор цього класу статичного методу "logInfo":
  static logInfo(carObj) {
    console.log("ModernCar.logInfo ==> carObj:::", carObj);
  }

  // & Приватна властивість. Додається лише у класі (на екземплярі не можна - буде помилка). Вона є і показується в тулзах на екземплярах, але змінити, чи подивитись її напряму неможливо, бо звертання console.log(myModernCar.#test) - це не валідний синтаксис, а звертання console.log(myModernCar.test) поверне undefined, бо такої властивості в екземплярі просто немає. Тому лише через методи, що лежать на прототипі батьківського класу: myModernCar2.showPrivate();
  #test = "Це приватна властивість, що доступна лише на класі";

  // & Публічні властивості йдуть на екземпляр.
  myPublicField = "Це публічна властивість";

  // & Обов'язковий конструктор
  constructor({ brand, model, price = 0, doors = 4 } = {}) {
    // = {} - дефолтне значення, якщо раптом ну буде нічого передано, щоб не було помилки, бо в undefined не буде властивостей brand, model та price.
    console.log(this);
    this._brand = brand;
    this._model = model;
    this._price = price;
    this._doors = doors;
    console.log("Виконується конструктор modern");

    // Публічну властивість можна оголосити і в конструкторі (через this.):
    // this.myPublicField = "Це публічна властивість";
  }

  // & Додавання у властивість prototype цього класу додаткових методів
  changePrice(newPrice) {
    this._price = newPrice;
  }

  changeModel(newModel) {
    this._model = newModel;
  }

  showPrivate() {
    console.log(this.#test);
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }

  get doors() {
    return this._doors;
  }

  set doors(newDoors) {
    this._doors = newDoors;
  }

  // Методи класів можна оголосити і через стрілку. Але тоді вони стануть публічними (перемістяться з prototype у конструктор кожного екземпляру), що для класу не бажано. Тому не варто таке робити.
}

console.log("ModernCar-log:::", ModernCar); // ModernCar::: class ModernCar { constructor(value) }
//    length: 1
//    name: "oldCar"
//    prototype: Object {
//       constructor: class ModernCar { constructor(value) }
//       [[Prototype]]: Object { ... }
//    }
//    [[Prototype]]: function () ...

const myModernCar = new ModernCar({ brand: "Nissan", model: "a555", price: 100500 });
console.log("myModernCar:::", myModernCar); // myModernCar::: Object { a: 555 }

// Переконатись, що ModernCar.prototype є прототипом для myModernCar:
console.log(Object.getPrototypeOf(myModernCar)); // constructor: class ModernCar
console.log(ModernCar.prototype); //constructor: class ModernCar

// тоді:
console.log(Object.getPrototypeOf(myModernCar) === ModernCar.prototype); // true
// або:
console.log(ModernCar.__prototype__ === myModernCar.__Prototype__); // true
// або:
console.log(ModernCar.prototype.isPrototypeOf(myModernCar));

const myModernCar2 = new ModernCar({ brand: "Audi", model: "Q3", price: 400 });
console.log("myModernCar2:::", myModernCar2); // {brand: 'Audi', model: 'Q3', price: 400}
myModernCar2.changePrice(200500);
console.log("myModernCar2:::", myModernCar2); // {brand: 'Audi', model: 'Q3', price: 200500}

ModernCar.logInfo(myModernCar2);
myModernCar2.showPrivate();

// Звертання до геттерів і сеттерів:
console.log("myModernCar.model:::", myModernCar.model);
myModernCar.model = "Q28";
console.log("myModernCar.model:::", myModernCar.model);
console.log("myModernCar:::", myModernCar);
