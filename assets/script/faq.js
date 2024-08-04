// ハンバーガーメニュー
var hamburger = $('.header__hamburger__menu');

$('.header__hamburger__button').on('click', function () {
    hamburger.toggleClass('header__hamburger__menu__active');
});

$(window).on('resize', function () {
    hamburger.removeClass('header__hamburger__menu');
});

// アコーディオン
$('.-faq__answer__base').hide();
$('.-faq__question__base').on('click', function(e) {
    var content = $(this).next();
    $(this).toggleClass('selected');
    content.slideToggle();
});