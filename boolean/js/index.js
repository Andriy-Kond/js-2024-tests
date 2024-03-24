// ^6 хибних(falsy) значень, що приводяться до false у логічному перетворенні: 0, NaN, null, undefined, порожній рядок і false.
// Абсолютно все інше приводиться до true.
console.log(Boolean(-55));
console.log(Boolean(55));
console.log(Boolean("55"));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));

// ^логічне І
// вираз && вираз && вираз - повертає значення першого операнду, який дорівнює false, або останній, якщо усі true
// Виконуючи логічне «І», правий операнд може не обчислюватися у випадку, якщо лівий був приведений до false.

// ^Логічне «АБО»
// вираз || вираз || вираз - повертає значення першого операнду, який дорівнює true, або останній, якщо усі false
// Виконуючи логічне «АБО», правий операнд може не обчислюватися у випадку, якщо лівий був приведений до true.
