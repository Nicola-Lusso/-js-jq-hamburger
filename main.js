// Hamburger menu:
// mostrare-nascondere il menu principale quando ci si clicca sopra

$( document ).ready(function() {

  $('.header-right > a, .hamburger-menu > a' ).click(function(){
    $('.hamburger-menu').toggle();
  });

});
