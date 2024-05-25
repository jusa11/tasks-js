/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

// исходные
/* function isArrayEmpty(inputArray) {
	if (inputArray.length > 0) {
		return 'Массив не пустой'
	} else {
		return 'Массив пустой'
	}
} */

// 1 пункт 
/* function isArrayEmpty(inputArray) {
	if (inputArray.length > 0) {
		return 'Массив не пустой'
	}
	return 'Массив пустой'
} */

// 2 пункт
/* function isArrayEmpty(inputArray) {
	return inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'
} */

// 3 пункт
const isArrayEmpty = inputArray => inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'

console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))


