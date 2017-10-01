$(document).ready(function () {
    "use strict";
    $.get("https://dog.ceo/api/breeds/list", function (dogArray) {
        var dogList = dogArray.message;
        console.log(dogList);

        var dogListCap = $.map(dogList, function (item, index) {
            return item.charAt(0).toUpperCase() + item.slice(1);
        });

        var i = 0;
        for (i = 0; i < dogListCap.length; i++) {
            console.log(dogListCap[i]);
            var part1 = '<option value="';
            var part2 = '">';
            var part3 = "</option>";
            $('.list').append(part1 + dogList[i] + part2 + dogListCap[i] + part3);
        }
    });

    $('.list').change(function () {

        var dogChoice = $("select.list option:checked").val();
        console.log(dogChoice);

    });

    $('#dogbutton').click(function () {
        $(this).val("Generating...");
        var part4 = $("select.list option:checked").val();
        var part5 = 'https://dog.ceo/api/breed/';
        var part6 = '/images/random';
        $.get(part5 + part4 + part6, function (data) {
            console.log(data);
            var image = $('<img />');
            image.attr('src', data.message);
            console.log(image);
            $('.result').html(image);
            $('#dogbutton').val("Generate Doggo!");
        });
    });
});