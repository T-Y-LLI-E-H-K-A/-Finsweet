Fancybox.bind('[data-fancybox="video"]', {
    hideScrollbar: false,
});

$(document).ready(function () {

    var mixer = mixitup('.blog__list');

    $('.filter-box__btn').on('click', function () {
        $('.filter-box__btn').removeClass('filter-box__btn--active')
        $(this).addClass('filter-box__btn--active')
    });

    $('.testimonials__slider-list').slick({
        slidesToShow: 2,
        arrows: true,
        dots: true,
        appendArrows: $('.switch__btns-box'),
        appendDots: $('.switch__dots-box')
    });

    $('.faq__list-link').on('click', function(e) {
        e.preventDefault()
        if ($(this).hasClass('faq__list-link--active')) {
            $(this).removeClass('faq__list-link--active')
            $(this).children('.faq-link__content-txt').slideUp()
        } else {
            $('.faq__list-link').removeClass('faq__list-link--active')
            $('.faq-link__content-txt').slideUp()
            $(this).addClass('faq__list-link--active')
            $(this).children('.faq-link__content-txt').slideDown()
        }
    })
})
