$(document).ready(function () {

    $('[data-toggle=tooltip]').tooltip();

    $(".testimoial-carousel").owlCarousel({
        rtl : true,
        loop : false,
        margin : 30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    navbarSticky();

    $(window).on('scroll', function () {
        navbarSticky();
    });

});

function navbarSticky() {
    if ($(window).scrollTop()) {
        $('nav.navbar').addClass('fixed-top');
    }else {
        $('nav.navbar').removeClass('fixed-top');
    }
}
