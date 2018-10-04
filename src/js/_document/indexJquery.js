

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


  /**
   *
   */
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
   *
   */
  const initLoseLink = () => {
    $("[lose-link-js]").on('click', (e) => {
      $("[lose-link-js]").removeClass("is-active");
      $(e.currentTarget).addClass("is-active");
    });
  };


  /**
   *
   */
  const initWaveAudio = () => {

    /**
     *
     * @param time
     * @returns {string}
     */
    const formatTime = function (time) {
      return [
        Math.floor((time % 3600) / 60), // minutes
        ('00' + Math.floor(time % 60)).slice(-2) // seconds
      ].join(':');
    };


    /**
     *
     * @param btnName
     * @param classMod
     * @param wavesurferMethod
     */
    const btnControls = (btnName, classMod, wavesurferMethod) => {
      $(btnName).on('click', (ev) => {
        $(ev.currentTarget).toggleClass(classMod);
        wavesurfer[wavesurferMethod]();
      });
    };


    /**
     * Create WaveSurfer obj
     */
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      responsive: true,
      cursorWidth: 0,
      barWidth: 1,
      waveColor: "#cfd1d3",
      progressColor: "#0074e1",
    });


    /**
     * Default songs load
     */
    wavesurfer.load("../audio/50Cent-ImTheManft.ChrisBrown.mp3");

    /**
     * Show current time
     */
    wavesurfer.on('audioprocess', () => {
      $('[songs-timeCurrent-js]').text(
        formatTime(wavesurfer.getCurrentTime())
      );
    });

    /**
     * Show clip duration
     */
    wavesurfer.on('ready', () => {
      $('[songs-timeDuration-js]').text(
        formatTime(wavesurfer.getDuration())
      );
      $('[songs-timeCurrent-js]').text("0:00");
      $(wavesurfer.params.container).find("canvas").addClass("animated fadeIn");
    });

    /**
     * When is finishes playing
     */
    wavesurfer.on('finish', () => {
      $("[controls-btn-js]").removeClass("is-play");
      $("[volume-btn-js]").removeClass("is-mute");
      $('[songs-timeCurrent-js]').text("0:00");

      wavesurfer.seekTo(0);
    });

    /**
     * On seeking. Callback will receive (float) progress [0..1]
     */
    wavesurfer.on('seek', () => {
      $('[songs-timeCurrent-js]').text(formatTime(wavesurfer.getCurrentTime()));
    });

    /**
     * Play/pause & mute volume btn controls
     */
    btnControls("[controls-btn-js]", "is-play", "playPause");
    btnControls("[volume-btn-js]", "is-mute", "toggleMute");

    $(".songs__description").on('click', (ev) => {
      const songsImgPreview = $("[songs-imgPreview-js], [songs-imgView-js]"),
        songsName = $("[songs-name-js]"),
        songsMusic = $($("[songs-music-js]"));

      const elem = $(ev.currentTarget),
        elemObj = elem.data("obj"),
        elemName = elem.find(".songs__description-name").text(),
        eleMusic = elem.find(".songs__description-music").text(),
        elemPicture = elem.find("picture").clone();

      $("[controls-btn-js]").removeClass("is-play");
      $("[volume-btn-js]").removeClass("is-mute");

      songsImgPreview.html(elemPicture);

      songsName.text(elemName);
      songsMusic.text(eleMusic);

      if(wavesurfer.getMute()) {
        wavesurfer.toggleMute();
      }
      wavesurfer.load(elemObj.src);
    });
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
    initHamburger();
    initSmoothScroll();
    initChangeImageSVG();
    initStellar();
    initSwiper();
    initPopups();
    // callback
    initSelectric();
    initVideoPlay();
    initLoseLink();
    initWaveAudio();
  };
  initJquery();
});

