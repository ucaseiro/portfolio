
$(document).ready(function () {
    const $cards = $('.card');
    let currentIndex = 0;
    
 
    function updateCarousel() {
      $cards.removeClass('left center right');
      $('.blob1').removeClass('animated-gradient-green animated-gradient-purple animated-gradient-orange animated-gradient-red animated-gradient-blue');
      $('.blob2').removeClass('animated-gradient-green2 animated-gradient-purple2 animated-gradient-orange2 animated-gradient-red2 animated-gradient-blue2')
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
        $('.blob1').addClass('animated-gradient-blue')
        $('.blob2').addClass('animated-gradient-blue2')
      }
      else if (currentIndex==1){
        $('.type').text('Code');
        $('.date').text('Janvier - Mars 2025');
        $('.tech').text('VS Code : P5js');
        $('.title').text('DU VENT DANS LE CODE');
        $('.blob1').addClass('animated-gradient-green')
        $('.blob2').addClass('animated-gradient-green2')
        
      }
      else if (currentIndex==2){
        $('.type').text('Design Graphique');
        $('.date').text('Avril 2025');
        $('.tech').text('Photoshop');
        $('.title').text('YELLOW GAZE');
        $('.blob1').addClass('animated-gradient-blue')
        $('.blob2').addClass('animated-gradient-blue2')
      }
      else if (currentIndex==3){
        $('.type').text('Animation');
        $('.date').text('Avril - Mai 2025');
        $('.tech').text('After Effects - Illustrator');
        $('.title').text('RIGGING & ANIMATION 2D');
        $('.blob1').addClass('animated-gradient-purple')
        $('.blob2').addClass('animated-gradient-purple2')
  
      }
      else if (currentIndex==4){
        $('.type').text('Illustration Vectorielle');
        $('.date').text('Septembre - Octobre 2024');
        $('.tech').text('Illustrator');
        $('.title').text('ILLUSTRATIONS VECTORIELLES');
        $('.blob1').addClass('animated-gradient-orange')
        $('.blob2').addClass('animated-gradient-orange2')
      }
      else if (currentIndex==5){
        $('.type').text('Photographie - Mise en page');
        $('.date').text('Octobre 2024');
        $('.tech').text('Illustrator');
        $('.title').text('FICHE PRODUIT');
        $('.blob1').addClass('animated-gradient-orange')
        $('.blob2').addClass('animated-gradient-orange2')
      }
      else if (currentIndex==6){
        $('.type').text('Observation, nu, extérieur');
        $('.date').text('Septembre 2024 - Juin 2025');
        $('.tech').text('Pierre noire, stylo, peinture');
        $('.title').text('EXPRESSION PLASTIQUE ');
        $('.blob1').addClass('animated-gradient-red')
        $('.blob2').addClass('animated-gradient-red2')
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
    $('body.01').css('background', 'linear-gradient(270deg, rgb(0,10,0) 0%, rgb(0,41,27) 30%, rgb(0,70,50) 70%, rgb(0,10,0) 100%)');
    $('body.02').css('background', 'linear-gradient(270deg, rgba(0,0,0,1)0%, rgb(0,8,41)30%, rgba(10, 30, 70, 1)70%, rgba(0,0,0,1)100%)');
    $('body.03').css('background', 'linear-gradient(270deg, rgb(0,0,0) 0%, rgb(27,0,41) 30%, rgb(50,0,80) 70%, rgb(0,0,0) 100%)');
    $('body.04').css('background', 'linear-gradient(270deg, rgba(10, 10, 0, 1) 0%, rgba(50, 23, 0, 1) 30%, rgba(70, 30, 0, 1) 70%, rgba(10, 10, 0, 1) 100%)');
    $('body.05').css('background', 'linear-gradient(270deg, rgba(10, 10, 0, 1) 0%, rgba(50, 23, 0, 1) 30%, rgba(70, 30, 0, 1) 70%, rgba(10, 10, 0, 1) 100%)');
    $('body.09').css('background', 'linear-gradient(270deg, rgb(0,0,0) 0%, rgb(41,0,0) 30%, rgb(90,0,0) 70%, rgb(0,0,0) 100%)');

  
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

  });
  
