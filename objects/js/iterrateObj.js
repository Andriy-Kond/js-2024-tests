// ^Перебирання об'єкта
// ~Цикл for...in (архаїчний)
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
