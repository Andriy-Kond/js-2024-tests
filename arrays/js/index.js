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
console.log("countLikes(tweets)", countLikes(tweets)); // 32

// зберемо в масив усі теги, які зустрічаються в постах.
const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);
console.log("tags:::", tags);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log("tagCount:::", tagCount);
