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

    let sorteio = document.querySelector(".menu-hidden-div")
    let resultado = document.querySelector(".menu-resultado")
    sorteio.classList.add("display-none")
    console.log(sorteio)
    resultado.classList.remove("display-none")

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let min = 1;
let max = 100;

let randomNumber1 = getRandomNumber(min, max);
let randomNumber2 = getRandomNumber(min, max);

console.log(randomNumber1 , randomNumber2);
console.log(Math.floor(Math.random() * 100) + 1);


let resultado_numeros_sorteados = document.querySelector("#numeros-sorteados")

let resultadoNumber = document.createElement("ul")

resultadoNumber.innerHTML = `
  <li><span class="numero-01">${randomNumber1}</span></li>
  <li><span class="numero-02">${randomNumber2}</span></li>




`
resultado_numeros_sorteados.appendChild(resultadoNumber)














    
});

  
