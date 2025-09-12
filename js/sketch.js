$(document).ready(function () {
  const $cards = $('.card');
  let currentIndex = 0;

    const $indicatorsContainer = $('.carousel-indicators');

    // Générer les indicateurs
    $cards.each(function () {
      $indicatorsContainer.append('<div class="indicator"></div>');
    });

    function updateIndicators() {
      $indicatorsContainer.find('.indicator').removeClass('active')
        .eq(currentIndex).addClass('active');
    }

    function updateCarousel() {
      $cards.removeClass('left center right');
      $('.blob1').removeClass('animated-gradient-green animated-gradient-purple animated-gradient-orange animated-gradient-red animated-gradient-blue');
      $('.blob2').removeClass('animated-gradient-green2 animated-gradient-purple2 animated-gradient-orange2 animated-gradient-red2 animated-gradient-blue2');

      const total = $cards.length;
      const leftIndex = (currentIndex - 1 + total) % total;
      const centerIndex = currentIndex % total;
      const rightIndex = (currentIndex + 1) % total;

      $cards.eq(leftIndex).addClass('left');
      $cards.eq(centerIndex).addClass('center');
      $cards.eq(rightIndex).addClass('right');

      if (currentIndex < 9) {
        $('.big-number').text('0' + (currentIndex + 1));
      } else {
        $('.big-number').text((currentIndex + 1));
      }

      // Infos et blobs
      if (currentIndex == 2) {
        $('.type').text('Design Graphique');
        $('.date').text('Septembre - Novembre 2024');
        $('.tech').text('Photoshop');
      } else if (currentIndex == 3) {
        $('.type').text('Code');
        $('.date').text('Janvier - Mars 2025');
        $('.tech').text('VS Code : P5js');
      } else if (currentIndex == 4) {
        $('.type').text('Design Graphique');
        $('.date').text('Avril 2025');
        $('.tech').text('Photoshop');
      } else if (currentIndex == 5) {
        $('.type').text('Animation');
        $('.date').text('Avril - Mai 2025');
        $('.tech').text('After Effects - Illustrator');
      } else if (currentIndex == 7) {
        $('.type').text('Illustration Vectorielle');
        $('.date').text('Septembre - Octobre 2024');
        $('.tech').text('Illustrator');
      } else if (currentIndex == 6) {
        $('.type').text('Photographie - Mise en page');
        $('.date').text('Octobre 2024');
        $('.tech').text('Illustrator');
      } else if (currentIndex == 1) {
        $('.type').text('Modélisation - Animation 3D');
        $('.date').text('Juillet 2025');
        $('.tech').text('Blender');
      } else if (currentIndex == 0) {
        $('.type').text('Modélisation - Animation 2D/3D');
        $('.date').text('Juillet 2025');
        $('.tech').text('Blender - After Effects - Premiere Pro');
      } else if (currentIndex == 8) {
        $('.type').text('Observation, nu, extérieur');
        $('.date').text('Septembre 2024 - Juin 2025');
        $('.tech').text('Pierre noire, stylo, peinture');
      } else if (currentIndex == 9) {
        $('.type').text('Observation, nu, extérieur');
        $('.date').text('Septembre 2024 - Juin 2025');
        $('.tech').text('Pierre noire, stylo, peinture');
        $('.title').text('EXPRESSION PLASTIQUE');
      }

      $('.card.center').off('click').on('click', function () {
        window.location.href = 'project0' + currentIndex + '.html';
      });

      updateIndicators(); // ✅ Mettre à jour les ronds
    }

    // Navigation flèches
    $('.arrow-right').click(function () {
      currentIndex = (currentIndex + 1) % $cards.length;
      updateCarousel();
    });

    $('.arrow-left').click(function () {
      currentIndex = (currentIndex - 1 + $cards.length) % $cards.length;
      updateCarousel();
    });

    // Navigation clavier
    $(document).keydown(function (e) {
      if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % $cards.length;
        updateCarousel();
      } else if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + $cards.length) % $cards.length;
        updateCarousel();
      }
    });

    // Clic sur un indicateur
    $indicatorsContainer.on('click', '.indicator', function () {
      currentIndex = $(this).index();
      updateCarousel();
    });

    updateCarousel(); // Initialiser
  



// 4. Initialiser au chargement

    $('body.00').css('background', '#000000');
    $('body.01').css('background', 'black');
    $('body.02').css('background', 'black');
    $('body.03').css('background', 'black');
    $('body.04').css('background', 'black');
    $('body.05').css('background', 'black');
    $('body.06').css('background', 'black');
    $('body.07').css('background', 'black');
    $('body.09').css('background', 'black');
    // $('body.01').css('background', 'linear-gradient(270deg, rgb(0,10,0) 0%, rgb(0,41,27) 30%, rgb(0,70,50) 70%, rgb(0,10,0) 100%)');
    // $('body.02').css('background', 'linear-gradient(270deg, rgba(0,0,0,1)0%, rgb(0,8,41)30%, rgba(10, 30, 70, 1)70%, rgba(0,0,0,1)100%)');
    // $('body.03').css('background', 'linear-gradient(270deg, rgb(0,0,0) 0%, rgb(27,0,41) 30%, rgb(50,0,80) 70%, rgb(0,0,0) 100%)');
    // $('body.04').css('background', 'linear-gradient(270deg, rgba(10, 10, 0, 1) 0%, rgba(50, 23, 0, 1) 30%, rgba(70, 30, 0, 1) 70%, rgba(10, 10, 0, 1) 100%)');
    // $('body.05').css('background', 'linear-gradient(270deg, rgba(10, 10, 0, 1) 0%, rgba(50, 23, 0, 1) 30%, rgba(70, 30, 0, 1) 70%, rgba(10, 10, 0, 1) 100%)');
    // $('body.09').css('background', 'linear-gradient(270deg, rgb(0,0,0) 0%, rgb(41,0,0) 30%, rgb(90,0,0) 70%, rgb(0,0,0) 100%)');

  
    updateCarousel(); // Initial call
    window.addEventListener('scroll', () => {
        if (window.scrollX !== 0) {
          window.scrollTo(0, window.scrollY);
        }
      });
      $('.fullscreen-image').on('click', function (e) {
        e.preventDefault();
      
        const isVideo = $(this).is('video');
        const src = $(this).attr('src');
        const $container = $('#mediaOverlay .media-container');
      
        $container.empty(); // Vider la précédente
      
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

      $('#open-cv').on('click', function(){
        $('.fullscreen-cv').fadeIn();
      });
      
      $('.close-btn').on('click', function(){
        $('.fullscreen-cv').fadeOut();
      });

  // Optionnel : Fermer en cliquant hors de la fenêtre (clic sur l'arrière-plan flou)
  $('.fullscreen-cv').on('click', function (e) {
    if ($(e.target).is('.fullscreen-cv')) {
      $('.fullscreen-cv').fadeOut();
    }
  });

  $(function() {
  let scrollTarget = 0;
  let currentScroll = 0;
  const ease = 0.08;

  // --- Helpers ---
  function maxScroll() { return $(document).height() - window.innerHeight; }
  function clamp() {
    const mx = maxScroll();
    if (scrollTarget < 0) scrollTarget = 0;
    else if (scrollTarget > mx) scrollTarget = mx;
  }

  // --- WHEEL (desktop) ---
  window.addEventListener('wheel', (e) => {
    e.preventDefault();                 // empêcher le scroll natif
    scrollTarget += e.deltaY;
    clamp();
  }, { passive: false });

  // --- KEYBOARD (desktop) ---
  window.addEventListener('keydown', (e) => {
    const step = 60;
    const page = Math.max(200, window.innerHeight * 0.9);
    switch (e.key) {
      case 'ArrowDown': scrollTarget += step; break;
      case 'ArrowUp':   scrollTarget -= step; break;
      case 'PageDown':
      case ' ':         scrollTarget += page; break;
      case 'PageUp':    scrollTarget -= page; break;
      case 'Home':      scrollTarget  = 0; break;
      case 'End':       scrollTarget  = maxScroll(); break;
      default: return;
    }
    e.preventDefault();
    clamp();
  });

  // --- POINTER (mobile tactile / stylet, moderne) ---
  let pointerActive = false;
  let startY = 0;

  // Important pour que preventDefault fonctionne sur mobile
  document.body.style.touchAction = 'none';

  window.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      pointerActive = true;
      startY = e.clientY;
    }
  }, { passive: true });

  window.addEventListener('pointermove', (e) => {
    if (!pointerActive) return;
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      e.preventDefault();
      const deltaY = startY - e.clientY;
      scrollTarget += deltaY;
      clamp();
      startY = e.clientY;
    }
  }, { passive: false });

  window.addEventListener('pointerup',   () => { pointerActive = false; }, { passive: true });
  window.addEventListener('pointercancel', () => { pointerActive = false; }, { passive: true });

  // --- Fallback touch* (anciens iOS/Android sans PointerEvent) ---
  if (!('onpointerdown' in window)) {
    let touchY = 0;
    window.addEventListener('touchstart', (e) => {
      touchY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const currentY = e.touches[0].clientY;
      const deltaY = touchY - currentY;
      scrollTarget += deltaY;
      clamp();
      touchY = currentY;
    }, { passive: false });
  }

  // --- Boutons haut/bas (utiliser ta cta / bouton haut existants) ---
  $('#scroll-top').on('click', () => { scrollTarget = 0; });
  $('.cta-button1').on('click', () => { scrollTarget = maxScroll(); });
  $('.pf').on('click', () => { scrollTarget = maxScroll(); });

  // --- RAF loop + effets (brightness/scale) ---
  function tick() {
    currentScroll += (scrollTarget - currentScroll) * ease;

    const ratioBase = Math.max(1, window.innerHeight); // évite division par 0 sur mobile
    const ratio = Math.min(currentScroll / ratioBase, 1);

    const brightness = Math.max(1 - 1.3 * ratio, 0);
    const scale = 1 - 0.1 * ratio;

    $('.accueil-page').css({
      filter: `brightness(${brightness})`,
      transform: `scale(${scale})`
    });

    window.scrollTo(0, currentScroll);
    requestAnimationFrame(tick);
  }
  tick();

  // Recalcule les bornes quand la fenêtre change (mobile paysage/portrait)
  window.addEventListener('resize', () => { clamp(); }, { passive: true });
  window.addEventListener('orientationchange', () => {
    setTimeout(() => { clamp(); }, 200);
  }, { passive: true });
  if (window.location.hash === "#bottom") {
    scrollTarget = $(document).height() - $(window).height();

    // Retirer le hash de l’URL
    history.replaceState(null, null, window.location.pathname);
  }
});


  });
  
