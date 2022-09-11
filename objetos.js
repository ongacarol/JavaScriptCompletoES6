//CONSTRUCTOR FUNCTIONS
//Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
  }

//NEW KEYWORD
//A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

const honda = new Carro();

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}
  
//PARÂMETROS E ARGUMENTOS
//Podemos passar argumentos que serão utilizados no momento da criação do objeto.

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 4000);
const fiat = new Carro('Fiat', 3000);

//THIS KEYWORD
//O this faz referência ao próprio objeto construído com a Constructor Function.

function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda = new Carro('Honda', 2000);

//Variáveis dentro da Constructor estão "protegidas".