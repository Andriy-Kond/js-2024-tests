const refs = {
  openModalBtn: document.querySelector("[data-open-modal]"),
  closeModalBtn: document.querySelector("[data-close-modal]"),
  backdrop: document.querySelector("[data-backdrop]"),
  body: document.querySelector("body"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onCloseModalByBackdrop);

function onOpenModal() {
  refs.body.classList.add("show-modal");
  window.addEventListener("keydown", onCloseModalByEsc);
}

function onCloseModal() {
  refs.body.classList.remove("show-modal");
  window.removeEventListener("keydown", onCloseModalByEsc);
}

function onCloseModalByBackdrop(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

function onCloseModalByEsc(e) {
  if (e.key === "Escape") {
    onCloseModal();
  }
}
