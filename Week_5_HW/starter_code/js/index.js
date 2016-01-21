$(document).ready(function() {
var city;
function changeBackground(a){//defining changebackground
  if (a === "New York" || a === "NY" || a === "NYC") {
    $('body').css('background-image', 'url(../starter_code/images/nyc.jpg)');
  } else if (a === "San Francisco" || a === "SF" || a === "Bay Area"){
    $('body').css('background-image', 'url(../starter_code/images/sf.jpg)');
  } else if (a === "Los Angeles" || a === "LA" || a === "LAX"){
    $('body').css('background-image', 'url(../starter_code/images/la.jpg)');
  } else if (a === "Austin" || a === "ATX") {
    $('body').css('background-image', 'url(../starter_code/images/austin.jpg)');
  } else if (a === "Sydney" || a === "SYD") {
    $('body').css('background-image', 'url(../starter_code/images/sydney.jpg)');
  }
    $('.city-type').val('');
};

  $('.submit-btn').click(function() {
    event.preventDefault();
    city = $('.city-type').val(); //add city values
    console.log("city " + city);
    changeBackground(city); //putting changeBackground into action
  });


// var value = $('NYC').val(); // assumes one input element

// // $("submit").click(function() {
//        $('body').css('background-image', 'url(../images/backgrounds/header-top.jpg)'); // change to background image (placeholder)
//    });
// $("submit-btn").click(function(){
//     $("input:text").val("");
// });
//
// $("button").click(function(){
//     $("img").attr("width","500"); //function change the background image
// });
//



// if city === NYC || New York || New York City (Show NYC.jpg)
// if city === San Francisco || SF || Bay Area (Show SF.jpg)
// if city === Los Angeles || LA || LAX (Show lA.jpg)
// if city === Austin || ATX (Show Austin.jpg)
// if city === Sydney || SYD (Show Sydney.jpg)





}); //end ready
