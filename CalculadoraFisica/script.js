function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("imcResultado");

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        const imc = peso / (altura * altura);
        resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
    } else {
        resultado.textContent = "Por favor, insira valores válidos.";
    }
}

function calcularCalorias() {
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("pesoCalorias").value);
    const altura = parseFloat(document.getElementById("alturaCalorias").value);
    const resultado = document.getElementById("caloriasResultado");

    if (!isNaN(idade) && !isNaN(peso) && !isNaN(altura)) {
        let tmb;
        if (sexo === "masculino") {
            tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
        } else if (sexo === "feminino") {
            tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
        }

        resultado.textContent = `Você precisa de aproximadamente ${tmb.toFixed(2)} calorias por dia.`;
    } else {
        resultado.textContent = "Por favor, insira valores válidos.";
    }
}

document.getElementById("opcao").addEventListener("change", function() {
    const opcao = this.value;
    const imcDiv = document.getElementById("imcDiv");
    const caloriasDiv = document.getElementById("caloriasDiv");

    if (opcao === "imc") {
        imcDiv.style.display = "block";
        caloriasDiv.style.display = "none";
    } else if (opcao === "calorias") {
        imcDiv.style.display = "none";
        caloriasDiv.style.display = "block";
    }
});
