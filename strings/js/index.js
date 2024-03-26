// ^Конкатенація
console.log("Конкатенація");
console.log("const message = 'Mango ' + 'is' + ' happy';");
const message = "Mango " + "is" + " happy";
console.log("message:", message); // Mango is happy

console.log("різний порядок операндів");
console.log("1 + '2'", 1 + "2"); // "12"
console.log("1 + '2' + 4", 1 + "2" + 4); // "124"
console.log("1 + 2 + '4'", 1 + 2 + "4"); // "34"

// ~Шаблонні рядки
console.log("Шаблонні рядки");
// Використовуючи змінні, необхідно скласти рядок з підставленими значеннями
const guestName = "Манго";
const roomNumber = 207;
// Конкатенація:
const greeting = "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!"
// Шаблонні рядки та інтерполяція
const greeting2 = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting2); // "Welcome Mango, your room number is 207!"

// ^Властивості і методи
// У кожного рядка є вбудовані властивості і методи
// ~Властивість length
console.log("Властивість length");
const message20 = "Welcome to Bahamas!";
console.log("message20.length", message20.length); // 19
console.log(
  "'There is nothing impossible to him who will try'.length",
  "There is nothing impossible to him who will try".length,
); // 47

//~ Методи toLowerCase() і toUpperCase()
// Не змінюють оригінальний рядок, а повертають новий як результат своєї роботи. Тобто результат треба записувати в іншу змінну.
console.log("Методи toLowerCase() і toUpperCase()​");
const message21 = "Welcome to Bahamas!";
console.log(message21); // "Welcome to Bahamas!"
console.log(message21.toLowerCase()); // "welcome to bahamas!"
console.log(message21.toUpperCase()); // "WELCOME TO BAHAMAS!"

//~ Метод indexOf()
// Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено
console.log("Метод indexOf()​");
const message22 = "Welcome to Bahamas!";
console.log('const message = "Welcome to Bahamas!";:');
console.log('message22.indexOf("to")', message22.indexOf("to")); // 8
console.log('message22.indexOf("hello")', message22.indexOf("hello")); // -1
// Другий спосіб - звернутись через квадратні дужки
let brand = "samsung";
console.log(brand[4]); // звернеться до четвертого індексу рядка (починаючи з 0)

// ~Метод includes()
console.log("Метод includes()​");
// Перевіряє, чи міститься підрядок в рядку, повертає буль (true, якщо міститься)
const productName = "Ремонтний дроїд";
console.log(productName.includes("н")); // true
console.log(productName.includes("Н")); // false
console.log(productName.includes("дроїд")); // true
console.log(productName.includes("Дроїд")); // false
console.log(productName.includes("Ремонтний")); // true
console.log(productName.includes("ремонтний")); // false
// Приклад застосування
const blacklistWord1 = "спам";
const blacklistWord2 = "розпродаж";
const string1 = "Привіт, це принц Абдул. Це не спам, я дарую тобі мільйон";
const string2 = "Самий великий РОЗПРОДАЖ цього тижня! Не пропустіть";
const string3 = "Рекламна компанія #fallivesmatter";
console.log("string1.toLowerCase().includes(blacklistWord1)", string1.toLowerCase().includes(blacklistWord1));
console.log("string1.toLowerCase().includes(blacklistWord2)", string1.toLowerCase().includes(blacklistWord2));

console.log("string2.toLowerCase().includes(blacklistWord1)", string2.toLowerCase().includes(blacklistWord1));
console.log("string2.toLowerCase().includes(blacklistWord2)", string2.toLowerCase().includes(blacklistWord2));

console.log("string3.toLowerCase().includes(blacklistWord1)", string3.toLowerCase().includes(blacklistWord1));
console.log("string3.toLowerCase().includes(blacklistWord2)", string3.toLowerCase().includes(blacklistWord2));

// ~Метод endsWith()
console.log("Метод endsWith()");
// Дозволяє визначити, чи завершується рядок символами (підрядком), зазначеними в дужках, повертаючи true або false.
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true
const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false

// ~Методи replace() і replaceAll()​
console.log("Методи replace() і replaceAll()​");
// Повертає новий рядок, в якому перший (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення.
const jsFileName02 = "script.js";
const minifiedJsFileName = jsFileName02.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"
const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// ~Метод slice()
console.log("Метод slice()");
// Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка.
// Робить копію елементів рядка від startIndex і до endIndex (але не включно) і повертає новий рядок, не змінюючи оригінал.
const productName02 = "Repair droid";
console.log(productName02.slice(0, 4)); // "Repa"
console.log(productName02.slice(3, 9)); // "air dr"
console.log(productName02.slice(0, productName02.length)); // "Repair droid"
console.log(productName02.slice(7, productName02.length)); // "droid"

// *Задача - нормалізувати все слово крім першої літери
const brandConcat = brand[0].toUpperCase() + brand.slice(1).toLocaleLowerCase();
// або:
const brandTemplate = `${brand[0].toUpperCase()}${brand.slice(1).toLocaleLowerCase()}`;
console.log(brandConcat);
console.log(brandTemplate);
