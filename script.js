function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value); //Float = decimal Ex: 1.74
  const altura = parseFloat(document.getElementById("altura").value);

  const imc = (peso / (altura * altura)).toFixed(1); //toFixed() é um método do JavaScript usado para controlar quantas casas decimais um número vai mostrar.

  document.getElementById("p").innerHTML =
    "Seu IMC é " + imc + " - " + classificacao(imc);
}

function classificacao(imc) {
  if (imc < 18.5) return "Magreza";

  if (imc >= 18.5 && imc <= 24.9) return "Normal";

  if (imc >= 25 && imc <= 29.9) return "Sobrepeso I";

  if (imc >= 30 && imc <= 39.9) return "Obesidade nível II";

  if (imc >= 40) return "Obesidade nível III";
}
