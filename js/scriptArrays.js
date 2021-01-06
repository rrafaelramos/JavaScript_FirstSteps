
//Criando o Array
var list = ["Mustang", "Dodge", "Porsche", "Ferrari"];
//printando no console
console.log(list);

// retorna a posição do item dentro do array
var index = list.indexOf('Dodge');
console.log(index);

var juntar = list.join(", ");
console.log(juntar);

//remove o ultimo elemento do array
list.pop();
console.log(list);

//remove o primeiro elemento do array
list.shift();
console.log(list);

//pega a posição do item ("Dodge") na lista e altera
list[list.indexOf("Dodge")] = "Dodge Charger 1969";
console.log(list);

//adiciona algo na lista
list.push("Mustang");
console.log(list);

//se não houver o item na lista a função indexOf retorna -1
if(list.indexOf("Ferrari") > -1){
    console.log("Possui Ferrari")
}else {
    list.push("Ferrari");
    console.log("Ferrari adicionada");
}