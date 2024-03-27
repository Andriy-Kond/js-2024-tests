const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  hobbies: ["swiming", "music", "sci-fi"],
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  book: {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  },
};

// Звернення до властивостей через крапку:
console.log(user.location.country); // 'Jamaica'

// Звернення до властивостей через квадратні дужки:
console.log(user.book["title"]); // 'The Last Kingdom'
console.log(user.book["genres"]); // ['historical prose', 'adventurs']
const propKey = "author";
console.log(user.book[propKey]); // 'Bernard Cornwell'

// Звернення до масиву в об'єкті:
console.log(user.hobbies); // ['swiming', 'music', 'sci-fi']
console.log(user.hobbies[0]); // 'swiming'
console.log(user.hobbies.length); // 3

// Зміна значення властивості
user.book.rating = 9;
user.book.genres.push("драма");
// Додавання властивості
user.book.translations = ["ua", "ru"];

// Обчислювальні властивості
const propName = "name";
user[propName] = "Генрі Сибола";
console.log("user.name", user.name); // 'Генрі Сибола'

const user2 = {
  age: 25,
  // Ім'я цієї властивості буде взяте зі значення змінної propName
  [propName]: "Генрі Сибола",
};
console.log("user2.name", user2.name); // 'Генрі Сибола'

// ^Перебирання об'єкта
// Цикл for...in (архаїчний)
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
for (const key in book) {
  // Ключ
  console.log("key:::", key);
  // Значення властивості з таким ключем
  console.log("book[key]:::", book[key]);
}

// ~Метод hasOwnProperty()
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log("dog:::", dog); // {name: 'Манго'}
console.log("dog.name:::", dog.name); // 'Манго'
console.log("dog.legs:::", dog.legs); // 4
// Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal.
// legs - це не властивість об'єкта dog, а перебирати треба лише власні властивості. Тому треба використовувати метод hasOwnProperty()
for (const key in book) {
  // Якщо це власна властивість - виконуємо тіло if
  if (book.hasOwnProperty(key)) {
    console.log("key:::", key);
    console.log("book[key]:::", book[key]);
  }
  // Якщо це невласна властивість - нічого не робимо
}

// *Нові методи - Метод Object.keys(), Метод Object.values()
console.log("Object.keys(book) :>> ", Object.keys(book)); // ['title', 'author', 'genres', 'rating']
console.log("Object.values(book) :>> ", Object.values(book)); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
const keys = Object.keys(book);
for (const key of keys) {
  // Ключ
  console.log(key);
  // Значення властивості
  console.log(book[key]);
}

// Метод Object.entries()
console.log("Object.entries(book) :>> ", Object.entries(book)); // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// ^spred та rest
const temps = [14, -4, 25, 8, 11];
console.log("temps:::", temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
console.log("Math.max(temps)", Math.max(temps)); // NaN
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
console.log("Math.max(...temps)", Math.max(...temps)); // 25

// spread: Створення нового масиву
const copyOfTemps = [...temps];

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps]; // замість concat

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

// ^ Деструктуризація об'єктів
const book30 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const { title, author, isPublic, rating, coverImage = "https://via.placeholder.com/640/480" } = book30; // coverImage - значення за замовчуванням
console.log(coverImage); // https://via.placeholder.com/640/480

const accessType = isPublic ? "публічному" : "закритому";
const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

// Зміна імені змінної
const firstBook = {
  title: "The Last Kingdom",
  coverImage: "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};
const { title: firstTitle, coverImage: firstCoverImage = "https://via.placeholder.com/640/480" } = firstBook;
console.log(firstTitle); // The Last Kingdom
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// ~Деструктуризація в циклах
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
];

for (const book of books) {
  const { title, author, rating } = book;
  // або:
  // for (const { title, author, rating } of books) {... }

  console.log(title);
  console.log(author);
  console.log(rating);
}

// ~Глибока деструктуризація
const user30 = {
  userName: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  userName,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user30;

console.log(userName); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308

// ^Деструктуризація масивів
const rgb = [200, 100, 255];
const [red, green, blue, alfa = 0.3] = rgb;
console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

const [red2, ...colors] = rgb;
console.log(red2); // "200"
console.log(colors); // [255, 100]

const [, , blue2] = rgb;
console.log(`Blue: ${blue2}`); // "Blue: 255"

// ^Патерн «Об'єкт параметрів»
function doStuffWithBook({ title, numberOfPages, downloads, rating, isPublic }) {
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// ✅ Все зрозуміло
doStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});
