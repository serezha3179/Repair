new Swiper('.works__slider',{
   navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
   },
   spaceBetween: 10,
   centeredSlides: true,
   pagination: {
      el: '.works__swiper-pagination',
      clickable: true,
      // type: 'fraction',
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
},
});