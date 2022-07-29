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
        // autoplay: true,
        speed: 3000,
        fade: true,
        dots: false,
        // customPaging: function (slider, i, src) {
        //     var thumb = $(slider.$slides[i]).data();
        //     src = i + 1;
        //     if (i == "0") {
        //         i = "아";
        //     } else if (i == "1") {
        //         i = "야";
        //     } else if (i == "2") {
        //         i = "야";
        //     }
        //     return '<a class = "dot">' + i + '<a>';
        // },
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
