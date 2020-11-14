$(document).ready(function () {
      //COLOUR CHANGER
    $(".open-icon").click(function () {
        $('.color-changer-area').animate({
            'left': '-100px'
        }, 500);
        $('.close-icon').toggle(1000);

    });
    $('.icon-header .fa').click(function () {
        $('.close-icon').toggle(1000);
        $('.color-changer-area').animate({
            'left': '0'
        }, 500);
    });
    //purple
    $("#purple").click(function () {
        $(".add-color").css({
            'color': "purple",
        });

    });
    //red
    $("#red").click(function () {
        $(".add-color").css({
            'color': "red",
        });
    });
    //blueviolet
    $("#blueviolet").click(function () {
        $(".add-color").css({
            'color': "blueviolet",
        });
    });
    //blue
    $("#blue").click(function () {
        $(".add-color").css({
            'color': "blue",
        });
    });
    //goldenrod
    $("#goldenrod").click(function () {
        $(".add-color").css({
            'color': "goldenrod",
        });
    });
    //magenta
    $("#magenta").click(function () {
        $(".add-color").css({
            'color': "magenta",
        });
    });
    //yellowgreen
    $("#yellowgreen").click(function () {
        $(".add-color").css({
            'color': "yellowgreen",
        });
    });
    //orange
    $("#orange").click(function () {
        $(".add-color").css({
            'color': "orange",
        });
    });
    //green
    $("#green").click(function () {
        $(".add-color").css({
            'color': "green",
        });
    });
    //yellow
    $("#yellow").click(function () {
        $(".add-color").css({
            'color': "yellow",
        });
    });
});
