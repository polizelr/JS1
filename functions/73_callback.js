const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){

}

//ideia do callback: passar uma função para outra função e essa função será invocada, quando determinado evento acontecer
//para cada elemento dentro do array, a função imprimir será invocada
fabricantes.forEach(imprimir)

fabricantes.forEach(fabricante => console.log(fabricante))