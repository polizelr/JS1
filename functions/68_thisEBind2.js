function Pessoa(){
    this.idade = 0
    const self = this
    //setInterval() realiza a chamada de funções em intervalos uniformes de tempo
    //no setInterval, quem dispara a função é o temporizador
    setInterval(function(){
        //this.idade++
        self.idade++
        //console.log(this.idade)
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa