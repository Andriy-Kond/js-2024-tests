console.log("Конкатенація");
console.log("const message = 'Mango ' + 'is' + ' happy';");
const message = "Mango " + "is" + " happy";
console.log("message:", message); // Mango is happy

console.log("різний порядок операндів");

console.log("1 + '2'", 1 + "2"); // "12"
console.log("1 + '2' + 4", 1 + "2" + 4); // "124"
console.log("1 + 2 + '4'", 1 + 2 + "4"); // "34"

console.log("Шаблонні рядки");

// Використовуючи змінні, необхідно скласти рядок з підставленими значеннями
const guestName = "Манго";
console.log("const guestName = 'Манго';");
const roomNumber = 207;
console.log("const roomNumber = 207;");
console.log(
  "Конкатенація: const greeting ='Welcome' + guestName + ', your room number is ' + roomNumber + '!';",
);
console.log(
  "Шаблонні рядки та інтерполяція: const greeting2 = `Welcome ${guestName}, your room number is ${roomNumber}!`;",
);

const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!"

const greeting2 = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting2); // "Welcome Mango, your room number is 207!"

console.log("У кожного рядка є вбудовані властивості і методи");
console.log("Властивість length");

const message20 = "Welcome to Bahamas!";
console.log("const message20 = 'Welcome to Bahamas!';");
console.log("message20.length", message20.length); // 19
console.log(
  "'There is nothing impossible to him who will try'.length",
  "There is nothing impossible to him who will try".length,
); // 47

console.log("Методи toLowerCase() і toUpperCase()​");

const message21 = "Welcome to Bahamas!";
console.log(message21); // "Welcome to Bahamas!"
console.log(message21.toLowerCase()); // "welcome to bahamas!"
console.log(message21.toUpperCase()); // "WELCOME TO BAHAMAS!"

console.log("Метод indexOf()​");
console.log(
  "Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.:",
);

const message22 = "Welcome to Bahamas!";
console.log('const message = "Welcome to Bahamas!";:');
console.log('message22.indexOf("to")', message22.indexOf("to")); // 8
console.log('message22.indexOf("hello")', message22.indexOf("hello")); // -1

console.log("Метод includes()​");

console.log(
  "Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься",
);

const productName = "Ремонтний дроїд";
console.log('const productName = "Ремонтний дроїд";:::');

console.log(productName.includes("н")); // true
console.log(productName.includes("Н")); // false
console.log(productName.includes("дроїд")); // true
console.log(productName.includes("Дроїд")); // false
console.log(productName.includes("Ремонтний")); // true
console.log(productName.includes("ремонтний")); // false

console.log("Метод endsWith()");
console.log(
  "Дозволяє визначити, чи завершується рядок символами (підрядком), зазначеними в дужках, повертаючи true або false.",
);
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true
const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false

console.log("Методи replace() і replaceAll()​");
console.log(
  "Повертає новий рядок, в якому перше (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення.",
);

const jsFileName02 = "script.js";
const minifiedJsFileName = jsFileName02.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"
const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

console.log("Метод slice()");
console.log(
  "Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.",
);
const productName02 = "Repair droid";
console.log(productName02.slice(0, 4)); // "Repa"
console.log(productName02.slice(3, 9)); // "air dr"
console.log(productName02.slice(0, productName02.length)); // "Repair droid"
console.log(productName02.slice(7, productName02.length)); // "droid"
