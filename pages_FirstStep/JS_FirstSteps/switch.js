// switch

document.write("Qual carro desejas? <br/>");
document.write("0 - Mustang / 1 - Dodge Charger<br/>");
document.write("2 - BMW / 3 - Porsche");


function testeswitch() {
    var valor = prompt('Digite o numero do carro desejado: ');

    switch (valor) {
        case "0":
            alert('Você escolheu: Mustang');
            break;
        case "1":
            alert('Você escolheu: Dodge Charger');
            break;
        case "2":
            alert('Você escolheu: BMW');
            break;
        case "3":
            alert('Você escolheu: Porsche');
            break;
        default:
            alert("Item não encontrado");
            break;
    }
}