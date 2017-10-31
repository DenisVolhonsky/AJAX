$(document).ready(function () {
    $('button').on('click', f1);

});

function f1() {
    $.getJSON('good1.json', function(data) {
        var out='';
        for(var key in data) {
            out+='<b>Наименование товара: </b>'+ data[key].name +'<br>';
            out+='<b>Мощность: </b>'+data[key].power+'<br>';
            out+='<b>Вес: </b>'+data[key].weight+'<br>';
            out+='<img src="'+data[key].img+'"><br>';
            console.log(out);
        }
        $('#info').html(out);
        // $('#out-text').load("file.html");

    });
}




