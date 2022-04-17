export const swiperHero = new Swiper('#swiper-hero', {
  loop: true,

  autoplay: {
    delay: 4000
  },

  effect: 'fade',

  navigation: {
    nextEl: '.hero__slider-button-next',
    prevEl: '.hero__slider-button-prev'
  },

  grabCursor: true,

  resizeObserver: true,
  observer: true,
  observeParents: true
});
