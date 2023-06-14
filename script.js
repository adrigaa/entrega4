function calcularValorLiquido() {
    var valorBruto = prompt("Digite o valor bruto:");

    if (valorBruto !== null && valorBruto !== "") {
        var valor = parseFloat(valorBruto);
        if (!isNaN(valor)) {
            var valorLiquido = calcularValorComImpostos(valor);

            alert("O valor líquido é: " + valorLiquido.toFixed(2));
        } else {
            alert("Digite um valor válido!");
        }
    }
}

function calcularValorComImpostos(valorBruto) {
    var impostoPCC = 0.0465; 
    var valorLiquido = valorBruto * (1 - impostoPCC);
    return valorLiquido;
}