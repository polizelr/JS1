//this foi escrito dentro do contexto léxico da função pessoa, isso significa que, independente do código ser chamado de um temporizador, o resultado será o esperado, pois this não varia
function pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}

pessoa()