const objC = {
  z: 5,
};
console.log("objC:::", objC); // objC::: {z: 5}

const objB = Object.create(objC);
objB.y = 3;
console.log("objB:::", objB); // objB::: {y: 3}

const objA = Object.create(objB);
objA.x = 1;
console.log("objA:::", objA); // objA::: {x: 1}

console.log("objA.z:::", objA.z); // objA.z::: 5

console.log('objA.hasOwnProperty("z"):::', objA.hasOwnProperty("z")); // objA.hasOwnProperty("z")::: false
console.log('objA.hasOwnProperty("y"):::', objA.hasOwnProperty("y")); // objA.hasOwnProperty("y")::: false
console.log('objA.hasOwnProperty("x"):::', objA.hasOwnProperty("x")); // objA.hasOwnProperty("y")::: true

objA.z = 1000;
console.log("objA:::", objA);
// objA::: Object { x: 1, z: 1000 }
//    [[Prototype]]: Object { y: 3 }
//        [[Prototype]]: Object { z: 5 }

console.log('objA.hasOwnProperty("z"):::', objA.hasOwnProperty("z")); // objA.hasOwnProperty("z")::: true
