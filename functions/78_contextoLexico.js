const valor = 'Global'


//o contexto léxico que essa função foi declarada foi dentro deste módulo(arquivo) do node 'contextoLexico.js'
function minhaFuncao(){
    //como dentro da função não se tem a constante 'valor', ele procura em um contexto maior
    console.log(valor)
}


function exec(){
    const valor = 'Local'
    minhaFuncao()
}

//por conta do contexto léxico (contexto do qual a função foi escrita), será impresso o valor 'global', pois quando uma função é definida, ela carrega consigo a informação do contexto no qual
//ela foi definida
exec()