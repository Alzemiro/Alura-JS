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

var weekdays = getWeekdaysInMonth(02, 2019);

var teste = document.querySelector("#teste");

teste.textContent = weekdays;,