// *Подія focus і blur
const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});

// Фокус може бути тільки на одному елементі сторінки за одиницю часу
// Елемент, на якому знаходиться фокус, доступний як document.activeElement.

// Багато елементів не можуть отримати фокус. Наприклад, якщо клікнути по <div>, то фокусування на ньому не відбудеться, тому що це не інтерактивний елемент.

// * Подія input
// Спливає на кожне натискання клавіш
const textInput2 = document.querySelector(".text-input-2");
const output = document.querySelector(".output");

textInput2.addEventListener("input", event => {
  output.textContent = event.currentTarget.value;
});

// * Подія change
// Використовується для чек-боксів і радіо-баттонів
// Спливає при зміні стану (checkbox чи radio-btn), або втраті фокусу input (безсенсове використання)

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText = event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}
