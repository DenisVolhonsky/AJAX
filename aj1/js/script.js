// ajax - ассинхронный js
// rest - архитектура с 2 типами запроса get и post
// ? - начало get запроса передает инфу в адр строке огранич 512 симв
// невидимый для польз инфа или много инфы - post
// http://prntscr.com/h1hdhv

$(document).ready(function () {   //загружается документ когда он готов выполняется функция
    $('button').on('click', myFunction);
});

function myFunction() {
    //куда послать
    //что
    //что с этим делать
    $.post(
        '1.php',
        {
            "a": 7,
            "b": 9
        },
        function (data) {
            console.log(data);
        }
    );
}