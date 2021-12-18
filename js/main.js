---
layout: null
sitemap:
  exclude: 'yes'
---
function toggleMobileMenu() {
  $('.navigation-wrapper').toggleClass('visible');
  $('.btn-mobile-menu__icon').toggleClass('hidden');
  $('.btn-mobile-close__icon').toggleClass('hidden');
}

function LimpiarListados() {
  $('#ListaProjects').addClass('displayNone');
  $('#ListaExperiences').addClass('displayNone');
}

function CerrarMenu() {
    $('.content-wrapper').removeClass('animated slideInRight');
    $('.panel-cover').removeClass('panel-cover--collapsed');
    $('.panel-cover').css('max-width', '100%');
    $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {});
    $('.content-wrapper').removeClass('showing');
    window.location.hash = '';
    parent.location.hash = '';
}

$(document).ready(function () {
  $('a.panel-button').click(function (e) {
    
    if ($('.content-wrapper').hasClass('showing')){
      window.location.hash = $('#' + e.target.id).attr("href");
      // $('.content-wrapper').removeClass('animated slideInRight');
      // $('.panel-cover').removeClass('panel-cover--collapsed');
      // $('.panel-cover').css('max-width', '100%');
      // $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {});
      //$('.content-wrapper').removeClass('showing');
      //window.location.hash = '';
      //parent.location.hash = '';
      e.preventDefault();
      return;
    }
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {});
    }
    $('.content-wrapper').addClass('showing');
  })

  // if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
  //   $('.panel-cover').addClass('panel-cover--collapsed')
  // }

  $('.btn-mobile-menu').click(function () {
    if (!$('.navigation-wrapper').hasClass('animated bounceInDown')){
        $('.navigation-wrapper').addClass('animated bounceInDown');
    }
    toggleMobileMenu();
  })

  $('#projects-button').click(function () {
    toggleMobileMenu();
    LimpiarListados();
    $('#ListaProjects').removeClass('displayNone');
    $('#ListaProjects').addClass('displayAuto');

    if ($('.content-wrapper').hasClass('showing')){
      if (window.location.hash && 
        (window.location.hash == '#projects' || (window.location.hash == '#/#projects'))){
        CerrarMenu();
      }
    }
  })

  $('#experiences-button').click(function () {
    toggleMobileMenu();
    LimpiarListados();  
    $('#ListaExperiences').removeClass('displayNone');
    $('#ListaExperiences').addClass('displayAuto');
    
    if ($('.content-wrapper').hasClass('showing')){
      if (window.location.hash && 
        (window.location.hash == '#experiences' || window.location.hash == '#/#experiences')){
        CerrarMenu();
      }
    }
  })

})
