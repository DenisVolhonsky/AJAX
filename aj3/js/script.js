//Хранение информации JSON формат записи по правилам JS
// всегда двойные кавычки

$(document).ready(function () {
    $('button').on('click', f1);

});

function f1() {
    $.getJSON('file.json', function(data) {
        console.log(data);
        var name=$('#login').val(); //считываем имя с input
        var pass=$('#pass').val();  //считываем пароль с input
        for(var key in data) {
            if(data[key].name == name && data[key].pass == pass) {
                alert('Welcome');
                break; // прерываем цикл чтобы не перебирать весь массив
            }
        }
    });
}


