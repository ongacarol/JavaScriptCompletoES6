//EXERCÍCIOS
// Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

//solução
let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', ''); // O + na frente de uma string que é só número converte ela em número.
    if(item.descricao.slice(0, 4) === 'Taxa') { //o risco de usar includes é pq se tiver tipo "recebimento de taxa" ele vai ser enquadrado errado.
    taxaTotal += numeroLimpo;
    } else {
        recebimentoTotal += numeroLimpo;
    }
})

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

transportes.split(';');

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a'); //1- pegar a string e dividir em array 2- como ja virou uma array, posso aplicar já o método da array JOIN. POde fazer um encadeamento infinito, tem que saber o que retorna e vai usando as prop em cima

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
frase.charAt(frase.length - 1); 
//ou
frase[frase.length - 1];
//ou
frase.slice(-1);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

//tá tudo bagunçado, tem espaços random e letras de vários tamanho

let taxasTotal = 0;
transacoes2.forEach((item) => {
    item = item.toLowerCase();
    item = item.trim(); //lembrando que pode fazer encadeando tudo em uma linha só
    item = item.slice(0,4);

    if(item === 'taxa') 
    taxasTotal++ //
})


