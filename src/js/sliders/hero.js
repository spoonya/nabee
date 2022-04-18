export const swiperHero = new Swiper('#swiper-hero', {
  loop: true,

  autoplay: {
    delay: 4000
  },

  speed: 1000,

  navigation: {
    nextEl: '.hero__slider-button-next',
    prevEl: '.hero__slider-button-prev'
  },

  preloadImages: false,
  lazy: {
    loadPrevNext: true
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  grabCursor: true,

  resizeObserver: true,
  observer: true,
  observeParents: true
});
