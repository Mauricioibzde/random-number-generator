let amount_01 = document.getElementById("amount-01");
let amount_02 = document.getElementById("amount-02");

const btnRun = document.getElementById("btn-run");

function sanitizeAndValidate(input) {
    // Remove tudo que não é número
    let cleaned = input.value.replace(/\D/g, "");

    // Limita a 3 dígitos
    cleaned = cleaned.slice(0, 3);

    // Converte para número
    let numericValue = parseInt(cleaned, 10);

    // Garante que esteja entre 1 e 100
    if (numericValue < 1 || isNaN(numericValue)) {
        input.value = "";
        return;
    } else if (numericValue > 100) {
        numericValue = 100;
    }

    // Formata com zero à esquerda se for menor que 10
    input.value = numericValue < 10 ? "0" + numericValue : numericValue.toString();
}

// Validação em tempo real enquanto digita
amount_01.addEventListener("input", () => sanitizeAndValidate(amount_01));
amount_02.addEventListener("input", () => sanitizeAndValidate(amount_02));

// Validação ao clicar no botão
btnRun.addEventListener("click", () => {
    sanitizeAndValidate(amount_01);
    sanitizeAndValidate(amount_02);

    console.log("Valor 01:", amount_01.value);
    console.log("Valor 02:", amount_02.value);
});