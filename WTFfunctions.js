function darOi() {
    console.log('Oi para você')
}
//para executar a função:
darOi(); //Oi para você

//com o call, executa assim:
darOi.call(); //Oi para você

//não pode executar a função junto com call: darOi().call() > vai dar undefined

function darOla(nome, idade) {
    console.log('Olá para você ' + nome + idade)
}

darOla(null, 'carol', 28);

//O OBJETO DEVE SER PARECIDO

Dom.prototype.ativo = function(classe) {
    console.log(this);
    this.element.classList.add(classe)
}

const ul = new Dom('ul');

const li = {
    element:document.querySelector('li')
}

ul.ativo.call(li, 'ativo'); //o call substituiu o objeto - mesmo criando o obj do Dom com ul, ele foi substituído com o call, está ativando li. O objeto tem que ser SEMPRE parecido com o obj original do método, então o obj utilizado pelo ativo tem que ser parecido com o novo que vamos passar.

//But chamar dessa forma é esquisito. Primeiro criou um obj com ul, depois tá chamando li dentro de ul. Fica esquisito. Então melhor usar direto a função direto do protótipo.
Dom.prototype.ativo(); 
//o this agora é sempre obj, então nesse caso o objeto é Dom.prototype - tem duas propriedades: ativo e constructor
Dom.prototype.ativo = function(classe) {
    console.log(this);
}
Dom.prototype.ativo(); 

//Se adicionar o this novamente, vai dar erro. Pq o this tá tentando achar dentro do obj a propriedade chamada element, e ela não existe no momento:

Dom.prototype.ativo = function(classe) {
    console.log(this);
    this.element.classList.add(classe)
}
Dom.prototype.ativo(); 

//Então pra que esse ativo funcione, tem que passar com o call pra passar um obj novo, substituir o this atual (Dom.prototype). E o obj novo tem que ter o element para poder funcionar a parte da função.
Dom.prototype.ativo.call(li, 'ativar');

//agora o novo objeto é a li que criamos:
const li = {
    element: document.querySelector('li')
}

//agora a função consegue acessar o this.element e consegue adicionar a classe 'ativar'

//Então é muito comum esse tipo de código: NOME DO CONSTRUTOR (Dom), PROTOTYPE, UM TIPO DE MÉTODO (ativo) E DEPOIS UM CALL OU APPLY OU BIND.

//No final então ficaria:

Dom.prototype.ativo = function(classe) {
    console.log(this);
    this.element.classList.add(classe)
}

const li = {
    element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativar');



//OBJETO ARRAY-LIKE:

const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    length: 3, //tem que ter o length
}

//