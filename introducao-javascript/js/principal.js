var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdIMC = paciente.querySelector(".info-imc");

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;
    }

    if (altura <= 0 || altura > 3) {
        console.log("Altura inválido!");
        tdAltura.textContent = "Altura inválido!";
        alturaEhValido = false;
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura); // 100 / (2 * 2) ---> 100 / 4 ---> 25
        tdIMC.textContent = imc.toFixed(2);
    } else {
        tdIMC.textContent = "Altura e/ou peso inválidos";
    }
}