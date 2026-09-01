var raio = parseInt(prompt("Digite o valor do raio: "));
var volume = (4/3) * Math.PI * Math.pow(raio, 3);
document.write("<p>O volume da esfera é: " + volume.toFixed(2) + "</p>");