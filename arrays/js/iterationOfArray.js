// ^Ітерація по масиву
// Класичні for або for...of - варто використовувати для перебирання масиву лише в задачах з перериванням виконання циклу, бо forEach() завжди перебирає масив до кінця
// В усіх інших випадках - метод forEach()

const clients = ["Mango", "Poly", "Ajax"];
// ~Цикл for
for (let i = 0; i < clients.length; i += 1) {
  // Дозволяє змінювати елементи масиву, бо в client[i] лежить посилання на клітинку пам'яті
  // Дозволяє отримати доступ до індексу елементу
  console.log(clients[i]);
}

// ~Цикл for...of
// Не дозволяє отримати доступ до індексу
// Не дозволяє змінювати елементи масиву, бо в client лежить значення, а не посилання на клітинку пам'яті, як у випадку з for
// Тобто під капотом відбувається ось це: client = client[i]
for (const client of clients) {
  console.log(client);
}

const string = "javascript";
for (const character of string) {
  console.log(character);
}

// ^ Методи масиву для перебору
//  Більшість це чисті функції: створюють новий масив і повертають його.
// Запис: array.method(callback[(currentValue, index, array)]);
// або ж: array.method((item, idx, arr) => { логіка, яка буде застосовуватися на кожній ітерації });
// currentValue (item) - значення елемента
// index (idx) - позиція елемента
// array (arr) - вихідний масив
// Параметр item - обов'язковий, інші - ні.

// * Метод forEach
// Використовується для заміни циклів for і for...of в роботі з колекцією даних.
// Поелементно перебирає масив.
// Викликає колбек-функцію для кожного елемента масиву.
// Нічого не повертає.
// Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.
const arrayIteration = [];
arrayIteration.forEach(function callback(element, index, array) {
  // Тіло колбек-функції
});
// element - значення поточного елемента,
// index - індекс поточного елемента
// array - вихідний масив.

const numbersArray = [5, 10, 15, 20, 25];
// Класичний for
for (let i = 0; i < numbersArray.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbersArray[i]}`);
}
// Метод перебирання forEach
numbersArray.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// * Метод includes()
// під капотом робить перебір масиву і повертає true чи false по умові.
const loginToFind = "Pango";
const messageOfIncludes = clients.includes(loginToFind)
  ? `Користувач ${loginToFind} знайдений`
  : `Користувач ${loginToFind} не знайдений`;
console.log("messageOfIncludes:::", messageOfIncludes);

// ~Оператори break і continue
// break - вихід з циклу (перериває його і виходить)
// continue - перервати поточну ітерацію циклу.

// * Метод map()
// Використовується, щоб змінити кожен елемент масиву, взявши оригінальний масив за еталон
// Поелементно перебирає оригінальний масив.
// Не змінює оригінальний масив.
// Результат роботи колбек-функції записується у новий масив.
// Повертає новий масив однакової довжини.
const planets = ["Земля", "Марс", "Венера", "Юпітер"];
const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

const studentsList = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];
const names = studentsList.map((student) => student.name);
console.log(names); // ['Манго', 'Полі',  'Ківі']

// * Метод flatMap()
// "Розгладжує" масив на один рівень
// Кілька студентів можуть відвідувати один і той самий предмет. Необхідно скласти список всіх предметів, які відвідує ця група студентів, навіть повторюваних.
const allCoursesMap = studentsList.map((student) => student.courses); // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]
const allCoursesFlatMap = studentsList.flatMap((student) => student.courses); // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// * Метод filter()
// Використовується для пошуку всіх елементів, що задовольняють умову
// Не змінює оригінальний масив.
// Поелементно перебирає оригінальний масив.
// Повертає новий масив.
// Додає у новий масив елементи, які задовольняють умови колбек-функції.
// Якщо колбек повернув true, елемент додається у новий масив.
// Якщо колбек повернув false, елемент не додається новий у масив.
// Якщо жоден елемент не задовольнив умову, повертає порожній масив.
const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter((value) => value > 1000);
console.log(bigValues); // []

console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// ~ Фільтрація унікальних елементів
// Цей прийом працює тільки з масивом примітивних значень (не об'єктів!).
const uniqueCourses = allCoursesFlatMap.filter((course, idx, array) => array.indexOf(course) === idx);
console.log("allCoursesFlatMap:::", allCoursesFlatMap); // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
console.log("uniqueCourses:::", uniqueCourses); // ['математика', 'фізика', 'інформатика', 'біологія'];
// Для елемента 'математика' під індексом 0:
// indexOf() поверне 0, тому що шукає перший збіг.
// Значення параметра idx буде 0.
// Вони рівні, а отже, це унікальний елемент.

// Для елемента 'математика' під індексом 3:
// indexOf() поверне 0, тому що шукає перший збіг, а це елемент 'математика' під індексом 0
// Значення параметра idx буде 3.
// Вони не рівні, а отже, це повторюваний - не унікальний елемент.

// ~ Масив об'єктів
// Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості. У підсумку, утворюється новий масив відфільтрованих об'єктів.
// Наприклад, у нас є масив студентів з балами за тест. Необхідно відфільтрувати кращих (бал вище 80), гірших (бал нижче 50) і середніх студентів (бал від 50 до 80).
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Манго і Ківі

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Аякс

// В колбек-функції зручно деструктуризувати властивості об'єкта
const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// * Метод find()
// Дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. Тобто шукає до першого збігу.
// Зазвичай використовується для пошуку елемента за унікальним значенням властивості. Наприклад, пошук користувача за поштою, автомобіля - за серійним номером, книги - за назвою тощо.
// Не змінює оригінальний масив.
// Поелементно перебирає оригінальний масив.
// Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
// Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
colorPickerOptions.find((option) => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find((option) => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find((option) => option.label === "white"); // undefined

// * Метод findIndex()
// Сучасна заміна методу indexOf(). Дозволяє виконувати пошук за складнішими умовами, ніж просто рівність
// Використовується як для пошуку у масиві примітивів, так і в масиві об'єктів.
// Не змінює оригінальний масив.
// Поелементно перебирає оригінальний масив.
// Повертає індекс ПЕРШОГО елемента, що задовольняє умову, тобто, коли колбек повертає true.
// Якщо жоден елемент не задовольняє умову, тобто для всіх елементів колбек повернув false, метод повертає -1.
colorPickerOptions.findIndex((option) => option.label === "blue"); // 2
colorPickerOptions.findIndex((option) => option.label === "pink"); // 3
colorPickerOptions.findIndex((option) => option.label === "white"); // -1

// * Методи every() і some()
// Не змінюють оригінальний масив.
// Поелементно перебирають оригінальний масив.

// ~ Метод every() перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.
// Повертає true, якщо всі елементи масиву задовольняють умову.
// Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
// Перебирання масиву припиняється, якщо колбек повертає false.

// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every((value) => value >= 0); // true
// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

// ~ Метод some() перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.
// Повертає true, якщо хоча б один елемент масиву задовольняє умову.
// Повертає false, якщо жоден елемент масиву не задовольняє умову.
// Перебирання масиву припиняється, якщо колбек повертає true.

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some((value) => value >= 0); // true
// Чи є хоча б один елемент, що менший нуля? - ні
[1, 2, 3, 4, 5].some((value) => value < 0); // false

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];
// every поверне true тільки, якщо усіх фруктів буде більше 0 штук
const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false
// some поверне true, якщо хоча б одного фрукту буде більше 0 штук
const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true

// * Метод reduce()
// масив.reduce((previousValue, element, index, array) => { Тіло колбек-функції }, initialValue);
// Використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор
// Використовується, коли необхідно взяти «багато» і привести до «одного».
// У повсякденних завданнях його застосування зводиться до роботи з числами.
// Не змінює оригінальний масив.
// Поелементно перебирає оригінальний масив.
// Повертає все, що завгодно.
// Робить все, що завгодно.

// Підрахунок суми елементів масиву.
const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);
console.log(total); // 32
// previousValue - акумулятор (проміжний результат)
// Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації.
// Другим аргументом для reduce() можна передати необов'язкове початкове значення акумулятора - параметр initialValue.

// Наприклад, необхідно отримати середній бал студентів
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);
const averageScore = totalScore / students.length;

// ~ Просунутий reduce
// порахувати кількість унікальних тегів в масиві
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs", "Oracle"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// порахувати суму усіх лайків
const countLikes = (tweets) => {
  return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};
console.log(countLikes(tweets)); // 32

// зберемо в масив усі теги, які зустрічаються в постах.
const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    console.log("getTagStats >> tag:::", tag);
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log("tagCount:::", tagCount);

// * Метод sort()
// Сортує і змінює вихідний масив.
// Повертає змінений масив, тобто посилання на відсортований вихідний.
// За замовчуванням сортує за зростанням.
// Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.

// Значення приводяться до рядка, тому стандартне сортування чисел працює некоректно.
const scores = [27, 2, 41, 4, 7, 3, 75];
scores.sort();
console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// Масив рядків сортується за алфавітом.
const studentsForSort = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
studentsForSort.sort();
console.log(studentsForSort); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

// Порядковий номер великих літер менший, ніж у малих.
const letters = ["b", "B", "a", "A", "c", "C"];
letters.sort();
console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// Щоб набути чистоти функції вихідний масив клонують
const scoresIncome = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scoresIncome].sort();
console.log(scoresIncome); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// ~ Свій порядок сортування чисел
// сортування за зростанням: якщо виклик compareFunction(a, b) повертає будь-яке від'ємне значення, тобто a менше b, сортування поставить a перед b
const ascendingScoresAB = [...scoresIncome].sort((a, b) => a - b);
console.log(ascendingScoresAB); // [19, 35, 56, 61, 74, 92]

// сортування за спаданням: якщо виклик compareFunction(a, b) повертає будь-яке додатне значення більше нуля, тобто b більше a, сортування поставить b перед a
const descendingScoresBA = [...scoresIncome].sort((a, b) => b - a);
console.log(descendingScoresBA); // [92, 74, 61, 56, 35, 19]

// Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів

// ~ Свій порядок сортування рядків
// використовується метод рядків localeCompare()
firstString.localeCompare(secondString);
// викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).
"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0
// Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
// Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
// Якщо рядки однакові, повертається нуль.
const studentsStringsArr = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

const inAlphabetOrder = [...studentsStringsArr].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

const inReversedOrder = [...studentsStringsArr].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

// ~ Сортування об'єктів
const studentsObjForSort = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];
const inAscendingScoreOrder = studentsObjForSort.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
);
const inDescendingScoreOrder = studentsObjForSort.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
);
const inAlphabeticalOrder = studentsObjForSort.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name),
);

// отримати масив імен студентів, відсортованих за зростанням балів за тест
const studentsExample = [
  { name: "Манго", score: 83, courses: ["математика", "фізика"] },
  { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
  { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];

const studentsSortedByScore = [...studentsExample].sort((a, b) => a.score - b.score).map((student) => student.name);
console.log(studentsSortedByScore); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// Отримати масив унікальних відвідуваних предметів, відсортований за алфавітом.
const uniqueSortedCourses = studentsExample
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));
console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']
