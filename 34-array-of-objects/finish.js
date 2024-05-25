/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const car1 = {
	carBrand: 'Mersedes',
	price: 10000000,
	isAvailableForSale: false
}

const car2 = {
	carBrand: 'BMW',
	price: 9000000,
	isAvailableForSale: true
}

const car3 = {
	carBrand: 'Lada',
	price: 900000,
	isAvailableForSale: true
}

const car4 = {
	carBrand: 'Toyota',
	price: 1050000,
	isAvailableForSale: false
}

const cars = [car1, car2, car3]

// console.log(cars)

cars.push(car4)

console.log(cars[3].carBrand)

