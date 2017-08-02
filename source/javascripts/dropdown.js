

$( document ).ready(function() {

  
  $('.dropdown').mouseenter(function(e){
    $('.dropdown-toggle', e.target).trigger('click');
  });



});