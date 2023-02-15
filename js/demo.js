$(document).ready(function() {
    //nav 
    $(".nav-link").hover(function() {
        $(this).addClass("hvr-underline-from-left");
    });





    //specialmenu
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })



    //reserve
    $('select').niceSelect();







});