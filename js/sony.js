
$(function () {
    $('.headerSlider').slick({
        arrows: false,
        autoplay: true,
        vertical: true,
    });

    $('.gnb>ul>li>a').on('click', function (event) {
        if ($(window).width() < 769) {
            event.preventDefault();
            $('.smenu').hide();
            $(this).next().show();
        }
    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active')
        $('.gnb').toggleClass('on')
    });


    $('.basicSlider').slick({
        arrows: false,
        autoplay: true,
        speed: 2000,
        fade: true,
        dots: false,
    });


    $('.blackSlider').slick({
        arrows: false,
        autoplay: true,
        speed: 2000,
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
        asNavFor: '.leftSlider',
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
