// Делегування
// - одне з багатьох
// - декілька з багатьох через Set

// * One of Many
const tags = document.querySelector(".js-tags");
tags.addEventListener("click", onSelectOneTag);

let selectedTag = null;

function onSelectOneTag(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  // Option 1
  const previousEl = document.querySelector(".tags__btn--active");

  if (previousEl) {
    previousEl.classList.remove("tags__btn--active");
  }

  e.target.classList.add("tags__btn--active");
  selectedTag = e.target.dataset.value;
  console.log("onSelectOneTag >> selectedTag:::", selectedTag);

  // // Option 2
  // const currentEl = e.target;
  // const previousEl = document.querySelector(".tags__btn--active");

  // if (currentEl.classList.contains("tags__btn--active")) {
  //   currentEl.classList.remove("tags__btn--active");
  // } else {
  //   previousEl?.classList.remove("tags__btn--active");
  //   currentEl.classList.add("tags__btn--active");
  // }
  // selectedTag = e.target.dataset.value;
  // console.log("onSelectOneTag >> selectedTag:::", selectedTag);
}

// * Many of Many
// const tags = document.querySelector(".js-tags");

// const tagsArr = new Set();

// tags.addEventListener("click", onSelectManyTags);

// function onSelectManyTags(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const isActive = e.target.classList.contains("tags__btn--active");
//   const tag = e.target.dataset.value;

//   if (isActive) {
//     tagsArr.delete(tag);
//   } else {
//     tagsArr.add(tag);
//   }

//   e.target.classList.toggle("tags__btn--active");
//   console.log("tagsArr:::", tagsArr);
// }
