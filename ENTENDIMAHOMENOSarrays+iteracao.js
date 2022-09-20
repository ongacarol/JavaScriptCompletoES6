const carros = ['honda', 'mazda', 'lexus']

/*carros.forEach((item, index, array) => {
    array[index] = 'Teste';
    console.log(item, index, array);
})*/

console.log(carros);

carros.forEach((item, index, array) => {
    console.log(item.toUpperCase(), index, array);
}) /*HONDA 0 (3) ['honda', 'mazda', 'lexus']
VM36:4 MAZDA 1 (3) ['honda', 'mazda', 'lexus']
VM36:4 LEXUS 2 (3) ['honda', 'mazda', 'lexus']*/


//USANDO O MAP
const carros = ['honda', 'mazda', 'lexus']

carros.map((item, index, array) => {
  console.log(item.toUpperCase(), index, array);
}); /*HONDA 0 (3) ['honda', 'mazda', 'lexus']
VM36:4 MAZDA 1 (3) ['honda', 'mazda', 'lexus']
VM36:4 LEXUS 2 (3) ['honda', 'mazda', 'lexus']*/
//continua a mesma coisa; BUT SE COLOCAR O CARROS.MAP DENTRO DE UMA VARIÁVEL?

const novaArray = carros.map((item, index, array) => {
  console.log(item.toUpperCase(), index, array); 
});
console.log(novaArray);//undefined, undefined, undefined, PQ NÃO COLOCOU UM RETURN DENTRO DA FUNÇÃO

const novaArray = carros.map((item, index, array) => {
  //console.log(item.toUpperCase(), index, array); 
  return item.toUpperCase(); //AGORA TEM O RETURN - com o MAP, retornamos os valores da array modificados
});
console.log(novaArray);
//['HONDA', 'MAZDA', 'LEXUS']




const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));

li.forEach(function(item) {
  item.classList.add('ativa');
});


const li = document.querySelectorAll('li');
//se botar o forEach dentro de uma variável (ou seja, uma função, método sendo executada, o que vai ficar dentro da variavel é o retorno deste método.)
const retornoForeach = li.forEach((item, index) => {
  item.classList.add('ativa' + index)
});
console.log(retornoForeach) //undefined


//SEPARADINHO:
//tem uma função
function nomeAulas(aula) {
  return aula.nome;
}
//passando a função dentro da const
const arrayNomeAulas = aulas.map(nomeAulas);

//é igual a TUDO JUNTO:
const arrayNomeAulas = aulas.map(function(aula) {
  return aula.nome;
});

//sobre o uso da arrow function:
const nomeAulas = function(aula) {
  return aula.nome;
}
//é igual a:
const nomeAulas = aula => aula.nome;


const numeros = [10, 25, 60, 5, 35, 10];
const maiorNumero = numeros.reduce((anterior, atual) => {
  if(anterior > atual)
      return anterior 
  else
      return atual //na próxima iteração, esse retorno ovai se tornar o número anterior
})

console.log(maiorNumero);

const numeros = [10, 25, 60, 5, 35, 10];
const maiorNumero = numeros.reduce((10, 25) => {
  if(anterior > atual)
      return anterior 
  else
      return atual //na próxima iteração, esse retorno ovai se tornar o número anterior
})

console.log(maiorNumero);

//filter

const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayLimpa = frutas.filter((item) => {
  console.log(item);
})
console.log(arrayLimpa); //[] - RETORNA UMA ARRAY VAZIA. PQ? PQ NÃO TEM NENHUM RETURN!! LEMBRE: QDO A FUNÇÃO NÃO TEM RETURN, ELA DÁ UNDEFINED.

const arrayLimpa = frutas.filter((item) => {
  return item;
})
console.log(arrayLimpa); //['Banana', 'Uva', 'Maçã']



//EXERCÍCIOS
<section class="curso">
  <h1>Web Design Completo</h1>
  <p>Este curso é para quem deseja entrar ou já está no mercado de criação de websites.</p>
  <span class="aulas">80</span>
  <span class="horas">22</span>
</section>
<section class="curso">
  <h1>WordPress Como CMS</h1>
  <p>No curso de WordPress Como CMS, você aprende do zero como pegar qualquer site em HTML e torná-lo totalmente gerenciável com a plataforma do WordPress.</p>
  <span class="aulas">46</span>
  <span class="horas">9</span>
</section>
<section class="curso">
  <h1>UI Design Avançado</h1>
  <p>Este é um curso avançado de User Interface Design.</p>
  <span class="aulas">55</span>
  <span class="horas">15</span>
</section>

// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso'); //NodeList(3) [section.curso, section.curso, section.curso]
const arrayCursos = Array.from(cursos); //transformar numa array: [section.curso, section.curso, section.curso]

const objetosCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})

console.log(arrayCursos); //tá intacta - [section.curso, section.curso, section.curso]
console.log(objetosCursos); //[{…}, {…}, {…}] com os itens dentro

// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQueCem = numeros.filter(n => n>100);
console.log(maiorQueCem);


// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

instrumentos.some(item => item === 'Baixo');



// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

/* FIZ TUDO ERRADOOOOOOO 
let total = 0;

compras.forEach((item) => {
  const numeroLimpo = +item.preco.replace('R$ ', '');
  console.log(numeroLimpo);
});

total = numeroLimpo.reduce((acumulador, atual) => {
  return acumulador + atual;
})*/

//SOLUÇÃO:
const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
  return acumulador + precoLimpo;
}, 0); //ESSE ZERO AQUI QUE É PRA CONSIDERAR O PRIMEIRO ITEM NA SOMA TAMBÉM

console.log(valorTotal);