
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
              items: 2,
              nav: false
            },
            600: {
              items: 3,
              nav: false
            },
            900: {
              items: 4,
              nav: false
            },
            1000: {
              items: 5,
              nav: false,
              margin: 20
            }
          }
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })
})
