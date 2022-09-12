function Pessoa(nomeDada, idadeDada) {
    this.nome = nomeDada;
    this.idade = idadeDada;
}

//criando novos métodos para Pessoa
Pessoa.prototype.andar = function() {
    return this.nome + 'andou';
}

const carol = new Pessoa('carol', 28);
console.log(Pessoa.prototype); //retorna o objeto
console.log(carol.prototype); //retorna undefined

carol.nome;
carol.idade;
carol.andar();
carol.nadar();


//CONSTRUTORES NATIVOS
const pais = 'Brasil';
const cidade = new String('Rio'); //nesse caso o construtor é String

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

//ENTENDA O QUE ESTÁ SENDO RETORNADO
//Cada tipo de dado tem métodos e propriedades diferentes

const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
Carro.marca // String - vai ter acesso às prop e métodos DE STRING, não considera o que vem antes do ponto
Carro.preco // Number - número usa o construtor Number, e são essas prop e métodos que temos agora
Carro.acelerar // Function. Só acelerar NÃO ESTÁ EXECUTANDO A FUNÇÃO, então ele retorna A FUNÇÃO.Então carro.acelerar tem os métodos e prop do construtor function.
Carro.acelerar() // Boolean - acelerar() é uma função, mas tá sendo executada, então ela retorna UM VALOR. true é um valor BOLEANO (ali no obj mencionado acima). Se trocar o return pra 'oi', já muda, agora retorna uma STRING. 
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String

//Verifique o nome do construtor com .constructor.name

//EXERCÍCIOS

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

// Crie um método no protótipo que retorne o nome completo da pessoa
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

const carol = new Pessoa('Carol', 'Onga', 28);
console.log(carol); //Pessoa {nome: 'Carol', sobrenome: 'Onga', idade: 28}
console.log(carol.nomeCompleto()); //Carol Onga - não esquecer dos () pra executar a função!!

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
//VAI NO CONSOLE E DIGITA NodeList.prototype ou Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype) //attention! Document com letra maiúscula é a função que constrói o objeto document. Se colocar document.prototype, não existe. Pois prototype é só para funções! Se colocar document.__proto__, aí sai as coisas pq é um objeto criado

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //li.constructor.name = HTMLLIElement 
li.click; //function
li.innerText; //string
li.value; //number
li.hidden; //boolean
li.offsetLeft; //number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
//PEGADINHA!!! Ele retorna "Boolean", mas o constructor é STRING.