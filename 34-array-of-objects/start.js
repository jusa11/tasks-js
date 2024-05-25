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

const cars = [
   {
      carBrand: 'BMW',
      price: 10,
      isAvailableForSale: false
   },

   {
      carBrand: 'Toyota',
      price: 8,
      isAvailableForSale: false
   },

   {
      carBrand: 'Mazda',
      price: 7,
      isAvailableForSale: true
   }
]

cars.push({carBrand: 'Ford', price: 9, isAvailableForSale: true})

console.log(cars)