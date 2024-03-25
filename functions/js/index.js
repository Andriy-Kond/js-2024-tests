// Функціональний вираз (function expression) - звичайне оголошення змінної const. Тому його не можна викликати до оголошення.
// ❌ Помилка! Не працює виклик до оголошення
multiplyExpression(1, 2, 3);
const multiplyExpression = function (x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
};
// ✅ Працює виклик після оголошення
multiplyExpression(4, 5, 6);

// Оголошення функції - можна викликати де завгодно.
// ✅ Працює виклик до оголошення
multiply(1, 2, 3);
function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}
// ✅ Працює виклик після оголошення
multiply(4, 5, 6);

// ^Параметри за замовчуванням
function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}
count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(); // countFrom = 0, countTo = 10, step = 1

// ^Псевдомасив arguments
// Змінна arguments доступна лише всередині функції і зберігає всі аргументи у якості псевдомасиву.
// Псевдомасив - колекція з властивістю length і можливістю звернутися до елементу за індексом, але відсутністю більшості методів для роботи з масивом.
function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}
console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

// Перетворення псевдомасиву
// Зазвичай псевдомасив необхідно перетворити у повноцінний масив, оскільки у псевдомасиву відсутні методи масиву, наприклад slice() або includes().
// Перший спосіб - використати метод Array.from(), який створить масив із псевдомасиву.
function fn() {
  const args = Array.from(arguments);
  // Змінна args буде містити повноцінний масив
}
// Другий спосіб - використати операцію ...(rest), яка збирає елементи (в цьому випадку - аргументи) в масив, і зберігає його в змінну
function fn(...args) {
  // Змінна args буде містити повноцінний масив
}
