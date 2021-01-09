let array1 = [1,2,3,4,5];

// o map percorre o array e pega o item ou a posição dele
let newArray = array1.map(function (item){
    return item * 2;
});
console.log(newArray);


// recebe um valor por parametro e multiplica o array1
function mult(valor){
    let arrayMult = array1.map(function (item){
        return item * valor;
    });
    return console.log(arrayMult);
}

// nesse caso aki, está pegado o item, e o index
function itemIdex(valor){
    let arrayMult2 = array1.map(function (item, index){
        return ((valor * item) - index);
    });
    return console.log(arrayMult2);
}

// o Reduce serve para somar todos os itens de um array
let soma = array1.reduce(function (total, proximo){
    return total + proximo;
});
console.log(soma);

//find encontra um item no array
let encontra = array1.find(function (item){
    return item === 2;
});
console.log(encontra);
