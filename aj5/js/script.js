$(document).ready(function () {
    $('button').on('click', f1);
    $('select').on('click', f2);


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

function f2() {

        outSign = $('#sign option:selected').val();

        if(outSign==='oven'){
            $('#date-out').load('z2.html #date').css({'color':'#592434'});
            $('#zodiac-out').load('z2.html #description').css({'color':'darkslategrey', 'font-weight':'bold'});
        }
        if(outSign==='telec'){
            $('#date-out').load('z1.html #date').css({'color':'#592434'});
            $('#zodiac-out').load('z1.html #description').css({'color':'saddlebrown', 'font-weight':'bold'});
        }
        if(outSign==='lev'){
            $('#date-out').load('z3.html #date').css({'color':'#592434'});
            $('#zodiac-out').load('z3.html #description').css({'color':'darkgoldenrod', 'font-weight':'bold'});
        }

}

