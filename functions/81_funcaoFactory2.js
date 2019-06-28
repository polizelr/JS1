function criarProduto (nome, preco){
    return {
        //não é necessário a sintaxe nome: nome, pois possui o mesmo nome 
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 2.199))
console.log(criarProduto("iPad", 1.199))