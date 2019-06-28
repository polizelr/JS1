/* String é uma cadeia de caracteres que no JS pode ser delimitada por "", '' ou `` 
*/

const escola = "Cod3r"

console.log(escola.charAt(4))
//JS retorna um valor vazio
console.log(escola.charAt(5))
//retorna o valor unicode
console.log(escola.charCodeAt(3))
//retorna o índice da primeira occorrencia do caractere encontrado
console.log(escola.indexOf('3'))
//retorna a cadeia do caractere presente no indice 1 até o fim
console.log(escola.substring(1))
//retorna a cadeia do índice 0 até o índice 3, mas não inclui o caractere presente no índice 3
//(a partir do índice zero, me retorne 3 caracteres)
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

//separa uma string em substrings e retorna um array 
console.log('Ana,Maria,Pedro'.split(','))