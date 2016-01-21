$(document).ready(function() {

  var c = $('.temp-type').val();
  var f = c * 1.8 + 32;

function changeTemp(f){//defining changeTemp
  if (f > 32){
    $('.span').css('background-image', 'url(./images/warm.jpg)');
  } else if (f < 32){
    $('.span').css('background-image', 'url(./images/snow.png)');
  } else if (f === 32){
    $('.span').css('background-image', 'url(./images/snow.png)');
  }
  };


$('.submit').click(fuction(){
  event.preventDefault();
  temp = $('.temp-type').val();
  changeTemp(temp)
})






}); //end ready
