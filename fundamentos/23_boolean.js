let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//no if não necessita colocar !! 
isAtivo = 1
console.log(!!isAtivo)

console.log("Os verdadeiros...")
//todos os números inteiros são verdadeiros com exceção do zero
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
//atribuição
console.log(!!(isAtivo=true))

console.log("Os falsos...")
console.log(!!0)
//string vazia
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
//atribuicao
console.log(!!(isAtivo=false))

console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
