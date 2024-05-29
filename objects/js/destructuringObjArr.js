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

// & Зміна імені змінної
const firstBook = {
  title: "The Last Kingdom",
  coverImage: "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};
const { title: firstTitle, coverImage: firstCoverImage = "https://via.placeholder.com/640/480" } = firstBook;
console.log(firstTitle); // The Last Kingdom
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// ~ Деструктуризація в циклах
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
  // for (const { title, author, rating } of book) {... }

  console.log(title);
  console.log(author);
  console.log(rating);
}

// ~ Глибока деструктуризація
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

// ^ Деструктуризація масивів
const rgb = [200, 100, 255];
const [red, green, blue, alfa = 0.3] = rgb;
console.log(`R:${red}, G:${green}, B:${blue}, Alfa:${alfa}`); // "R:200, G:100, B:255, Alfa:0.3"

const [red2, ...colors] = rgb;
console.log(red2); // "200"
console.log(colors); // [255, 100]

const [, , blue2] = rgb;
console.log(`Blue: ${blue2}`); // "Blue: 255"

// ^ Патерн «Об'єкт параметрів»
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
