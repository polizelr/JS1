//classe é uma forma diferente de se construir funções em JS
//A classe possui atributos e métodos e a partir dela, instancia-se objetos
//Em JS utiliza-se essa estrutura como sendo uma função
class Pessoa{
    constructor(nome){
        this.nome=nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Rafaela")
p1.falar()

const criarPessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Renato')
p2.falar()