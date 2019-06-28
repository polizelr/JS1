let nome = 'Rebeca'
let concatenacao = 'Olá ' + nome + '!'
console.log(concatenacao)

//template string
nome = 'Renato'
concatenacao = `Olá ${nome}!`
console.log(concatenacao)

// nome = 'Rafael'
// concatenacao = 
// console.log(`Olá {0}!`, nome)

//expressões
console.log(`1 + 1 = ${1 + 1}`)

//funções
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)