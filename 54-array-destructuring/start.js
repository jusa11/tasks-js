/** ЗАДАЧА 54 - Деструктуризация массива
 *
 * Измените раздел параметров в функции "processQuantities" так,
 * чтобы совпали выводы в консоли
 *
 * Используйте деструктуризацию массива
 */


// у него немного по другому, но у меня тоже работает
const processQuantities = (arr) => {
  let [minQty, maxQty, defaultQty = 0] = [...arr]

  console.log(minQty) // 8
  console.log(maxQty) // 29
  console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
  return defaultQty + maxQty - minQty
}

const inputQuantities1 = [8, 29, 10]
console.log(processQuantities(inputQuantities1)) // 31

const inputQuantities2 = [8, 29]
console.log(processQuantities(inputQuantities2)) // 21
