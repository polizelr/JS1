const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas = []
for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback
//filter filtra os elementos de um array a partir de um determinado critério
//o resultado de notas.filter() será um outro array e o que vai determinar se um elemento pertencerá ou não ao array final é se o resultado da função callback for verdadeiro ou falso
//a função filter não altera o array original
const notasBaixas2 = notas.filter(nota => nota < 7)

console.log(notasBaixas2)