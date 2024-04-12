// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).
console.log(document);

const body = document.body;
console.log("body:::", body);

const list = document.querySelector(".list");
console.log("list:::", list);

const firstListItem = list.firstElementChild;
console.log("firstListItem:::", firstListItem);

const lastListItem = list.lastElementChild;
console.log("lastListItem:::", lastListItem);

const listItems = list.children;
console.log("listItems:::", listItems);

// * Стилі
const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log("button.style", button.style); // inline styles object

// * Атрибути
const image = document.querySelector(".image");
console.log('image.hasAttribute("src"):::', image.hasAttribute("src")); // true
console.log('image.getAttribute("alt"):::', image.getAttribute("alt")); // "Rocks and waterfall"
image.setAttribute("alt", "Amazing nature");
// або:
// image.alt = "Amazing nature";
console.log('image.getAttribute("alt"):::', image.getAttribute("alt")); // Amazing nature
image.width = 640;
console.log("image.attributes:::", image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, 3: width, class: class, src: src, alt: alt, width: width, length: 4}

// * data-атрибути
const saveBtn = document.querySelector('.editor button[data-action="save"]');
console.log("saveBtn.dataset.action:::", saveBtn.dataset.action); //save
