$(document).ready(function () {
    $('#dogbutton').click(function () {
        $(this).val("Generating...");
        $.get("https://dog.ceo/api/breeds/image/random", function (data) {
            console.log(data);
            var image = $('<img />')
            image.attr('src', data.message);
            console.log(image);
            $('.result').html(image);
            $('#dogbutton').val("Generate Doggo!");
        });
    });
});