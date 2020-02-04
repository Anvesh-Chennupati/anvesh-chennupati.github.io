$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(400).fadeOut('slow');
});

$(document).ready(function () {
    $('.menu-toggler').on('click', function (){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    })

    // for colapsing the menu toggler
    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    
    // for scrollling 
    $('nav a[href*="#"]').on('click', function (){
        $('html ,body').animate({
            scrollTop: $($(this).attr('href')).offset().top -100
        }, 2000);
    })

    // up button works
    $('#up').on('click', function (){
        $('html ,body').animate({
            scrollTop: 0
        }, 2000);
    })

    AOS.init({
        easing: 'ease',
        duration: 1800
    });

});

