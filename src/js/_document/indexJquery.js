

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


  /**
   * =============================================
   * CALLBACK
   * =============================================
   */

  /**
   *
   */
  const initSelectric = () => {
    $(".real__select").selectric({
      responsive: true,
      inheritOriginalWidth: true,
      disableOnMobile: false
    });
  };


  const initVideoPlay = () => {
    const vd = $("video")[0];

    $("[videoPlay-js]").on("click", () => {
      if(vd.paused) {
        vd.play();
      } else {
        vd.pause();
        vd.currentTime = 0;
      }
    })
  };



  /**
   * @description Init all method
   */
  const initJquery = () => {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
    // lib
    // callback
    initSelectric();
    initVideoPlay();
  };
  initJquery();
});

