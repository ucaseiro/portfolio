$(document).ready(function () {

  /* =====================================================
     DÉTECTION MOBILE
  ===================================================== */
  const isMobile = window.matchMedia('(max-width: 666px)').matches;

  /* =====================================================
     CAROUSEL
  ===================================================== */
  const $cards = $('.card');
  let currentIndex = 0;
  const $indicatorsContainer = $('.carousel-indicators');

  $cards.each(function () {
    $indicatorsContainer.append('<div class="indicator"></div>');
  });

  function updateIndicators() {
    $indicatorsContainer.find('.indicator')
      .removeClass('active')
      .eq(currentIndex)
      .addClass('active');
  }

  function updateCarousel() {
    $cards.removeClass('left center right');

    const total = $cards.length;
    const leftIndex = (currentIndex - 1 + total) % total;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % total;

    $cards.eq(leftIndex).addClass('left');
    $cards.eq(centerIndex).addClass('center');
    $cards.eq(rightIndex).addClass('right');

    $('.card.center')
      .off('click')
      .on('click', function () {
        window.location.href = 'project0' + currentIndex + '.html';
      });

    updateIndicators();
  }

  $('.arrow-right').on('click', () => {
    currentIndex = (currentIndex + 1) % $cards.length;
    updateCarousel();
  });

  $('.arrow-left').on('click', () => {
    currentIndex = (currentIndex - 1 + $cards.length) % $cards.length;
    updateCarousel();
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'ArrowRight') $('.arrow-right').click();
    if (e.key === 'ArrowLeft') $('.arrow-left').click();
  });

  $indicatorsContainer.on('click', '.indicator', function () {
    currentIndex = $(this).index();
    updateCarousel();
  });

  updateCarousel();

  /* =====================================================
     MODAL IMAGES / VIDÉOS
  ===================================================== */
  $('.fullscreen-image').on('click', function (e) {
    e.preventDefault();

    const src = $(this).attr('src');
    const isVideo = $(this).is('video');
    const $container = $('#mediaOverlay .media-container');

    $container.empty();

    if (isVideo) {
      $container.append(`<video src="${src}" controls autoplay muted></video>`);
    } else {
      $container.append(`<img src="${src}" alt="">`);
    }

    $('#mediaOverlay').fadeIn();
  });

  $('.close-media, #mediaOverlay').on('click', function (e) {
    if ($(e.target).is('#mediaOverlay') || $(e.target).hasClass('close-media')) {
      $('#mediaOverlay').fadeOut();
      $('#mediaOverlay .media-container').empty();
    }
  });

  /* =====================================================
     MODAL CV
  ===================================================== */
  $('#open-cv').on('click', () => $('.fullscreen-cv').fadeIn());
  $('.close-btn, .fullscreen-cv').on('click', function (e) {
    if ($(e.target).is('.fullscreen-cv') || $(e.target).hasClass('close-btn')) {
      $('.fullscreen-cv').fadeOut();
    }
  });

  /* =====================================================
     SCROLL CUSTOM (DESKTOP UNIQUEMENT)
  ===================================================== */
  if (!isMobile) {

    let scrollTarget = 0;
    let currentScroll = 0;
    const ease = 0.08;

    function maxScroll() {
      return $(document).height() - window.innerHeight;
    }

    function clamp() {
      scrollTarget = Math.max(0, Math.min(scrollTarget, maxScroll()));
    }

    window.addEventListener('wheel', (e) => {
      e.preventDefault();
      scrollTarget += e.deltaY;
      clamp();
    }, { passive: false });

    window.addEventListener('keydown', (e) => {
      const step = 80;
      if (e.key === 'ArrowDown') scrollTarget += step;
      if (e.key === 'ArrowUp') scrollTarget -= step;
      clamp();
    });

    function tick() {
      currentScroll += (scrollTarget - currentScroll) * ease;

      const ratio = Math.min(currentScroll / window.innerHeight, 1);
      $('.accueil-page').css({
        filter: `brightness(${1 - ratio})`,
        transform: `scale(${1 - 0.1 * ratio})`
      });

      window.scrollTo(0, currentScroll);
      requestAnimationFrame(tick);
    }

    tick();
  }

  /* =====================================================
     MOBILE : SCROLL NATIF (NE RIEN FAIRE)
  ===================================================== */
  if (isMobile) {
    $('body').css('touch-action', 'auto');
    $('.accueil-page').css({
      filter: 'none',
      transform: 'none'
    });
  }

});
