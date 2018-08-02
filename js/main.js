// preloader
$(function() {
    alert( 'JavaScript Loaded!' );
});
$(window).on('load',function(){
    jquery('#status').fadeout();
    jquery('#preloader').fadeout();
})
