

/**
 * @name initSwiper
 * @description initialize Swiper
 */
const initSwiper = () => {
  let mySwiperView = new Swiper('.singer__view', {
    // Optional parameters
    // wrapperClass: "swiper-wrapper",
    // slideClass: "swiper-slide",
    // direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    loopedSlides: 4,
    centeredSlides: true,
    slideToClickedSlide: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    // autoplay: {
    //   delay: 5000,
    // },
    // Disable preloading of all images
    // preloadImages: false,
    // Enable lazy loading
    // lazy: {
    //   loadPrevNext: true,
    // },

    // off touch for destop
    // touchMoveStopPropagation:false,
    // simulateTouch : false,
    // allowSwipeToNext: true,
    // allowSwipeToPrev: true,
    // allowPageScroll: "auto ",

    slidesPerView: 1,
    spaceBetween: 0,
    controller: {
      control: mySwiperPreview,
    },
    // breakpoints: {
    //   // when window width is <= 320px
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 10
    //   },
    //   // when window width is <= 480px
    //   480: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   // when window width is <= 640px
    //   640: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   }
    // },
  });
  let mySwiperPreview = new Swiper('.singer__preview', {
    // Optional parameters
    // wrapperClass: "swiper-wrapper",
    // slideClass: "swiper-slide",
    // direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    loopedSlides: 4,
    // centeredSlides: true,
    slideToClickedSlide: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    // autoplay: {
    //   delay: 5000,
    // },
    // Disable preloading of all images
    // preloadImages: false,
    // Enable lazy loading
    // lazy: {
    //   loadPrevNext: true,
    // },

    // off touch for destop
    // touchMoveStopPropagation:false,
    // simulateTouch : false,
    // allowSwipeToNext: true,
    // allowSwipeToPrev: true,
    // allowPageScroll: "auto ",

    slidesPerView: 4,
    spaceBetween: 8,
    controller: {
      control: mySwiperView,
    },
    // breakpoints: {
    //   // when window width is <= 320px
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 10
    //   },
    //   // when window width is <= 480px
    //   480: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   // when window width is <= 640px
    //   640: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   }
    // },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // renderBullet: function (index, className) {
      //   return `
      //     <div class="${className}">
      //       ${index}
      //     </div>
      //   `;
      // }
    },
  });

  // mySwiperView.params.control = mySwiperPreview;
  // mySwiperPreview.params.control = mySwiperView;
};
