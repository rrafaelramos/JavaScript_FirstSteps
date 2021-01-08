// alert("Inicio dos estudos em JS");

// var years_old = prompt("What's your age?");

// if(years_old > 18){
//     document.write("You have: "+ years_old + " " + "Years old");
// }else{
//     document.write("You are a child!");
// }

// alert (years_old);

// document.write("<img src='http://google.com/google.jpg'>");
// document.write("<img src='https://i.ytimg.com/vi/aS-HO0PmLuE/maxresdefault.jpg'>");

function entrar(){
    var area = document.getElementById('area');
    var name = prompt('What is your name?');

    this.entrar2(area,name);

    area.innerHTML = "Welcome: " + text;
}

function entrar2(area,name){
    var sobrenome = prompt('What is your surname?');
    var idade = prompt('what is your age?');

    area.innerHTML = "Welcome: " + name + " " + sobrenome+" You has: "+ idade + " Years Old" ;
}



function cars() {
    var car = document.getElementById('cars');
    var favorites = prompt('Write your cars: ');

    if (favorites == null || favorites == '') {
        alert('Try again!');
        car.innerHTML = 'Change your car...';
    } else {
        car.innerHTML = "Favorites Cars: <br>" + favorites;
    }
}

function imagem(){
    var imag = document.getElementById('imagem');
    imag.innerHTML = document.write("<img src='http://google.com/google.jpg'>");
}

function fixando(){
    var fixa = document.getElementById('fixando');
    var novo = prompt('Digite sua mensagem');

    fixa.innerHTML = "Esta é a sua mensagem: " + novo;
}


function verifica(){
    var resp = prompt('Deseja realmente voltar?');
    if(resp == 's'){
        return window.location.href='index.html';
    }else{
        alert("Você optou por permanecer!");
    }
}

function testar(){
    var testar = document.getElementById('testar');
    testar.innerHTML = 'O teste deu certo!';
}