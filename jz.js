// see-farm, animals, background, moevement
// do-click animals
// expect-hear sounds of different animals for the animals to move
// select animal on click
$('#pig').click(function() {
  // randomize number for the variable
  var randPosX = ((Math.random()*1100));
  var randPosY = ((Math.random()*600));
  //call for the first div audio
  var audio = $("#pigglet")[0];
  console.log(randPosY)
  // randomize direction movement for element
  $('#pig').css('left', randPosX);
  $('#pig').css('top', randPosY);
  audio.play();
});
// select animal on click
  $('#goat').click(function() {
    // randomize number for the variable
    var randPosX = ((Math.random()*1100));
    var randPosY = ((Math.random()*600));
    //call for the first div audio
    var audio = $("#kid")[0];
    console.log(randPosY)
    // randomize direction movement for element
    $('#goat').css('left', randPosX);
    $('#goat').css('top', randPosY);
    audio.play();
});
// select animal on click
$('#horse').click(function() {
  // randomize number for the variable
  var randPosX = ((Math.random()*1100));
  var randPosY = ((Math.random()*600));
  //call for the first div audio
  var audio = $("#babe")[0];
  console.log(randPosY)
  // randomize direction movement for element
  $('#horse').css('left', randPosX);
  $('#horse').css('top', randPosY);
  audio.play();
});
// select animal on click
  $('#cow').click(function() {
    // randomize number for the variable
    var randPosX = ((Math.random()*1100));
    var randPosY = ((Math.random()*600));
    //call for the first div audio
    var audio = $("#moo")[0];
    console.log(randPosY)
    // randomize direction movement for element
    $('#cow').css('left', randPosX);
    $('#cow').css('top', randPosY);
    audio.play();
});
// randomize direction of movement
  $('#dog').click(function() {
    // randomize number for the variable
      var randPosX = ((Math.random()*1100));
      var randPosY = ((Math.random()*600));
    //call for the first div audio
      var audio = $("#pup")[0];
      // randomize direction movement for element
      $('#dog').css('left', randPosX);
      $('#dog').css('top', randPosY);
      audio.play();
;
});
