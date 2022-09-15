//EXERCÍCIOS
// Retorne um número aleatório entre 1050 e 2000
const numRandom = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

/*FORMAS ERRADAS QUE EU FIZ:
Math.max(numeros);
Math.max('4, 5, 20, 8, 9'); */

const arrayNumeros = numeros.split(', '); //1 - transformar a array em uma array de números
const numMax = Math.max(...arrayNumeros); //...arrayNumeros é um spread operator

// Crie uma função para limpar os preços e retornar os números com centavos arredondados depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.'); //não é o método mais otimizado, ele fez assim pra aplicar os métodos
    preco = +preco.toFixed(2);
    return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
    soma += limparPreco(preco);
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));