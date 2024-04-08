// ^ Методи масиву
// ~Методи split() і join()
// Не змінює масив, а повертає новий (змінений).
const userName = "Mango";
console.log(userName.split("")); // ["M", "a", "n", "g", "o"]
const message = "JavaScript - це цікаво";
console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

const words = ["JavaScript", "це", "цікаво"];
console.log(words.join("")); // "JavaScriptцецікаво"
console.log(words.join(" ")); // "JavaScript це цікаво"
console.log(words.join("-")); // "JavaScript-це-цікаво"

// ~Метод indexOf()
// indexOf(value) повертає перший індекс, в якому елемент зі значенням value був знайдений в масиві, або число -1, якщо такий елемент відсутній.
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

// ~Методи push() і pop() nf unshift і shift()
// Додають або видаляють крайні елементи масиву.
// push() і pop() - в кінці масиву
// unshift і shift() - на початку масиву
const numbers = [];
numbers.push(1);
console.log(numbers); // [1]
numbers.push(2);
console.log(numbers); // [1, 2]

const fullNumbers = [1, 2, 3, 4, 5];
console.log(fullNumbers.pop()); //  5
console.log(fullNumbers); // [1, 2, 3, 4]
console.log(fullNumbers.pop()); //  4
console.log(fullNumbers); // [1, 2, 3]

// ~Метод slice()
// slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його.
// Копія створюється з begin і до end (але не включно). begin і end - індекси вихідного масиву.
console.log("clients:::", clients);
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// Якщо значення start від'ємне, а end не зазначено - будуть скопійовані останні start елементи
console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// ~Метод splice() - швейцарський ніж
// splice(position, num, new_element_1, new_element_2, ...)
// Змінює вихідний масив і повертає масив, що містить видалені елементи

// &Видалення - splice(position, num)
// position - індекс з якого почати
// num - скільки елементів видаляти
const scores = [1, 2, 3, 4, 5];
const deletedScores = scores.splice(0, 3); // Видалить три елементи масиву, починаючи з першого (індекс 0)
console.log(scores); // [4, 5]
console.log(deletedScores); // [1, 2, 3]

// &Додавання - splice(position, 0, new_element_1, new_element_2, ...)
// position - індекс з якого почати
// 0 - скільки елементів видаляти
// new_element_1, new_element_2, - нові елементи, що треба додати
const colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]

colors.splice(1, 0, "yellow", "pink");
console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// &Заміна - splice(position, num, new_element_1, new_element_2, ...)
const languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1, 1, "Python"); // Замінить елемент з індексом 1 на новий
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

languages.splice(2, 1, "C#", "Swift", "Go"); // Замінить один елемент (з індексом 2) на декілька
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// ~Метод concat() //архаїка, замість нього - rest і spread
// Об'єднує два або більше масивів в один.
// Не змінює вихідний масив, повертає новий.
// Порядок аргументів методу впливає на порядок елементів нового масиву.
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.table(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]

const moreArrays = newClients.concat(oldClients, colors, clients5, [1, 2, 3], [90, 70]);
console.log("moreArrays::::::::::::::::::::", moreArrays);
