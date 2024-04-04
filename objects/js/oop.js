// ^ Old entry:
// This constructor function may be converted to a class declaration. Convert function to an ES2015 class...
const oldCar = function (value) {
  console.log(this);
  this.a = value;
};

console.log("oldCar:::", oldCar); // oldCar::: function oldCar(value)
//    arguments: null
//​    caller: null
//    length: 1
//    name: "oldCar"
//    prototype: Object {
//       constructor: function Car(value) {...}
//       [[Prototype]]: Object { ... }
//    }
//    [[Prototype]]: function () ...

const myOldCar = new oldCar(111);
console.log("myOldCar:::", myOldCar);

const myOldCar2 = new oldCar(10);
console.log("myOldCar2:::", myOldCar2);

// ^ New entry - ES2015 class
class modernCar {
  constructor(value) {
    console.log(this);
    this.a = value;
  }
}
console.log("modernCar:::", modernCar); // modernCar::: class modernCar { constructor(value) }
//    length: 1
//    name: "oldCar"
//    prototype: Object {
//       constructor: class modernCar { constructor(value) }
//       [[Prototype]]: Object { ... }
//    }
//    [[Prototype]]: function () ...

const myModernCar = new modernCar(555);
console.log("myModernCar:::", myModernCar); // myModernCar::: Object { a: 555 }

const myModernCar2 = new modernCar(50);
console.log("myModernCar2:::", myModernCar2); // myModernCar2::: Object { a: 20 }
