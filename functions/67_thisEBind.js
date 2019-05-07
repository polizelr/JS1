const pessoa = {
    saudacao: 'Bom dia!',
    //novo recurso 
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar

//gera problema, pois saudação está apontando para um this diferente que não é mais o objeto pessoa e o objeto que está sendo apontado a partir da chamada da função não tem saudação dentro dele
//falar chamado diretamente de uma função do node está em outro contexto  
falar() //conflito entre OO e  paradigma funcional

//resolução: usar o bind
//bind(obj) - passa-se para a função bind o objeto no qual o this será resolvido
//Bind é o método responsável por amarrar um determinado objeto para ele ser o dono da execução sempre que o método for chamado
//Ou seja, sempre que a função falarDePessoa for chamado, sempre que referenciar o this, ele será o objeto passado para a função bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()