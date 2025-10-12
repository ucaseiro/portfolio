
$(document).ready(function () {
    const $cards = $('.card');
    let currentIndex = 0;
    
 
    function updateCarousel() {
      $cards.removeClass('left center right');
      $('.blob1').removeClass('green1 purple1 orange1 red1 blue1');
      $('.blob2').removeClass('green2 purple2 orange2 red2 blue2');
      $('.blob3').removeClass('green3 purple3 orange3 red3 blue3');
      $('.blob4').removeClass('green4 purple4 orange4 red4 blue4');
      $('.blob5').removeClass('green5 purple5 orange5 red5 blue5');
      const total = $cards.length;
      const leftIndex = (currentIndex - 1 + total) % total;
      const centerIndex = currentIndex % total;
      const rightIndex = (currentIndex + 1) % total;
  
      $cards.eq(leftIndex).addClass('left');
      $cards.eq(centerIndex).addClass('center');
      $cards.eq(rightIndex).addClass('right');
      const $body = $('body.gallery-page');

      if (currentIndex<9){
        $('.big-number').text('0'+(currentIndex+1));
      } 
      else{
        $('.big-number').text((currentIndex+1));
      } 
      if (currentIndex==0){
        $('.type').text('Design Graphique');
        $('.date').text('Septembre - Novembre 2024');
        $('.tech').text('Photoshop');
        $('.title').text('AUTOPORTRAIT NARRATIF');
        $('.blob1').addClass('blue1')
        $('.blob2').addClass('blue2')
        $('.blob3').addClass('blue3')
        $('.blob4').addClass('blue4')
        $('.blob5').addClass('blue5')
      }
      else if (currentIndex==1){
        $('.type').text('Code');
        $('.date').text('Janvier - Mars 2025');
        $('.tech').text('VS Code : P5js');
        $('.title').text('DU VENT DANS LE CODE');
        $('.blob1').addClass('green1')
        $('.blob2').addClass('green2')
        $('.blob3').addClass('green3')
        $('.blob4').addClass('green4')
        $('.blob5').addClass('green5')
        
      }
      else if (currentIndex==2){
        $('.type').text('Design Graphique');
        $('.date').text('Avril 2025');
        $('.tech').text('Photoshop');
        $('.title').text('YELLOW GAZE');
        $('.blob1').addClass('blue1')
        $('.blob2').addClass('blue2')
        $('.blob3').addClass('blue3')
        $('.blob4').addClass('blue4')
        $('.blob5').addClass('blue5')
      }
      else if (currentIndex==3){
        $('.type').text('Animation');
        $('.date').text('Avril - Mai 2025');
        $('.tech').text('After Effects - Illustrator');
        $('.title').text('RIGGING & ANIMATION 2D');
        $('.blob1').addClass('purple1')
        $('.blob2').addClass('purple2')
        $('.blob3').addClass('purple3')
        $('.blob4').addClass('purple4')
        $('.blob5').addClass('purple5')
  
      }
      else if (currentIndex==4){
        $('.type').text('Illustration Vectorielle');
        $('.date').text('Septembre - Octobre 2024');
        $('.tech').text('Illustrator');
        $('.title').text('ROUGH VECTORIEL');
        $('.blob1').addClass('orange1')
        $('.blob2').addClass('orange2')
        $('.blob3').addClass('orange3')
        $('.blob4').addClass('orange4')
        $('.blob5').addClass('orange5')
      }
      else if (currentIndex==5){
        $('.type').text('Photographie - Mise en page');
        $('.date').text('Octobre 2024');
        $('.tech').text('Illustrator');
        $('.title').text('FICHE PRODUIT');
        $('.blob1').addClass('orange1')
        $('.blob2').addClass('orange2')
        $('.blob3').addClass('orange3')
        $('.blob4').addClass('orange4')
        $('.blob5').addClass('orange5')
      }
      else if (currentIndex==6){
        $('.type').text('Observation, nu, extérieur');
        $('.date').text('Septembre 2024 - Juin 2025');
        $('.tech').text('Pierre noire, stylo, peinture');
        $('.title').text('EXPRESSION PLASTIQUE ');
        $('.blob1').addClass('red1')
        $('.blob2').addClass('red2')
        $('.blob3').addClass('red3')
        $('.blob4').addClass('red4')
        $('.blob5').addClass('red5')
      }
      else if (currentIndex==7){
        $('.type').text('Type de projet '+(currentIndex+1));
        $('.date').text('Date '+(currentIndex+1));
        $('.tech').text('Logiciel '+(currentIndex+1));
        $('.title').text('NOM DU PROJET '+(currentIndex+1));
      }
      else if (currentIndex==8){
        $('.type').text('Type de projet '+(currentIndex+1));
        $('.date').text('Date '+(currentIndex+1));
        $('.tech').text('Logiciel '+(currentIndex+1));
        $('.title').text('NOM DU PROJET '+(currentIndex+1));
      }
      else if (currentIndex==9){
        $('.type').text('Observation, nu, extérieur');
        $('.date').text('Septembre 2024 - Juin 2025');
        $('.tech').text('Pierre noire, stylo, peinture');
        $('.title').text('EXPRESSION PLASTIQUE ');
        $('body.gallery-page').css('background', 'linear-gradient(0deg, rgba(0,0,0,1) 12%, rgb(41,0,0) 100%)');
      }
      $('.card.center').on('click', function () {
        window.location.href = 'project0'+currentIndex+'.html'; // Remplace par le bon chemin vers ta page projet
      });
      
    }
  
    $('.arrow-right').click(function () {
      currentIndex = (currentIndex + 1) % $cards.length;
      updateCarousel();
    });
  
    $('.arrow-left').click(function () {
      currentIndex = (currentIndex - 1 + $cards.length) % $cards.length;
      updateCarousel();
    });

    $('body.00').css('background', 'linear-gradient(270deg, rgba(0,0,0,1)0%, rgb(0,8,41)30%, rgba(10, 30, 70, 1)70%, rgba(0,0,0,1)100%)');
    $('body.01').css('background', 'linear-gradient(0deg, rgba(0,0,0,1) 12%, rgb(0,41,27) 100%)');
    $('body.02').css('background', 'linear-gradient(0deg, rgba(0,0,0,1) 12%, rgb(0,8,41) 100%)');
    $('body.03').css('background', 'linear-gradient(0deg, rgba(0,0,0,1) 12%, rgb(27,0,41) 100%)');
    $('body.04').css('background', 'linear-gradient(0deg, rgba(0,0,0,1) 12%,rgba(99, 45, 0, 1)100%)');
    $('body.05').css('background', 'linear-gradient(0deg, rgba(0,0,0,1) 12%,rgba(99, 45, 0, 1)100%)');
    $('body.09').css('background', 'linear-gradient(0deg, rgba(0,0,0,1) 12%, rgb(41,0,0) 100%)');

  
    updateCarousel(); // Initial call
    window.addEventListener('scroll', () => {
        if (window.scrollX !== 0) {
          window.scrollTo(0, window.scrollY);
        }
      });

      $('.fullscreen-image').on('click', function () {
        if (
          document.fullscreenElement || 
          document.webkitFullscreenElement || 
          document.msFullscreenElement
        ) {
          // Quitter le plein écran
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          // Entrer en plein écran
          let elem = this;
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) { // Safari
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { // IE11
            elem.msRequestFullscreen();
          }
        }
      });
      const $videos = $('.fullscreen-image');

  $videos.on('click', function () {
    const video = this;

    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  });

  // Ecoute globale sur le document pour détecter sortie du plein écran
  document.addEventListener('fullscreenchange', function () {
    if (!document.fullscreenElement) {
      // Rejouer *toutes* les vidéos après sortie du plein écran
      $videos.each(function () {
        this.play();
      });
    }
  });
  });
  
