document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.getElementById("calcularBtn");

    calcularBtn.addEventListener("click", function () {
        const valor = parseFloat(document.getElementById("valor").value);
        const parcelas = parseInt(document.getElementById("parcelas").value);
        let taxaJuros = 0;

        switch (parcelas) {
            case 1:
                taxaJuros = 1.0; // 100%
                break;
            case 2:
                taxaJuros = 1.06180; // 106.180%
                break;
            case 3:
                taxaJuros = 1.1220; // 112.20%
                break;
            case 4:
                taxaJuros = 1.18444; // 118,444%
                break;
            case 5:
                taxaJuros = 1.23916; // 123.916%
                break;
            case 6:
                taxaJuros = 1.31583; // 131.583%
                break;
            case 7:
                taxaJuros = 1.38513; // 138.513%
                break;
            case 8:
                taxaJuros = 1.44563; // 144.563%
                break;
            case 9:
                taxaJuros = 1.51089; // 151.089%
                break;
            case 10:
                taxaJuros = 1.58132; // 158.132%
                break;
            default:
                taxaJuros = 1; // Sem juros para outras parcelas
        }

        const valorTotal = valor * taxaJuros;
        const valorParcela = valorTotal / parcelas;

        document.getElementById("resultado").innerHTML = `O valor total com juros será R$ ${valorTotal.toFixed(2)} e cada parcela será de R$ ${valorParcela.toFixed(2)}.`;
    });
});
