$(document).ready(function () {
    $('button').on('click', f1);
});

function f1() {
    $.getJSON('good1.json', function(data) {
        var out='';
        for(var key in data) {

            out+='<div class="items">'
            out+='<b>Наименование товара: </b>'+ data[key].name +'<br>';
            out+='<b>Мощность: </b>'+data[key].power+'<br>';
            out+='<b>Вес: </b>'+data[key].weight+'<br>';
            out+='<img src="'+data[key].img+'"><br>';
            out+='<p class="out-file"></p><br></div>';

        }
        $('#info').html(out);
        $('.out-file').load('file.html');

    });

}




