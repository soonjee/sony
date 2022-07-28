$(function () {

    $('.headerSlider').slick({
        arrows: false,
        autoplay: true,
        vertical: true,
    });

    $('.basicSlider').slick({
        arrows: false,
        autoplay: true,
        speed: 3000,
        fade: true,
    });

    $('.blackSlider').slick({
        arrows: false,
        autoplay: true,
        speed: 3000,
        fade: true,
    });

    $('.leftSlider').slick({
        arrows: false,
        fade: true,
    });

    $('.rightSlider').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.left_slider',
    });

    $('.rightSlider').on('afterChange', function (e, s, c) {
        let t = c % 4;
        $('.right .bar span').css({
            left: t * 25 + '%'
        });
    });


    $('.sonyStore .right .xi-arrow-left').on('click', function () {
        $('.rightSlider').slick('slickPrev')
    });
    $('.sonyStore .right .xi-arrow-right').on('click', function () {
        $('.rightSlider').slick('slickNext')
    });

})
