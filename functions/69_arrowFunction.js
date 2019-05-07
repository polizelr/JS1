let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//caso haja apenas um parâmetro, pode-se remover os parênteses
dobro = a  => {
    return 2 * a
}

//caso a função possua apenas uma linha, o retorno é implícito
dobro = a => 2 * a 

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

//caso a função receba nenhum parâmetro, manter os parênteses  
ola = () => 'Olá'

//sintaxe alternativa, no entanto, a função possui parâmetro, que pode ser ignorado 
ola = _ => 'Olá'

console.log(ola())