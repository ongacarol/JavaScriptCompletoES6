/*const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector('this.seletor');
    },
    ativo() {
        this.element().classList.add('ativo');
    },
}

Dom.ativo(); //adiciona ativo ao li
Dom.seletor = 'ul';
Dom.ativo(); //adiciona ativo ao ul */

//para não ter que ficar toda hora ativando o objeto, usamos a função construtora. Então ficaria assim:

function Dom(seletor) {
    this.element = function() {
        return document.querySelector(seletor);
    },
    this.ativar = function() {
        this.element().classList.add('ativar');
    },
}

// Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.
const li = new Dom('li');
const ul = new Dom('ul');
const lastLi = new Dom('li:last-child');
lastLi.ativar('ativar'); //lembrar de usar parâmetros

EXERCÍCIOS
// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nomeInformado, idadeInformada) {
    this.nome = nomeInformado;
    this.idade = idadeInformada;
    this.andar = function() {
        console.log(this.nomeInformado + ' andou');
      }
}

// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.element = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
    }
    this.removeClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe);
        })

    }
}

const listaItens = new Dom('li');
const ul = new Dom('ul');

listaItens.addClass('ativar');
ul.addClass('ativar-ul');