const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

const text = document.querySelector(".text");
text.remove();

// Властивість innerHTML
const article2 = document.querySelector(".article2");
console.log("article.innerHTML:::", article2.innerHTML);

const title2 = document.querySelector(".article2 .title2");
console.log("title.innerHTML:::", title2.innerHTML);

const text2 = document.querySelector(".article2 .text2");
console.log("text.innerHTML:::", text2.innerHTML);

const link2 = document.querySelector(".article2 .link2");
console.log("link.innerHTML:::", link2.innerHTML);

title2.innerHTML = 'New and <span class="accent">improved</span> title';

// Шаблонна розмітка
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const listTemplate = document.querySelector(".listTemplate");

const markup = technologies.map(technology => `<li class="listTemplate-item">${technology}</li>`).join("");

// Check the console, you'll see a single string with HTML tags
console.log("markup:::", markup);

// Adding all the markup in one operation
listTemplate.innerHTML = markup;

// Метод insertAdjacentHTML()
const list3 = document.querySelector(".list3");
const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup3 = newTechnologies.map(technology => `<li class="list3-item new">${technology}</li>`).join("");

list3.insertAdjacentHTML("beforeend", markup3);
list3.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
