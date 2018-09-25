

/**
 * @name initWebFontLoader
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience...
 * for more details => https://github.com/typekit/fvd
 */
const initWebFontLoader = () => {

  WebFont.load({
    google: {
      families: [
        'Montserrat:300,400,500,600,700,900'
      ]
    }
  });

};