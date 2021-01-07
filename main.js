// Hamburger menu:
// mostrare-nascondere il menu principale quando ci si clicca sopra

$( document ).ready(function() {

  $('a').click(function(){
    $('.hamburger-menu').toggle();
  });

});
