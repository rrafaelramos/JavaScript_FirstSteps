// Spread serve para juntar os itens de dois arrays
let list1 = [1,2,3];
let list2 = [4,5,6];

//junta as duas listas na let listat
let list = [...list1,...list2];

console.log(list);

let person = {
    name: "rafael",
    year_old: "23",
}

let newPerson = {
    ...person,
    cargo: "Developer",
    hobbie: "study",
}

console.log(newPerson);

function novaPessoa(pessoa){
    let ocupacao = {
        ...pessoa,
        cargo: 'desenvolvedor',
        empresa: 'propria',
        salario: 3000,
    }
    return console.log(ocupacao);
}




//---------------------------------Operador REST---------------------------------------------
// é bem parecido com o Spread, os '...' sinalizam para aceitar todos os nomes que foram passados e não somente o 1°
function restop(...nomes){
    console.log(nomes);
}

function newUsers(users,...nusers){
    let usert = [
        ...users,
        ...nusers,
    ];
    return console.log(usert);
}
let users = ["matheus", "joao"];
let novos = newUsers(users,"jose", "henrique");
