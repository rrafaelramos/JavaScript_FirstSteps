// local storage: Os dados ficam salvos no navegador do usuário.

// os dados são guardados no identificador: name
localStorage.setItem("name", "Rafael");

// pega o nome nos cookies
localStorage.getItem("name");

// guardando em uma variável
a = localStorage.getItem("name");
// console.log(a);

//removendo item
localStorage.removeItem("name");
// console.log(a);

var nome = '';

nome = prompt('Qual seu nome?');

localStorage.teste = nome;

document.getElementById('escreva').innerHTML = nome;
// nome = prompt('What is your name?');


// o sessio storage funciona da mesma forma
sessionStorage.nome = "Rafael Ramos";

document.write(sessionStorage.nome);

