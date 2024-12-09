function showInvestmentInfo() {
    const tipoInvestimento = document.getElementById("investimento").value;
    const descriptionDiv = document.getElementById("invDescription");

    if (tipoInvestimento === "selic") {
        descriptionDiv.innerHTML = `
            <p><strong>Selic:</strong> A Selic é a taxa básica de juros da economia brasileira. Ela serve como referência para outras taxas de juros no mercado. 
            Investimentos atrelados à Selic geralmente são de baixo risco, ideais para quem busca liquidez imediata. Prazo: Curto Prazo.</p>
        `;
    } else if (tipoInvestimento === "cdb") {
        descriptionDiv.innerHTML = `
            <p><strong>CDB:</strong> O Certificado de Depósito Bancário é um título de renda fixa emitido pelos bancos. Ele tem um retorno fixo ou pós-fixado, sendo mais rentável que a Selic. Prazo: Médio Prazo.</p>
        `;
    } else if (tipoInvestimento === "tesouroPrefixado") {
        descriptionDiv.innerHTML = `
            <p><strong>Tesouro Prefixado:</strong> O Tesouro Prefixado é um título público emitido pelo governo federal. Ele oferece rentabilidade fixa e é considerado seguro. Prazo: Longo Prazo.</p>
        `;
    }
}

// Função para simular o investimento
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

    // Verificar se todos os campos estão preenchidos corretamente
    if (isNaN(valorInicial) || isNaN(aporteMensal) || isNaN(tempoMeses)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let taxaAnual = 0;
    switch (tipoInvestimento) {
        case "selic":
            taxaAnual = 0.115; // 11.5% ao ano
            break;
        case "tesouroPrefixado":
            taxaAnual = 0.108; // 10.8% ao ano
            break;
        case "cdb":
            taxaAnual = 0.11; // 11% ao ano
            break;
    }

    const taxaMensal = Math.pow(1 + taxaAnual, 1 / 12) - 1;

    let saldo = valorInicial;
    for (let i = 0; i < tempoMeses; i++) {
        saldo += aporteMensal;
        saldo *= 1 + taxaMensal;
    }

    // Exibindo o resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Valor final: R$ ${saldo.toFixed(2)}`;
}
