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
