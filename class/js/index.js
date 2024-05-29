class Car {
  static #MAX_PRICE = 50000;
  constructor({ price }) {
    this.price = price;
  }

  static checkPrice(price) {
    return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits";
  }
}

const audi = new Car({ price: 36000 });
console.log("audi:::", audi);
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // should be "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // should be "Error! Price exceeds the maximum"
