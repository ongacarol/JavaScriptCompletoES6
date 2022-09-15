//EXERCÍCIOS

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiro = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
const ultimo = comidas.pop();
// Adicione 'Arroz' ao final da array
const arroz = comidas.push('Arroz');
// Adicione 'Peixe' e 'Batata' ao início da array
const peixe = comidas.unshift('Peixe', 'Batata');



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
// Inverta a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));



let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li, utilizando split e join
html = html.split('section');
html = html.join('ul');
html - html.split('div');
html = html.join('li');
console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover salve a array original em outra variável
const carrosCopia = carros.slice();
carros.pop();

console.log(carros);
console.log(carrosCopia);  