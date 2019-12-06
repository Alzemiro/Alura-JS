function daysInMonth(ano, mes) {
    return 32 - new Date(ano, mes, 32).getDate();
}

function isWeekday(year, month, day) {
    var day = new Date(year, month, day).getDay();
    return day != 0 && day != 6;
}

function getWeekdaysInMonth(month, year) {
    var days = daysInMonth(month, year);
    var weekdays = 0;
    for (var i = 0; i < days; i++) {
        if (isWeekday(year, month, i + 1)) weekdays++;
    }
    return weekdays;
}

var weekdays = getWeekdaysInMonth(11, 2019);


function SemanaCheckBox() {
    var inputs = document.querySelectorAll(".check3");
    var incrementa = 10;
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].checked == true) {;
        }
    }
    return incrementa
}


function qtd_meses() {
    var horasFuncionaisDia = 10;
    var horasContratadas = document.querySelector("#Hr-cntr");
    var horasAula = document.querySelector("#Hr-por-aula");
    var resultado = document.querySelector("#teste");
    resultado.textContent = SemanaCheckBox();
    alert(SemanaCheckBox());
}