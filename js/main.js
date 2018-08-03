$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(400).fadeOut('slow');
});

// particles

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../js/particles/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });