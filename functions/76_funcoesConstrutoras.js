//utiliza-se o let/const para atributos e métodos privados e this para atributos e métodos públicos
//função construtora é o molde dos objetos (funciona como uma classe) 
function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo interno
    let velocidadeAtual = 0

    //método público
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

//para instanciar a função, utiliza-se o operador new
//outra sintaxe const uno = new Carro()
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


console.log(typeof Carro) //é função
console.log(typeof ferrari) //é objeto