let amount_01 = document.getElementById("amount-01");
let amount_02 = document.getElementById("amount-02");

const btnRun = document.getElementById("btn-run");
const btnRunAgain = document.getElementById("btn-run-sortear-novamente");

function sanitizeAndValidate(input) {
  let cleaned = input.value.replace(/\D/g, "");
  cleaned = cleaned.slice(0, 3);

  let numericValue = parseInt(cleaned, 10);

  if (numericValue < 1 || isNaN(numericValue)) {
    input.value = "";
    return;
  } else if (numericValue > 100) {
    numericValue = 100;
  }

  input.value = numericValue < 10 ? "0" + numericValue : numericValue.toString();
}

amount_01.addEventListener("input", () => sanitizeAndValidate(amount_01));
amount_02.addEventListener("input", () => sanitizeAndValidate(amount_02));

function rodarSorteio() {
  sanitizeAndValidate(amount_01);
  sanitizeAndValidate(amount_02);

  console.log("Valor 01:", amount_01.value);
  console.log("Valor 02:", amount_02.value);

  let sorteio = document.querySelector(".menu-hidden-div");
  let resultado = document.querySelector(".menu-resultado");
  sorteio.classList.add("display-none");
  resultado.classList.remove("display-none");

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  let min = 1;
  let max = 100;

  let randomNumber1 = getRandomNumber(min, max);
  let randomNumber2 = getRandomNumber(min, max);

  console.log(randomNumber1, randomNumber2);

  let resultado_numeros_sorteados = document.querySelector("#numeros-sorteados");

  // Apaga o sorteio anterior antes de inserir o novo
  resultado_numeros_sorteados.innerHTML = "";

  let resultadoNumber = document.createElement("li");
  resultadoNumber.innerHTML = `
    <div class="resultado-item">
      <span class="span-anim"></span>
      <p class="numero-01">${randomNumber1}</p>
    </div>
    <div class="resultado-item">
      <span class="span-anim"></span>
      <p class="numero-02">${randomNumber2}</p>
    </div>
  `;

  resultado_numeros_sorteados.appendChild(resultadoNumber);

  // ✅ Seleciona TODAS as spans e anima todas
  const animations = resultadoNumber.querySelectorAll("span");
  const animationPs = resultadoNumber.querySelectorAll("p");

  animations.forEach(span => {
    span.classList.add("active");
  });

  animationPs.forEach(p => {
    p.classList.add("active");
  });
}

// Mesma função para os dois botões
btnRun.addEventListener("click", rodarSorteio);
btnRunAgain.addEventListener("click", rodarSorteio);
