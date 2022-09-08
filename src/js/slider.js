
new Swiper('.reviews__slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
      },
    },
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 27,
    centeredSlides: true,
    initialSlide: 0,
    loop: true,
    breakpoints: {
    480: {
      spaceBetween: 23,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 27,
      centeredSlides: true,
    }
  }, 
});

