// ^6 хибних(falsy) значень, що приводяться до false у логічному перетворенні: 0, NaN, null, undefined, порожній рядок і false.
// Абсолютно все інше приводиться до true.
console.log("Boolean(-55):", Boolean(-55));
console.log("Boolean(55):", Boolean(55));
console.log("Boolean('0'):", Boolean("0"));
console.log("Boolean('false'):", Boolean("false"));
console.log("Boolean('55'):", Boolean("55"));
console.log("Boolean(true):", Boolean(true));

console.log("Boolean(false):", Boolean(false));
console.log("Boolean(undefined):", Boolean(undefined));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(NaN):", Boolean(NaN));
console.log("Boolean(''):", Boolean(""));

// ^логічне І
// вираз && вираз && вираз - повертає значення першого операнду, який дорівнює false, або значення останнього, якщо усі true
// Виконуючи логічне «І», правий операнд може не обчислюватися у випадку, якщо лівий був приведений до false.
console.log("5 && 6 && 555 && true && 'hello':", 5 && 6 && 555 && true && "hello"); // hello
console.log("5 && 6 && 555 > 666 && true && 'hello':", 5 && 6 && 555 > 666 && true && "hello"); // false
console.log("5 && 6 && 0 && true && 'hello':", 5 && 6 && 0 && true && "hello"); // 0
console.log("5 && 6 && '' && true && 'hello':", 5 && 6 && "" && true && "hello"); // ""
console.log("5 && 6 && NaN && true && 'hello':", 5 && 6 && NaN && true && "hello"); //NaN

// ^Логічне «АБО»
// вираз || вираз || вираз - повертає значення першого операнду, який дорівнює true, або значення останнього, якщо усі false
// Виконуючи логічне «АБО», правий операнд може не обчислюватися у випадку, якщо лівий був приведений до true.
console.log("5 > 6 || 6 || 555 || true || 'hello':", 5 > 6 || 6 || 555 || true || "hello"); // 6
console.log(
  "5 > 6 || 6 < 0 || 555 === 666 || 0 || 'hello' === 'hell':",
  5 > 6 || 6 < 0 || 555 === 666 || 0 || "hello" === "hell",
); // false (значення взяте з "hello" === "hell")
console.log("NaN || false || -568 || 54:", NaN || false || -568 || 54); // - 568
console.log("NaN || false || 0 || undefined:", NaN || false || 0 || undefined); // undefined
console.log("NaN || false || 0 || null:", NaN || false || 0 || null); // null
