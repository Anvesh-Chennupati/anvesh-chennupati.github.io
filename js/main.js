$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(400).fadeOut('slow');
});

$(document).ready(function () {
    $('.menu-toggler').on('click', function (){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    })
});