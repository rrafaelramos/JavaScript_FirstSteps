// o Let serve para criar uma variável que é acessada somente dentro da propria função
var list = [1,2,3];
for(let i in list){
    console.log(list[i]);
}
// console.log(i);

// const é uma constante, nunca varia
const  a = "Rafael";

const pessoa = {
    nome: "Rafael",
    sobrenome: "Ramos",
    idade: 50,
    cargo: "Desenvolvedor"
};
console.log(pessoa);

// cria a variável nome que recebe oque está dentro da constante pessoa
let {nome} = pessoa;
console.log(nome);

let{cargo, idade} = pessoa;
console.log("ele tem " + idade +" anos e é: " + cargo);

let lista = ['Rafael', 'Ramos', 50];

//pega o valor de acordo com a posição dentro do array
let{0:name, 1:sobrenome} = lista;
console.log(sobrenome);

//pega os valores de acordo com a posição dos itens
let [item1, item2, item3] = lista;
console.log(item1+item2);
