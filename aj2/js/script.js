$(document).ready(function () {
    $('#task1').on('click', myTask1);
    $('#task2').on('click', myTask2);
    $('#task3').on('click', myTask3);
    $('#task4').on('click', myTask4);
    $('#task5').on('click', myTask5);

});

// Задание 1. Передайте на сервер два числа методом POST. Имена чисел – num1 и num2. Цель — файл a1.php.
// Если все выполнено верно, то будет возвращена строка с суммой чисел, если нет – ошибка. Способ передачи – AJAX.

function myTask1() {
    $.post(
        'a1.php', //куда послать
        {
            "num1": 7,  //что послать
            "num2": 9
        },
        function (data) {   //что с этим делать
            console.log(data);
        }
    );
}


// Задание 2. Передайте на сервер свой год рождения в формате XXXX. Передачу осуществляйте методом POST,
// имя переменной year, имя целевого файла – a2.php.
// Если все выполнено верно, то сервер вернет строку в которой будет количество прожитых лет,
// если нет – ошибку. Способ передачи – AJAX.

function myTask2() {
    $.post(
        'a2.php', //куда послать
        {
            "year": 1984 //что послать
        },
        function (data) {   //что с этим делать
            console.log(data);
        }
    );
}

// Задание 3. Создайте форму с radiobutton для выбора пола (мужчина или женщина). Добавьте поле для ввода роста (в сантиметрах).
// По нажатию кнопки “Идеальный вес”, пошлите запрос на файл a3.php. На сервер передается параметр пол – имя параметра sex,
// значения man или woman и рост ( имя height).
// Передача осуществляется методом AJAX, с помощью POST.
// Если все выполнено правильно, то будет возвращена строка с расчетом идеального веса под заданный пол. В противном случае – ошибка.

function myTask3() {
    $.post(
        'a3.php', //куда послать
        {
            "sex": $('input[name=sex]:checked').val(),
            "height": $('#height').val()
        },
        function (data) {   //что с этим делать
            console.log('Задача 3'+ data);
        }
    );
}

// Задание 4. Измените предыдущее значение, чтобы рост задавался с помощью ползунка range.

function myTask4() {
    $.post(
        'a3.php', //куда послать
        {
            "sex": $('input[name=sex]:checked').val(),
            "height": $('#range').val()
        },
        function (data) {   //что с этим делать
            console.log('(Задача 4)'+ data);
        }
    );
}
function change() {
    $('#out').text($('#range').val());
}

// Задание 5. Создайте форму с полями:
// fio – поле ввода для имени и фамилии;
// email – поле ввода для email адреса
// phone – поле ввода для телефона
// По нажатию кнопки передайте данные из полей ввода на сервер (mail.php) посредством POST (AJAX). Имена переменных – такие,
// как указано в списке. Если все сделано верно,
// то по адресу указанному в файле mail.php в переменной $to будет отправлено письмо, если нет – выведена ошибка.
// Возвращаемый формат – строка.


function myTask5() {
    $.post(
        'mail.php', //куда послать
        {
            "fio": $('#fio').val(),
            "email": $('#email').val(),
            "phone": $('#phone').val()
        },
        function (data) {   //что с этим делать
            console.log(data);
        }
    );
}

