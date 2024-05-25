/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const srt = 'выпил C2H5OH, покормил поросят'
const num = 27
const boleann = true
const nul = null
const ndfnd = undefined
const obj = {
	name: 'name',
	age: 27
}
const arr = [1, 2, true]

console.log(typeof srt, typeof num, typeof boleann,  typeof nul, typeof ndfnd,typeof obj, typeof arr)