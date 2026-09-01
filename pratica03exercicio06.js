function calcularJurosCompostos(capital, taxa, tempo) {
    var montante = capital * Math.pow(1 + taxa, tempo);
    var juros = montante - capital;

    document.write("<p>Capital inicial: R$" + capital.toFixed(2) + " Taxa: " + (taxa * 100).toFixed(2) + "% Tempo: " + tempo + " anos</p>");
    document.write("<p>Juros: R$" + juros.toFixed(2) + "</p>");
    document.write("<p>O montante é: R$" + montante.toFixed(2) + "</p>");
}

var capital = parseFloat(prompt("Digite o valor do capital: "));
var taxa = parseFloat(prompt("Digite o valor da taxa de juros (em %): ")) / 100; // para deixar o valor em porcentagem. 
var tempo = parseInt(prompt("Digite o valor do tempo (em anos): "));

calcularJurosCompostos(capital, taxa, tempo);