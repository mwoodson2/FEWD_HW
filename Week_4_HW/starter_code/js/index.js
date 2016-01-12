$(document).ready(function() {

  $('a').click(function() {
    event.preventDefault();
  });

  $('.readmore').click(function(){
    $('.show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
  });


  $('.readless').click(function (){
    $('.show-this-on-click').slideUp();
    $('.hide').hide();
    $('.readmore').show();
  });
  // not sure if this is the correct behavior?

  $('.learnmore').click(function() {
    $('.learnmoretext').slideDown();
    $('.learnmore').hide();


  });

}); //end ready
