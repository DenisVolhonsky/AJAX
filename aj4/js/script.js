//Хранение информации JSON формат записи по правилам JS
// всегда двойные кавычки


//метод для сокрытия данних через php
$(document).ready(function () {
    $('button').on('click', f1);

});

function f1() {
    $.get(
        "p77.php",
        {
            "name": $('#login').val(), //посылаю на сервер имя и пароль
            "pass": $('#pass').val()
        },
        function (data) {
            data=JSON.parse(data);
            console.log(data);
            console.log(data.age);
            console.log(data.img);
            $('#pic').attr('src',data.img);

            // if(data==1) alert('Ура');
            // else alert('Нет');
        }

    );
}


