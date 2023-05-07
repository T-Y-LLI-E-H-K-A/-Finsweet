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
        appendArrows:$('.switch__btns-box'),
        appendDots:$('.switch__dots-box')
    });
})
