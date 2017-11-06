$(document).ready(function () {
    $('#on').on('click', f1);
    $('#sign-load').on('change', f2);
    $('#sign-json').on('click', f3);
});

function f1() {
    $.getJSON('good1.json', function (data) {
        var out = '';
        for (var key in data) {
            out += '<div class="items">'
            out += '<b>Наименование товара: </b>' + data[key].name + '<br>';
            out += '<b>Мощность: </b>' + data[key].power + '<br>';
            out += '<b>Вес: </b>' + data[key].weight + '<br>';
            out += '<img src="' + data[key].img + '"><br>';
            out += '<p class="out-file"></p><br></div>';
        }
        $('#info').html(out).toggle();
        $('.out-file').load('file.html');
    });
}

function f2() {

    $('#zodiac-out').load($('#sign-load option:selected').val() +'.html');

}

function f3() {
    outSignJson = $('#sign-json option:selected').val();
    nameOut = '';
    dateOut = '';
    historyOut = '';

    $.getJSON('sign.json', function (data) {

        for (var key in data) {
            if (outSignJson == key) {
                nameOut = '<i>Знак зодиака: </i><b>' + data[key].name + '</b>';
                dateOut = '<i>Период: </i><b>' + data[key].date + '</b>';
                historyOut = '<i>Описание: </i>' + data[key].history;
            }
        }

        $('#name').html(nameOut);
        $('#znak-date').html(dateOut);
        $('#history').html(historyOut);
    });
}

