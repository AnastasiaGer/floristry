$(function () {
  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function(){
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  });


  // $('.catalog__list').slick({
  //   infinite: true,
  //   fade: true,
  //   prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
  //   nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
  //   asNavFor: '.slider-dotshead'
  // });

  // $('.slider-dotshead').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   asNavFor: '.header__slider',
  //   responsive: [
  //     {
  //         breakpoint: 961,
  //             settings: "unslick"
  //     }
  // ]
  // });
  // $('.about__slider, .trip__slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../img/arrow-prew.svg" alt=""></button>',
  //   nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../img/arrow-next.svg" alt=""></button>',
  //   autoplay: true,
  //   fade: true,
  //   responsive: [{
  //     breakpoint: 601,
  //     settings: {
  //       arrows: false
  //     }
  //   }]
  // });

  // $('.menu').on('click', 'a', function (event) {
  //   event.preventDefault();
  //   let id = $(this).attr('href'),
  //   top = $(id).offset().top;

  //   $('body,html').animate({scrollTop: top}, 1500);

  // });
});
