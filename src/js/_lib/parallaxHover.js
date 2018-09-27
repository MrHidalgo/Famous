

/**
 * @name initParallaxHoverAnimation
 * @description
 */
const initParallaxHover = () => {
  const parallaxImgHome = $(".welcome__bg svg"),
    parallaxImgServices = $(".digital__wrapper-left svg");

  const $containerWelcome = $('#welcome'),
    containerWelcome_w = $containerWelcome.width(),
    containerWelcome_h = $containerWelcome.height(),
    homeImg = $(".welcome__bg svg"),
    homeImgLine0 = $("#home-line-0"),
    homeImgLine1 = $("#home-line-1"),
    homeImgLine2 = $("#home-line-2"),
    homeImgLine3 = $("#home-line-3");

  const $containerDigital = $('#digital'),
    containerDigital_w = $containerDigital.width(),
    containerDigital_h = $containerDigital.height(),
    servicesImg = $(".digital__wrapper-left svg"),
    servicesImgLine0 = $("#digital-line-0"),
    servicesImgLine1 = $("#digital-line-1");

  if(parallaxImgHome) {
    $(window).on('mousemove.parallax', function(event) {
      let pos_x = event.pageX,
        pos_y = event.pageY,
        left = 0,
        top = 0;

      left = containerWelcome_w / 2 - pos_x;
      top  = containerWelcome_h / 2 - pos_y;

      TweenMax.to(
        homeImg, 1, {
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

  if(parallaxImgServices) {
    $(window).on('mousemove.parallax', function(event) {
      let pos_x = event.pageX,
        pos_y = event.pageY,
        left = 0,
        top = 0;

      left = containerDigital_w / 2 - pos_x;
      top  = containerDigital_h / 2 - pos_y;

      TweenMax.to(
        servicesImg, 1, {
          css: {transform: 'translateX(' + left / 45 + 'px) translateY(' + top / 45 + 'px)'},
          ease:Expo.easeOut, overwrite: 'all'
        });
      TweenMax.to(
        servicesImgLine0, 1, {
          css: {transform: 'translateX(' + left / 25 + 'px) translateY(' + top / 100 + 'px)'},
          ease:Expo.easeOut, overwrite: 'all'
        });
      TweenMax.to(
        servicesImgLine1, 1, {
          css: {transform: 'translateX(' + left / 30 + 'px) translateY(' + top / 85 + 'px)'},
          ease:Expo.easeOut, overwrite: 'all'
        });
    });
  }

};
