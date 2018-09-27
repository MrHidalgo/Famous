

/**
 * @name initParallaxHoverAnimation
 * @description
 */
const initParallaxHover = () => {
  const parallaxImg = $(".welcome__bg svg");

  const $container = $('#welcome'),
    container_w = $container.width(),
    container_h = $container.height(),
    homeImgLine0 = $("#home-line-0"),
    homeImgLine1 = $("#home-line-1"),
    homeImgLine2 = $("#home-line-2"),
    homeImgLine3 = $("#home-line-3");

  if(parallaxImg) {
    $(window).on('mousemove.parallax', function(event) {
      let pos_x = event.pageX,
        pos_y = event.pageY,
        left = 0,
        top = 0;

      left = container_w / 2 - pos_x;
      top  = container_h / 2 - pos_y;

      TweenMax.to(
        parallaxImg, 1, {
          css: {transform: 'translateX(' + left / 45 + 'px) translateY(' + top / 45 + 'px)'},
          ease:Expo.easeOut, overwrite: 'all'
        });
      TweenMax.to(
        homeImgLine0, 1, {
          css: {transform: 'translateX(' + left / 25 + 'px) translateY(' + top / 30 + 'px)'},
          ease:Expo.easeOut, overwrite: 'all'
        });
      TweenMax.to(
        homeImgLine1, 1, {
          css: {transform: 'translateX(' + left / 60 + 'px) translateY(' + top / 25 + 'px)'},
          ease:Expo.easeOut, overwrite: 'all'
        });
      TweenMax.to(
        homeImgLine2, 1, {
          css: {transform: 'translateX(' + left / 25 + 'px) translateY(' + top / 100 + 'px)'},
          ease:Expo.easeOut, overwrite: 'all'
        });
      TweenMax.to(
        homeImgLine3, 1, {
          css: {transform: 'translateX(' + left / 100 + 'px) translateY(' + top / 25 + 'px)'},
          ease:Expo.easeOut, overwrite: 'all'
        });
    });
  }
};
