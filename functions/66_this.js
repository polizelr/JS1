/*
    This é utilizado para referenciar o objeto atual da execução.

    Exemplo: Em Java, objetos são criados a partir de classes. A classe define quais serão os atributos e métodos do objeto. No entanto, apesar dos objetos 
    respeitarem a estrutura definida pela classe, eles possuem valores independentes uns dos outros.

    Quando está-se em um contexto de execução que pertence a um determinado objeto, uma forma de acessar algum atributo ou método deste objeto é utilizando o this.

    Em JavaScript, no entanto, o this pode variar dependendo de como a função é chamada.

    This é sempre o objeto que está sendo referenciado naquele contexto de execução
*/

function f1() {console.log(this === window)}
f1()

//document representa a página
document.getElementsByTagName('body')[0].onclick = f1

function f2() {console.log(this === document)}

f2()

document.getElementsByTagName('body')[0].onclick = f2

const body = document.getElementsByTagName('body')[0]

function f2() {console.log(this === body)}

document.getElementsByTagName('body')[0].onclick = f2


const f3 = () => console.log(this === window)

f3()

document.getElementsByTagName('body')[0].onclick = f3

/*
    Em JS, quando tem-se uma função "tradicional" (definida utilizando a palavra reservada function) this pode variar de acordo com quem chamou a função
    No entanto, quando utiliza-se arrow function, this não varia nunca. This será definido no momento que a função for escrita
*/