Fancybox.bind('[data-fancybox="video"]', {
    hideScrollbar: false,
  });

$(function () { 

    var mixer = mixitup('.blog__list');

    $('.filter-box__btn').on('click', function () {
        $('.filter-box__btn').removeClass('filter-box__btn--active')
        $(this).addClass('filter-box__btn--active')
    })
})
