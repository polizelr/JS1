//diferenças entre function declaration e function expression:
//quando utiliza-se a function declaration, pode-se invocar a função antes mesmo de declará-la, pois quando define-se usando a function declaration, o interpretador do JS
//primeiro lê todas as funções do arquivo e carrega-as e posteriormente executa o código, ou seja, antes da primeira linha de código o interpretador já possui todas as funções 
//carregadas (que foram definidas utilizando function declaration)
//quando utiliza-se function expression ou named function expression não pode invocar a função antes de declará-la
console.log(soma(3,4))



//function declaration
function soma(x, y){
    return x + y
}

//function expression
const subtracao = function (x, y){
    return x - y
}

//named function expression
//forma pouco usada
//vantagem: na hora do debug, ter uma função nomeada 
const mult = function mult(x, y){
    return x * y
}