function simularInvestimento() {
    // Pegando os valores dos inputs
    const tipoInvestimento = document.getElementById("investimento").value;
    const valorInicial = parseFloat(
        document.getElementById("valorInicial").value
    );
    const aporteMensal = parseFloat(
        document.getElementById("aporteMensal").value
    );
    const tempoMeses = parseInt(document.getElementById("tempoMeses").value);

    // Verificar se todos os campos estão preenchidos
    if (isNaN(valorInicial) || isNaN(aporteMensal) || isNaN(tempoMeses)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let taxaAnual = 0;
    switch (tipoInvestimento) {
        case "selic":
            taxaAnual = 0.115;
            break;
        case "tesouroPrefixado":
            taxaAnual = 0.108;
            break;
        case "cdb":
            taxaAnual = 0.11;
            break;
    }

    const taxaMensal = Math.pow(1 + taxaAnual, 1 / 12) - 1;

    let saldo = valorInicial;
    for (let i = 0; i < tempoMeses; i++) {
        saldo += aporteMensal;
        saldo *= 1 + taxaMensal;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Valor final: R$ ${saldo.toFixed(2)}`;
}
