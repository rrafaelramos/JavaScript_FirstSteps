// acao a ser desempenhada
var cont = 0;
function acao(){
    cont++;
    var local = document.getElementById('local');
    local.innerHTML = ("Ação Desempenhada " + cont + " Vezes");
    // document.write("<button onclick='parar()'>Parar Execução</button><br/>");
}

// executa de tempo em tempo
// setInterval(acao, 1000);

//executa uma vez e para
// setTimeout(acao, 3000);

var a = setInterval(acao, 1000);

function parar(){
    clearInterval(a);
}