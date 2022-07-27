$(function () {

    $('.header_slider').slick({
        arrows: false,
        autoplay: true,
        vertical: true,
    });

    $('.basic_slider').slick({
        arrows: false,
        autoplay: true,
        speed: 3000,
        fade: true,
    });
    $('.black_slider').slick({
        arrows: false,
        autoplay: true,
        speed: 3000,
        fade: true,
    });

    $('.left_slider').slick({
        arrows: false,
        fade: true,
    });

    $('.right_slider').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.left_slider',
    });

    $('.right_slider').on('afterChange', function (e, s, c) {
        let t = c % 4;
        $('.right .bar span').css({
            left: t * 25 + '%'
        });
    });


    $('.sonyStore .right .xi-arrow-left').on('click', function () {
        $('.right_slider').slick('slickPrev')
    });
    $('.sonyStore .right .xi-arrow-right').on('click', function () {
        $('.right_slider').slick('slickNext')
    });

})