/* Number é uma função 
   number é um tipo
*/

const peso1 = 1.0

//outra forma de criar um number
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)

//toFixed(num) não altera o valor de média
console.log(media.toFixed(2))

//converter para string
console.log(media.toString())

//converter para binario
console.log(media.toString(2))

console.log(typeof media)
console.log(typeof Number)
