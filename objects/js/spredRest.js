// ^spred та rest
const temps = [14, -4, 25, 8, 11];
console.log("temps:::", temps);

// ❌ Так не спрацює, тому що передаємо цілий масив:
console.log("Math.max(temps)", Math.max(temps)); // NaN

// ✅ Розподілимо колекцію елементів у якості окремих аргументів:
console.log("Math.max(...temps)", Math.max(...temps)); // 25

// spread: Створення нового масиву
const copyOfTemps = [...temps];

// spread: Об'єднання масивів ( замість concat() )
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps]; // замість concat()

// spread: створення нового об'єкта (порядок має значення - змінні з однаковим ім'ям перезаписуються)
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }
const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }
const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// rest: збирання всіх, або частини аргументів функції
function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log("multiply >> otherArgs:::", otherArgs); // Масив інших аргументів
  console.log("multiply >> secondNumber:::", secondNumber); // Значення другого аргументу
  console.log("multiply >> firstNumber:::", firstNumber); // Значення першого аргументу
}
multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
