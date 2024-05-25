/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "inputArrayaySortInfo" с одним параметром - "inputinputArrayay"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */


const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 235, 26, 10, 23, 85]


function inputArrayaySortInfo(inputArray) {
	const upinputArray = JSON.stringify(inputArray.toSorted((a, b) => a - b))
	const downinputArray = JSON.stringify(inputArray.toSorted((a, b) => b - a))
	const strinputArray = inputArray.every(Number.isInteger)

	if (upinputArray === JSON.stringify(inputArray)) {
		return 'Массив отсортирован по возрастанию'
	}

	if (downinputArray === JSON.stringify(inputArray) && strinputArray) {
		return 'Массив отсортирован по Убыванию'
	}

	if (!strinputArray) {
		return 'Некоторые элементы не являются числами'
	}

	if (JSON.stringify(inputArray) !== upinputArray && JSON.stringify(inputArray) !== downinputArray) {
		return 'Массив не отсортирован'
	}

}


console.log(inputArrayaySortInfo(a)) // Некоторые элементы не являются числами
console.log(inputArrayaySortInfo(b)) // Массив отсортирован по возрастанию
console.log(inputArrayaySortInfo(c)) // Массив отсортирован по убыванию
console.log(inputArrayaySortInfo(d)) // Массив не отсортирован

/**
 * ПОДСКАЗКИ
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Подсказка 1: Используйте метод массивов "every"
 * Подсказка 2: Вы должны использовать два параметра в колбэк функции "element", "index"
 * Подсказка 3: Каждый элемент массива, кроме первого, следует сравнивать с предыдущим
 */
