$(function () {
  $('.photos-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="photos-slider__btn photos-slider__btnprev"><img src="../img/arrow-prew.svg" alt=""></button>',
    nextArrow: '<button class="photos-slider__btn photos-slider__btnnext"><img src="../img/arrow-next.svg" alt=""></button>',
  });
});
