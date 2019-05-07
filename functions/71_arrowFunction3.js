let comparaComThis = function (param){
    console.log(param === this)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) //this não será === global, pois a função foi definida dentro de um módulo do node
comparaComThisArrow(global)


/* This dentro de uma função tradicional em JS varia conforme a chamada, aponta para o objeto global (tanto no browser: window, quanto no node: global)
   This em uma função arrow, aponta para o objeto corrente, ou seja, o arquivo no qual a função foi definida
*/
comparaComThisArrow(module.exports)

//This com arrow function NÃO varia mesmo quando utiliza-se bind
comparaComThisArrow = comparaComThisArrow.bind(obj)

comparaComThisArrow(obj)